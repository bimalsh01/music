"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TunerText } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { playTone } from "@/lib/audio/synth";
import type { MicInput } from "@/lib/audio/pitch";
import { headstock } from "@/lib/music/headstock";
import { isLowInstrument, presetIds, stringsFor, type InstrumentId, type PresetId } from "@/lib/music/instruments";
import { midiToFreq, namingFor, noteName, octaveOf } from "@/lib/music/notes";
import { applyFrequency, EMPTY_READING, IN_TUNE_CENTS, meterBars, randomDetune, type BarTone, type TunerReading } from "@/lib/music/tuning";
import { useRehydrateSettings, useSettings } from "@/lib/store";
import { MoreToggle, PrimaryButton, Switch } from "@/components/shell/controls";
import { Mic, Speaker, StopSquare } from "@/components/shell/icons";
import { PageTitle } from "@/components/shell/HowTo";

type Mode = "idle" | "asking" | "listening" | "demo" | "nomic";

export interface InstrumentTab {
  id: InstrumentId;
  label: string;
  href: string;
}

interface Props {
  locale: Locale;
  instrument: InstrumentId;
  title: string;
  tabs: InstrumentTab[];
  L: TunerText;
}

const TICK_MS = 70;
const SILENCE_MS = 700;

const BAR_COLOR: Record<BarTone, string> = {
  center: "rgba(30,207,154,0.35)",
  track: "var(--color-track)",
  ok: "var(--color-ok)",
  needle: "var(--color-ink)",
  fill: "var(--color-needle-fill)",
};

export function Tuner({ locale, instrument, title, tabs, L }: Props) {
  useRehydrateSettings();
  const a4 = useSettings((s) => s.a4);
  const sound = useSettings((s) => s.sound);
  const setSettings = useSettings((s) => s.set);

  const [preset, setPreset] = useState<PresetId>("standard");
  const [mode, setMode] = useState<Mode>("idle");
  const [manual, setManual] = useState(false);
  const [reading, setReading] = useState<TunerReading>(EMPTY_READING);
  const [more, setMore] = useState(false);

  const strings = stringsFor(instrument, preset);
  const n = strings.length;
  const naming = namingFor(locale);

  // Refs so the 70 ms loop always sees current values.
  const live = useRef({ reading, manual, a4, strings, lastHeard: 0 });
  useEffect(() => {
    live.current.manual = manual;
    live.current.a4 = a4;
    live.current.strings = strings;
  }, [manual, a4, strings]);
  const loop = useRef<ReturnType<typeof setInterval> | null>(null);
  const mic = useRef<MicInput | null>(null);
  const demo = useRef({ idx: 0, off: 0, held: 0 });

  const commit = useCallback((r: TunerReading) => {
    live.current.reading = r;
    setReading(r);
  }, []);

  const stopAll = useCallback(() => {
    if (loop.current) clearInterval(loop.current);
    loop.current = null;
    mic.current?.stop();
    mic.current = null;
  }, []);

  useEffect(() => stopAll, [stopAll]);

  const onFreq = useCallback(
    (f: number) => {
      const s = live.current;
      s.lastHeard = Date.now();
      commit(applyFrequency(s.reading, f, s.strings, s.a4, s.manual, s.lastHeard));
    },
    [commit],
  );

  const startMic = useCallback(async () => {
    stopAll();
    setMode("asking");
    commit({ ...live.current.reading, done: {}, allDone: false, cents: null, freq: null, holdKey: null });
    try {
      const { openMic } = await import("@/lib/audio/pitch");
      const input = await openMic(isLowInstrument(instrument));
      mic.current = input;
      live.current.lastHeard = 0;
      loop.current = setInterval(() => {
        const f = input.read();
        if (f > 0) onFreq(f);
        else if (live.current.reading.cents !== null && Date.now() - live.current.lastHeard > SILENCE_MS) {
          commit({ ...live.current.reading, cents: null, freq: null });
        }
      }, TICK_MS);
      setMode("listening");
    } catch {
      setMode("nomic");
    }
  }, [commit, instrument, onFreq, stopAll]);

  const startDemo = useCallback(() => {
    stopAll();
    demo.current = { idx: 0, off: randomDetune(), held: 0 };
    setManual(false);
    commit({ ...EMPTY_READING });
    setMode("demo");
    const notes = [57, 62, 67, 64];
    loop.current = setInterval(() => {
      const d = demo.current;
      const strs = live.current.strings;
      d.off += -d.off * 0.07 + (Math.random() - 0.5) * 1.4;
      const target = strs.length ? strs[d.idx] : notes[d.idx % notes.length];
      onFreq(midiToFreq(target + d.off / 100, live.current.a4));
      if (Math.abs(d.off) < 3) {
        d.held += TICK_MS;
        if (d.held > 1400) {
          d.held = 0;
          if (strs.length && d.idx >= strs.length - 1) {
            stopAll();
            setMode("idle");
            commit({ ...live.current.reading, allDone: true });
            return;
          }
          d.idx++;
          d.off = randomDetune();
        }
      } else d.held = 0;
    }, TICK_MS);
  }, [commit, onFreq, stopAll]);

  const active = mode === "listening" || mode === "demo" || mode === "asking";
  const hasReading = active && reading.cents !== null;
  const cents = reading.cents ?? 0;
  const inTune = hasReading && Math.abs(cents) < IN_TUNE_CENTS;
  const sel = Math.min(reading.sel, Math.max(0, n - 1));
  const targetMidi = n ? strings[sel] : hasReading ? reading.chrom : 69;

  const showNote = n > 0 || hasReading;
  let subline: string;
  if (hasReading) subline = `${reading.freq!.toFixed(1)} Hz${mode === "demo" ? ` · ${L.demoTag}` : ""}`;
  else if (n) subline = `${L.string} ${n - sel} · ${midiToFreq(targetMidi, a4).toFixed(1)} Hz`;
  else subline = L.any;

  let status: string;
  let announce: string;
  let good = false;
  if (reading.allDone && !hasReading) {
    status = announce = L.allDone;
    good = true;
  } else if (!active) status = announce = L.idle;
  else if (!hasReading) status = announce = L.listening;
  else if (inTune) {
    status = announce = reading.allDone ? L.allDone : L.inTune;
    good = true;
  } else {
    const cr = Math.round(Math.abs(cents));
    announce = cents < 0 ? L.flat : L.sharp;
    status = cents < 0 ? `${L.flat} · ${cr}¢ ♭` : `${L.sharp} · ${cr}¢ ♯`;
  }
  const pill = good
    ? { bg: "rgba(30,207,154,0.14)", fg: "var(--color-ok)", dot: "var(--color-ok)" }
    : active
      ? { bg: "var(--color-inset)", fg: "var(--color-ink)", dot: "var(--color-accent)" }
      : { bg: "var(--color-inset)", fg: "var(--color-muted)", dot: "var(--color-muted)" };

  const bars = meterBars(hasReading ? cents : null);
  const presets = presetIds(instrument);

  const pickString = (i: number) => {
    setManual(true);
    commit({ ...live.current.reading, sel: i, cents: active ? live.current.reading.cents : null });
    if (sound) playTone(strings[i], a4);
  };

  return (
    <section className="tool-hero flex flex-col gap-[22px] min-[860px]:gap-[clamp(14px,2.6svh,34px)]">
      <div className="flex flex-col gap-3 min-[860px]:gap-[clamp(10px,1.8svh,18px)]">
        <nav aria-label={L.instruments} className="flex gap-1.5 overflow-x-auto py-0.5">
          {tabs.map((tb) => {
            const cur = tb.id === instrument;
            return (
              <Link
                key={tb.id}
                href={tb.href}
                aria-current={cur ? "page" : undefined}
                className={`flex min-h-10 flex-none items-center rounded-full px-4 text-sm font-semibold no-underline ${
                  cur ? "bg-accent text-on-accent" : "bg-inset text-ink"
                }`}
              >
                {tb.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-wrap items-end justify-between gap-[18px]">
          <PageTitle>{title}</PageTitle>
          {presets.length > 1 && (
            <label className="flex items-center gap-2.5">
              <span className="text-sm text-muted">{L.preset}</span>
              <select
                value={preset}
                onChange={(e) => {
                  setPreset(e.target.value as PresetId);
                  commit({ ...live.current.reading, sel: 0, done: {}, allDone: false });
                }}
                className="h-11 cursor-pointer rounded-full border-none bg-inset px-4 text-sm font-semibold text-ink"
              >
                {presets.map((p) => (
                  <option key={p} value={p}>
                    {L.presets[p]}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      </div>

      {/*
        Below 860px the two columns stack, and the readout + Start button come first so the tuner
        is usable without scrolling on a phone. From 860px up it's the prototype's side-by-side row,
        filling the rest of the one-screen hero; the headstock scales to the height that is left.
      */}
      <div className="flex flex-col items-center gap-[clamp(34px,6vw,80px)] min-[860px]:min-h-0 min-[860px]:flex-1 min-[860px]:flex-row min-[860px]:items-stretch min-[860px]:justify-center">
        {n > 0 && (
          <div className="flex w-full min-w-0 flex-col items-center gap-2.5 min-[860px]:w-auto min-[860px]:flex-[1_1_380px]">
            <div className="flex w-full justify-center [container-type:inline-size] min-[860px]:min-h-0 min-[860px]:flex-1 min-[860px]:items-center min-[860px]:[container-type:size]">
              <Headstock
              instrument={instrument}
              strings={strings}
              sel={sel}
              highlight={manual || active}
              done={reading.done}
              naming={naming}
              L={L}
              onPick={pickString}
              />
            </div>
            <p className="m-0 text-center text-sm text-muted">{L.tapString}</p>
          </div>
        )}

        <div className="order-first flex w-full min-w-0 max-w-[520px] flex-col items-center gap-3 min-[860px]:order-none min-[860px]:w-auto min-[860px]:flex-[1_1_360px] min-[860px]:justify-center min-[860px]:gap-[clamp(8px,1.6svh,18px)]">
          <p aria-live="polite" className="sr-only">
            {announce}
          </p>
          <span
            className="flex h-8 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold tabular"
            style={{ background: pill.bg, color: pill.fg }}
          >
            <span className="size-2 rounded-full" style={{ background: pill.dot }} />
            {status}
          </span>
          <div className="flex items-start gap-1.5">
            <span
              className="font-display text-[clamp(96px,26vw,120px)] leading-[0.85] min-[860px]:text-[clamp(72px,min(14vw,15svh),200px)] font-extrabold tracking-[-0.05em] transition-colors duration-[120ms]"
              style={{ color: inTune ? "var(--color-ok)" : hasReading || !active ? "var(--color-ink)" : "var(--color-muted)" }}
            >
              {showNote ? noteName(targetMidi, naming) : "–"}
            </span>
            <span className="mt-2 font-display text-4xl font-bold text-muted">{showNote ? octaveOf(targetMidi) : ""}</span>
          </div>
          <div className="flex min-h-11 items-center gap-2.5">
            <span className="text-[15px] text-muted tabular">{subline}</span>
            <button
              type="button"
              onClick={() => sound && playTone(targetMidi, a4)}
              aria-label={L.play}
              title={L.play}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
            >
              <Speaker />
            </button>
          </div>
          <div role="img" aria-label={status} className="flex w-full flex-col gap-2.5">
            <div className="flex h-[72px] items-center justify-between gap-[5px] min-[860px]:h-[clamp(48px,9svh,72px)]">
              {bars.map((b, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-full transition-colors duration-[80ms]"
                  style={{ height: `${((b.h / 72) * 100).toFixed(1)}%`, background: BAR_COLOR[b.tone] }}
                />
              ))}
            </div>
            <div aria-hidden="true" className="flex justify-between text-xs font-semibold text-muted tabular">
              <span>♭ −50</span>
              <span>0</span>
              <span>+50 ♯</span>
            </div>
          </div>

          {mode === "nomic" && (
            <p className="m-0 text-center text-sm leading-normal text-muted">
              {L.nomic}{" "}
              <button
                type="button"
                onClick={startDemo}
                className="min-h-11 cursor-pointer border-none bg-transparent p-0 text-sm font-semibold text-mint underline underline-offset-[3px]"
              >
                {L.demo}
              </button>
            </p>
          )}

          <PrimaryButton
            active={active}
            className="w-full max-w-[360px]"
            onClick={() => {
              if (active) {
                stopAll();
                setMode("idle");
                commit({ ...live.current.reading, cents: null, freq: null });
              } else void startMic();
            }}
          >
            {active ? <StopSquare /> : <Mic />}
            {active ? L.stop : L.start}
          </PrimaryButton>

          <MoreToggle open={more} onToggle={() => setMore(!more)} more={L.more} less={L.less} controls="tuner-more" />
          {more && (
            <div id="tuner-more" className="flex w-full max-w-[360px] flex-col gap-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[15px] font-medium">{L.a4}</span>
                <div className="flex items-center gap-1 rounded-full bg-inset p-1">
                  <button
                    type="button"
                    aria-label={L.a4Down}
                    onClick={() => setSettings({ a4: Math.max(430, a4 - 1) })}
                    className="size-10 cursor-pointer rounded-full border-none bg-transparent text-xl font-semibold text-ink"
                  >
                    −
                  </button>
                  <span className="min-w-[70px] text-center text-base font-bold tabular">{a4} Hz</span>
                  <button
                    type="button"
                    aria-label={L.a4Up}
                    onClick={() => setSettings({ a4: Math.min(450, a4 + 1) })}
                    className="size-10 cursor-pointer rounded-full border-none bg-transparent text-xl font-semibold text-ink"
                  >
                    +
                  </button>
                </div>
              </div>
              <Switch label={L.sound} checked={sound} onChange={(v) => setSettings({ sound: v })} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Headstock({
  instrument,
  strings,
  sel,
  highlight,
  done,
  naming,
  L,
  onPick,
}: {
  instrument: InstrumentId;
  strings: readonly number[];
  sel: number;
  highlight: boolean;
  done: Record<number, boolean>;
  naming: ReturnType<typeof namingFor>;
  L: TunerText;
  onPick: (i: number) => void;
}) {
  const n = strings.length;
  const hs = headstock(instrument, n);
  return (
    <div
      role="group"
      aria-label={L.strings}
      className="relative flex-none"
      style={{
        aspectRatio: `420 / ${hs.H}`,
        // Fit the available height (desktop hero), the column width, and the prototype's 460px max.
        height: `min(100cqh, ${((100 * hs.H) / 420).toFixed(3)}cqw, ${Math.round((460 * hs.H) / 420)}px)`,
        containerType: "inline-size",
      }}
    >
      <svg aria-hidden="true" viewBox={`0 0 420 ${hs.H}`} className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="neckFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: "var(--color-bg)" }} stopOpacity="0" />
            <stop offset="1" style={{ stopColor: "var(--color-bg)" }} stopOpacity="1" />
          </linearGradient>
        </defs>
        {hs.keys.map((k, i) => (
          <g key={i}>
            <rect x={k.sx} y={k.sy} width="22" height="10" fill="#9AA0A6" />
            <ellipse cx={k.cx} cy={k.cy} rx={k.rx} ry={k.ry} fill={k.fill} />
            <ellipse cx={k.hx} cy={k.hy} rx={k.hrx} ry={k.hry} fill={k.hi} />
          </g>
        ))}
        <rect x={hs.neckX} y={hs.nutY} width={hs.neckW} height={hs.neckH} fill="#2B1A11" />
        {hs.frets.map((y) => (
          <rect key={y} x={hs.neckX} y={y} width={hs.neckW} height="3" fill="#8F959B" />
        ))}
        {hs.scroll && (
          <>
            <circle cx="210" cy="50" r="36" fill="#6B3820" stroke="#E9DFC8" strokeWidth="4" />
            <circle cx="210" cy="50" r="22" fill="none" stroke="#3E1F10" strokeWidth="5" />
            <circle cx="210" cy="50" r="9" fill="#3E1F10" />
          </>
        )}
        <path d={hs.body} fill="#6B3820" stroke="#E9DFC8" strokeWidth="4" strokeLinejoin="round" />
        <path d={hs.face} fill="none" stroke="#4A2614" strokeWidth="2" />
        <rect x={hs.neckX} y={hs.nutY} width={hs.neckW} height="9" fill="#E9DFC8" />
        {hs.slots.map((p) => {
          const i = p.idx;
          const on = i === sel && highlight;
          const px = p.side === "L" ? hs.postL : hs.postR;
          const nx = hs.nutX(i).toFixed(1);
          return (
            <path
              key={`s${i}`}
              d={`M${px} ${p.y} L${nx} ${hs.nutY} L${nx} ${hs.H}`}
              fill="none"
              stroke={on ? "#39FF88" : done[i] ? "#1ECF9A" : "#C9CDD2"}
              strokeWidth={on ? 3.5 : +(2.8 - i * (1.2 / Math.max(1, n - 1))).toFixed(2)}
              strokeLinecap="round"
            />
          );
        })}
        {hs.slots.map((p) => {
          const px = p.side === "L" ? hs.postL : hs.postR;
          return (
            <g key={`p${p.idx}`}>
              <circle cx={px} cy={p.y} r="11" fill="#D5D8DC" />
              <circle cx={px} cy={p.y} r="4" fill="#8A9096" />
            </g>
          );
        })}
        <rect x="0" y={hs.fadeY} width="420" height="120" fill="url(#neckFade)" />
      </svg>
      {hs.slots.map((p) => {
        const i = p.idx;
        const m = strings[i];
        const on = i === sel && highlight;
        const ok = !!done[i];
        const name = noteName(m, naming);
        return (
          <button
            key={i}
            type="button"
            onClick={() => onPick(i)}
            aria-pressed={on}
            aria-label={`${L.string} ${n - i}, ${name}`}
            className="absolute flex size-[clamp(40px,13cqw,60px)] -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full border-none transition-colors duration-[120ms]"
            style={{
              left: `${((p.side === "L" ? 36 : 384) / 420) * 100}%`,
              top: `${((p.y / hs.H) * 100).toFixed(2)}%`,
              background: on ? "var(--color-accent)" : "var(--color-raised)",
              color: on ? "var(--color-on-accent)" : ok ? "var(--color-ok)" : "var(--color-ink)",
              boxShadow: on ? "var(--shadow-ring)" : "none",
            }}
          >
            <span className="font-display text-[clamp(14px,4.6cqw,21px)] leading-none font-bold">{name}</span>
            <span className="text-[10px] leading-none font-bold opacity-80">{ok ? "✓" : n - i}</span>
          </button>
        );
      })}
    </div>
  );
}

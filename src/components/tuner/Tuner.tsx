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
import { applyFrequency, EMPTY_READING, IN_TUNE_CENTS, randomDetune, type TunerReading } from "@/lib/music/tuning";
import { useRehydrateSettings, useSettings } from "@/lib/store";
import { BottomSheet, MoreToggle, PrimaryButton, SettingsButton, Switch } from "@/components/shell/controls";
import { BoltIcon, ChevronDown, GuitarIcon, Mic, Speaker, StopSquare } from "@/components/shell/icons";
import { PageTitle } from "@/components/shell/HowTo";
import { PitchTrace } from "./PitchTrace";

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
  /** Shared labels for the phone settings sheet. */
  ui: { settings: string; close: string };
}

const TICK_MS = 70;
/** Phones crop this much (viewBox units) off the bottom of the neck so the head can be bigger. */
const PHONE_NECK_CROP = 110;
const SILENCE_MS = 350;

export function Tuner({ locale, instrument, title, tabs, L, ui }: Props) {
  useRehydrateSettings();
  const a4 = useSettings((s) => s.a4);
  const sound = useSettings((s) => s.sound);
  const body = useSettings((s) => s.body);
  const hasBody = instrument === "guitar" || instrument === "bass";
  const electric = hasBody && body === "electric";
  const setSettings = useSettings((s) => s.set);

  const [preset, setPreset] = useState<PresetId>("standard");
  const [mode, setMode] = useState<Mode>("idle");
  const [manual, setManual] = useState(false);
  const [reading, setReading] = useState<TunerReading>(EMPTY_READING);
  const [more, setMore] = useState(false);
  const [sheet, setSheet] = useState(false);
  const closeSheet = useCallback(() => setSheet(false), []);
  const [picker, setPicker] = useState(false);
  const closePicker = useCallback(() => setPicker(false), []);

  // Desktop: the right section (graph, Start, More) is as tall as the headstock group on the left,
  // so both start and end on the same lines however tall the window is. It floats (absolute) in
  // its column, so its height can't feed back into the page height.
  const leftGroup = useRef<HTMLDivElement>(null);
  const rightBox = useRef<HTMLDivElement>(null);
  const [leftH, setLeftH] = useState<number | null>(null);
  // How far the graph reaches left past its column: up to ~28px from the guitar's peg buttons.
  const [pull, setPull] = useState(32);
  useEffect(() => {
    const el = leftGroup.current;
    if (!el) return;
    const measure = () => {
      setLeftH(el.offsetHeight);
      const box = rightBox.current;
      if (box) setPull(Math.max(32, Math.round(box.getBoundingClientRect().left - el.getBoundingClientRect().right - 28)));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [instrument]);

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

  const presets = presetIds(instrument);

  const pickString = (i: number) => {
    setManual(true);
    commit({ ...live.current.reading, sel: i, cents: active ? live.current.reading.cents : null });
    if (sound) playTone(strings[i], a4);
  };

  const tuningSelect = (className: string) => (
    <select
      value={preset}
      onChange={(e) => {
        setPreset(e.target.value as PresetId);
        commit({ ...live.current.reading, sel: 0, done: {}, allDone: false, pending: null });
      }}
      className={className}
    >
      {presets.map((p) => (
        <option key={p} value={p} className="bg-raised text-ink">
          {L.presets[p]}
        </option>
      ))}
    </select>
  );

  /** Acoustic/Electric. compact = icons only; inSheet = always shown (inside the phone sheet). */
  const bodyToggle = (compact: boolean, inSheet = false) =>
    hasBody && (
      <div
        role="radiogroup"
        aria-label={L.bodyType}
        className={`flex flex-none rounded-full bg-inset p-1 ${inSheet ? "" : compact ? "min-[860px]:hidden" : "max-[859px]:hidden"}`}
      >
        {(["acoustic", "electric"] as const).map((b) => {
          const on = body === b;
          const label = b === "acoustic" ? L.acoustic : L.electric;
          return (
            <button
              key={b}
              type="button"
              role="radio"
              aria-checked={on}
              aria-label={compact ? label : undefined}
              title={compact ? label : undefined}
              onClick={() => setSettings({ body: b })}
              className={`flex h-9 cursor-pointer items-center gap-1.5 rounded-full border-none text-sm font-bold transition-colors duration-150 ${
                compact ? "w-11 justify-center" : "px-3.5"
              } ${on ? "bg-[rgba(30,207,154,0.16)] text-ok" : "bg-transparent text-ink"}`}
            >
              {b === "acoustic" ? <GuitarIcon size={17} /> : <BoltIcon size={17} />}
              {!compact && label}
            </button>
          );
        })}
      </div>
    );

  const settingsBody = (
    <>
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
    </>
  );

  return (
    <section className="tool-hero flex flex-col gap-3 min-[860px]:gap-[clamp(14px,2.6svh,34px)]">
      <div className="flex flex-col gap-2.5 min-[860px]:gap-[clamp(10px,1.8svh,18px)]">
        <nav aria-label={L.instruments} className="no-scrollbar flex gap-1.5 overflow-x-auto py-0.5 max-[859px]:hidden">
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
        <div className="flex items-center justify-between gap-3 min-[860px]:flex-wrap min-[860px]:gap-x-6 min-[860px]:gap-y-3">
          {/* Phones: the title doubles as the instrument picker (replaces the chip row). */}
          <div
            className="flex min-w-0 items-center gap-1 max-[859px]:cursor-pointer"
            onClick={() => window.matchMedia("(width < 860px)").matches && setPicker(true)}
          >
            {/* Phones show just the instrument (the tab bar already says "Tuner"); the full h1 stays for SEO + screen readers. */}
            <PageTitle className="max-[859px]:sr-only">{title}</PageTitle>
            <span
              aria-hidden="true"
              className="min-w-0 truncate font-display text-[24px] leading-tight font-extrabold tracking-[-0.03em] min-[860px]:hidden"
            >
              {tabs.find((tb) => tb.id === instrument)?.label ?? title}
            </span>
            <button
              type="button"
              aria-label={L.instruments}
              aria-haspopup="dialog"
              className="flex size-8 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink min-[860px]:hidden"
            >
              <ChevronDown size={18} />
            </button>
          </div>
          {n > 0 && (
            <div className="flex flex-none flex-wrap items-center gap-2.5">
              {bodyToggle(false)}
              <button
                type="button"
                role="switch"
                aria-checked={!manual}
                title={L.autoHint}
                onClick={() => {
                  setManual(!manual);
                  commit({ ...live.current.reading, pending: null });
                }}
                className="flex h-10 flex-none cursor-pointer items-center gap-2.5 rounded-full border-none bg-inset pl-4 pr-1.5 text-sm font-bold tracking-[0.04em] text-ink min-[860px]:h-11"
              >
                {L.auto}
                <span
                  aria-hidden="true"
                  className={`box-border flex h-7 w-12 items-center rounded-full p-[3px] transition-colors duration-150 ${
                    manual ? "justify-start bg-raised" : "justify-end bg-accent"
                  }`}
                >
                  <span className={`size-[22px] rounded-full ${manual ? "bg-ink" : "bg-bg"}`} />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/*
        Desktop (≥ 860px): the prototype's side-by-side row, filling the rest of the one-screen hero.
        Phones: one screen like an app. The readout column turns into `display: contents` so its
        parts can sit around the headstock: note + meter on top, headstock in the middle (it takes
        the height that is left), Start at the bottom near the thumb.
      */}
      <div className="flex min-h-0 flex-1 flex-col items-center gap-4 min-[860px]:flex-row min-[860px]:items-stretch min-[860px]:justify-center min-[860px]:gap-[clamp(34px,6vw,80px)]">
        {n > 0 && (
          <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center max-[859px]:order-3 min-[860px]:w-auto min-[860px]:flex-[1_1_380px]">
            {/*
              Headstock, tuning picker and hint share one size container and are centred as a group,
              so the picker always sits right under the neck. --hs-below reserves their height.
            */}
            <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-2.5 [container-type:size] min-[860px]:items-start min-[860px]:[--hs-below:96px]">
              {/* Sized to the headstock; the picker and hint centre under it. */}
              <div ref={leftGroup} className="flex max-w-full flex-col items-center gap-2.5">
                <Headstock
                  instrument={instrument}
                  electric={electric}
                  strings={strings}
                  sel={sel}
                  highlight={manual || active}
                  done={reading.done}
                  naming={naming}
                  L={L}
                  onPick={pickString}
                />
                <div className="flex items-center justify-center gap-2 max-[859px]:hidden">
                  {presets.length > 1 && (
                    <label className="flex h-11 min-w-0 items-center gap-1 rounded-full bg-inset pr-1 pl-1 min-[860px]:pl-4">
                      <span className="flex-none text-sm text-muted max-[859px]:sr-only">{L.preset}</span>
                      {tuningSelect("h-11 min-w-0 cursor-pointer rounded-full border-none bg-transparent px-2.5 text-sm font-semibold text-ink")}
                    </label>
                  )}
                  {bodyToggle(true)}
                </div>
                <p className="m-0 w-0 min-w-full text-center text-sm text-muted max-[859px]:hidden">
                  {manual ? L.tapString : L.autoHint}
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={`flex w-full min-w-0 max-w-[520px] flex-col items-center gap-3 min-[860px]:relative min-[860px]:w-auto min-[860px]:flex-[1_1_360px] ${
            n > 0 ? "max-[859px]:contents" : "max-[859px]:flex-1 max-[859px]:justify-center"
          }`}
        >
          {/* Phones: `contents` (its parts sit around the headstock). Desktop: centred, as tall as the guitar group. */}
          <div
            ref={rightBox}
            className="contents min-[860px]:absolute min-[860px]:inset-x-0 min-[860px]:top-1/2 min-[860px]:flex min-[860px]:-translate-y-1/2 min-[860px]:flex-col min-[860px]:items-center min-[860px]:gap-[clamp(8px,1.6svh,18px)]"
            style={{ height: n > 0 && leftH ? `min(${leftH}px, 100%)` : "100%", ["--pull" as string]: `${n > 0 ? pull : 32}px` }}
          >
          <p aria-live="polite" className="sr-only">
            {announce}
          </p>
          {/*
            The live graph, desktop and phones: faded graph paper with the note readout in its
            top-left corner; the ring follows the pitch just below it and leaves a scrolling trail.
            Phones run it out to the screen edges.
          */}
          <PitchTrace
            cents={hasReading ? cents : null}
            active={active}
            className="w-full max-[859px]:order-1 max-[859px]:-mx-6 max-[859px]:min-h-[200px] max-[859px]:w-[calc(100%+48px)] max-[859px]:flex-[1_1_0%] min-[860px]:-mt-6 min-[860px]:-mr-8 min-[860px]:ml-[calc(-1*var(--pull))] min-[860px]:min-h-[260px] min-[860px]:w-[calc(100%+32px+var(--pull))] min-[860px]:flex-1 min-[860px]:self-start min-[860px]:[--side:44px]"
            overlayClassName="flex flex-col items-start gap-1.5 px-6 pt-1 min-[860px]:gap-2.5 min-[860px]:px-11 min-[860px]:pt-9"
            // What to do, in words: "↑ Tune up −16¢", "✓ In tune", or "Ready".
            footer={
              <p
                data-status
                className="m-0 flex h-7 items-center justify-center gap-2 text-[15px] font-semibold tabular min-[860px]:text-base"
                style={{ color: good ? "var(--color-ok)" : hasReading ? (inTune ? "var(--color-ok)" : "var(--color-bad)") : "var(--color-muted)" }}
              >
                {hasReading && !inTune ? (
                  <>
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cents < 0 ? "" : "rotate-180"}
                    >
                      <path d="M12 19V5M6 11l6-6 6 6" />
                    </svg>
                    {announce}
                    <span className="font-medium text-muted">
                      {cents > 0 ? "+" : "−"}
                      {Math.round(Math.abs(cents))}¢
                    </span>
                  </>
                ) : (
                  <>
                    {good ? <span className="text-base leading-none">✓</span> : <span className="size-2 rounded-full bg-muted" />}
                    {status}
                  </>
                )}
              </p>
            }
          >
            <div className="flex items-start gap-1">
              <span
                className="font-display text-[clamp(60px,min(17vw,9svh),88px)] leading-[0.85] min-[860px]:text-[clamp(80px,min(8vw,13svh),132px)] font-extrabold tracking-[-0.05em] transition-colors duration-[120ms]"
                style={{ color: inTune ? "var(--color-ok)" : hasReading || !active ? "var(--color-ink)" : "var(--color-muted)" }}
              >
                {showNote ? noteName(targetMidi, naming) : "–"}
              </span>
              <span className="mt-1 font-display text-2xl font-bold text-muted min-[860px]:mt-1.5 min-[860px]:text-4xl">
                {showNote ? octaveOf(targetMidi) : ""}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-sm text-muted tabular min-[860px]:text-[15px]">{subline}</span>
              <button
                type="button"
                onClick={() => sound && playTone(targetMidi, a4)}
                aria-label={L.play}
                title={L.play}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink max-[859px]:hidden"
              >
                <Speaker />
              </button>
            </div>
          </PitchTrace>

          {mode === "nomic" && (
            <p className="relative m-0 text-center text-sm leading-normal text-muted max-[859px]:order-4">
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

          <div className="relative flex w-full max-w-[360px] items-center gap-2.5 max-[859px]:order-5 max-[859px]:max-w-none">
            <PrimaryButton
              active={active}
              className="min-w-0 flex-1 max-[859px]:h-[52px]"
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
            <SettingsButton label={ui.settings} onClick={() => setSheet(true)} className="size-[52px]" />
          </div>

          <MoreToggle
            open={more}
            onToggle={() => setMore(!more)}
            more={L.more}
            less={L.less}
            controls="tuner-more"
            className="relative px-3.5 max-[859px]:hidden"
          />
          {more && (
            <div id="tuner-more" className="relative flex w-full max-w-[360px] flex-col gap-1.5 max-[859px]:hidden">
              {settingsBody}
            </div>
          )}
          </div>
        </div>
      </div>

      <BottomSheet open={picker} title={L.instruments} closeLabel={ui.close} onClose={closePicker}>
        <nav aria-label={L.instruments} className="grid grid-cols-2 gap-2">
          {tabs.map((tb) => {
            const cur = tb.id === instrument;
            return (
              <Link
                key={tb.id}
                href={tb.href}
                aria-current={cur ? "page" : undefined}
                onClick={closePicker}
                className={`flex h-14 items-center justify-center rounded-2xl text-[15px] font-semibold no-underline ${
                  cur ? "bg-accent text-on-accent" : "bg-inset text-ink"
                }`}
              >
                {tb.label}
              </Link>
            );
          })}
        </nav>
      </BottomSheet>

      <BottomSheet open={sheet} title={ui.settings} closeLabel={ui.close} onClose={closeSheet}>
        {presets.length > 1 && (
          <label className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[15px] font-medium">{L.preset}</span>
            {tuningSelect("h-11 min-w-0 cursor-pointer rounded-full border-none bg-inset px-4 text-sm font-semibold text-ink")}
          </label>
        )}
        {hasBody && (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[15px] font-medium">{L.bodyType}</span>
            {bodyToggle(false, true)}
          </div>
        )}
        {settingsBody}
      </BottomSheet>
    </section>
  );
}

function Headstock({
  instrument,
  electric,
  strings,
  sel,
  highlight,
  done,
  naming,
  L,
  onPick,
}: {
  instrument: InstrumentId;
  electric: boolean;
  strings: readonly number[];
  sel: number;
  highlight: boolean;
  done: Record<number, boolean>;
  naming: ReturnType<typeof namingFor>;
  L: TunerText;
  onPick: (i: number) => void;
}) {
  const n = strings.length;
  const hs = headstock(instrument, n, electric);
  // Phones show less neck below the nut (the SVG is cropped by `slice`), so the head gets the room.
  const Hm = hs.H - PHONE_NECK_CROP;
  // Closest gap between two pegs on the same side: phone peg buttons never grow past it.
  const ys = hs.slots.filter((p) => p.side === "R").map((p) => p.y);
  const pitch = ys.length > 1 ? Math.abs(ys[1] - ys[0]) : 88;
  const fit = (H: number) =>
    `min(calc(100cqh - var(--hs-below, 0px)), ${((100 * H) / hs.W).toFixed(3)}cqw, ${Math.round((460 * H) / 420)}px)`;
  return (
    <div
      role="group"
      aria-label={L.strings}
      className="relative flex-none [aspect-ratio:var(--ar-m)] [height:var(--hgt-m)] [--hs-h:var(--hs-hm)] min-[860px]:[aspect-ratio:var(--ar-d)] min-[860px]:[height:var(--hgt-d)] min-[860px]:[--hs-h:var(--hs-hd)]"
      style={{
        // Fit the available height, the column width, and the prototype's 460px max.
        ["--ar-d" as string]: `${hs.W} / ${hs.H}`,
        ["--ar-m" as string]: `${hs.W} / ${Hm}`,
        ["--hgt-d" as string]: fit(hs.H),
        ["--hgt-m" as string]: fit(Hm),
        ["--hs-hd" as string]: hs.H,
        ["--hs-hm" as string]: Hm,
        containerType: "size",
        // Peg buttons are sized in 420-unit terms, so a trimmed (narrower) box keeps them the same size.
        ["--k" as string]: (420 / hs.W).toFixed(4),
        // Peg spacing as a fraction of the (phone) box height.
        ["--pitch" as string]: (pitch / Hm).toFixed(4),
      }}
    >
      <svg
        aria-hidden="true"
        viewBox={`${hs.vx} 0 ${hs.W} ${hs.H}`}
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-0 size-full"
      >
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
        <path d={hs.body} fill={hs.bodyFill} stroke="#E9DFC8" strokeWidth="4" strokeLinejoin="round" />
        <path d={hs.face} fill="none" stroke={hs.faceStroke} strokeWidth="2" />
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
        <rect x={hs.vx} y={hs.fadeY} width={hs.W} height="120" fill="url(#neckFade)" />
        <rect x={hs.vx} y={Hm - 60} width={hs.W} height="60" fill="url(#neckFade)" className="min-[860px]:hidden" />
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
            className="absolute flex size-[clamp(26px,min(calc(18cqw*var(--k)),calc(var(--pitch)*88cqh)),60px)] -translate-x-1/2 min-[860px]:size-[clamp(40px,calc(13cqw*var(--k)),60px)] -translate-y-1/2 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-full border-none transition-colors duration-[120ms]"
            style={{
              left: `${(((p.side === "L" ? 36 : 384) - hs.vx) / hs.W) * 100}%`,
              top: `calc(${p.y} / var(--hs-h) * 100%)`,
              background: on ? "var(--color-accent)" : "var(--color-raised)",
              color: on ? "var(--color-on-accent)" : ok ? "var(--color-ok)" : "var(--color-ink)",
              boxShadow: on ? "var(--shadow-ring)" : "none",
            }}
          >
            <span className="font-display text-[clamp(12px,min(calc(6.2cqw*var(--k)),calc(var(--pitch)*32cqh)),21px)] leading-none font-bold min-[860px]:text-[clamp(14px,calc(4.6cqw*var(--k)),21px)]">{name}</span>
            <span className="text-[10px] leading-none font-bold opacity-80">{ok ? "✓" : n - i}</span>
          </button>
        );
      })}
    </div>
  );
}

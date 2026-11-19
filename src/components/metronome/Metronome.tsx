"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MetronomeText } from "@/i18n/dictionary";
import { getAudioContext } from "@/lib/audio/context";
import { BeatScheduler, type SchedulerSettings } from "@/lib/audio/scheduler";
import { scheduleClick } from "@/lib/audio/synth";
import {
  addTap,
  clampBpm,
  clickVoice,
  defaultAccents,
  MAX_BPM,
  MIN_BPM,
  SUBDIVISIONS,
  tempoName,
  TIME_SIGNATURES,
  weightY,
  type Subdivision,
  type TimeSignature,
} from "@/lib/music/metronome";
import { useRehydrateSettings, useSettings } from "@/lib/store";
import { BottomSheet, MoreToggle, PrimaryButton, Segmented, SettingsButton, Switch } from "@/components/shell/controls";
import { PlayTriangle, StopSquare } from "@/components/shell/icons";
import { PageTitle } from "@/components/shell/HowTo";

const FLASH_MS = 90;
const TICKS = [70, 92, 114, 136, 158, 180, 202, 224, 246];

export function Metronome({ L, ui }: { L: MetronomeText; ui: { settings: string; close: string } }) {
  useRehydrateSettings();
  const volume = useSettings((s) => s.volume);
  const flash = useSettings((s) => s.flash);
  const setSettings = useSettings((s) => s.set);

  const [bpm, setBpmRaw] = useState(100);
  const [sig, setSig] = useState<TimeSignature>("4/4");
  const [accents, setAccents] = useState<boolean[]>(() => defaultAccents("4/4"));
  const [sub, setSub] = useState<Subdivision>(1);
  const [playing, setPlaying] = useState(false);
  const [beat, setBeat] = useState(-1);
  const [swing, setSwing] = useState(0);
  const [flashOn, setFlashOn] = useState(false);
  const [taps, setTaps] = useState<number[]>([]);
  const [more, setMore] = useState(false);
  const [sheet, setSheet] = useState(false);
  const closeSheet = useCallback(() => setSheet(false), []);

  const settings = useRef<SchedulerSettings & { volume: number }>({ bpm, sub, accents, volume });
  useEffect(() => {
    settings.current = { bpm, sub, accents, volume };
  }, [bpm, sub, accents, volume]);

  const scheduler = useRef<BeatScheduler | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const wakeLock = useRef<WakeLockSentinel | null>(null);

  const setBpm = (v: number) => setBpmRaw(clampBpm(v));

  const stop = useCallback(() => {
    scheduler.current?.stop();
    clearTimeout(flashTimer.current);
    void wakeLock.current?.release().catch(() => {});
    wakeLock.current = null;
    setPlaying(false);
    setBeat(-1);
    setFlashOn(false);
  }, []);

  const start = useCallback(() => {
    let ctx: AudioContext;
    try {
      ctx = getAudioContext();
    } catch {
      return;
    }
    scheduler.current = new BeatScheduler(ctx, () => settings.current, {
      click(time, _beat, subIndex, accent) {
        const v = clickVoice(accent, subIndex, settings.current.volume);
        scheduleClick(ctx, time, v.freq, v.peak);
      },
      onBeat(b) {
        setBeat(b);
        setSwing((s) => s + 1);
        setFlashOn(true);
        clearTimeout(flashTimer.current);
        flashTimer.current = setTimeout(() => setFlashOn(false), FLASH_MS);
      },
    });
    scheduler.current.start();
    setPlaying(true);
    setBeat(-1);
    navigator.wakeLock
      ?.request("screen")
      .then((l) => (wakeLock.current = l))
      .catch(() => {});
  }, []);

  useEffect(() => stop, [stop]);

  const tap = () => {
    const next = addTap(taps, performance.now());
    setTaps(next.taps);
    if (next.bpm !== null) setBpmRaw(next.bpm);
    clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => setTaps([]), 2100);
  };

  const flashing = playing && flash && flashOn;
  const armDeg = playing ? (swing % 2 ? 26 : -26) : 0;
  const armDur = playing ? Math.round(60000 / bpm) : 300;

  const settingsBody = (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-[15px] font-medium">{L.sub}</span>
        <Segmented
          label={L.sub}
          items={SUBDIVISIONS.map((v, i) => ({ id: v, label: L.subs[i] }))}
          value={sub}
          onChange={setSub}
          className="grid grid-cols-4 gap-0.5"
          itemClassName="h-10 text-[13px] font-semibold"
        />
      </div>
      <label className="flex items-center gap-3">
        <span className="flex-none text-[15px] font-medium">{L.volume}</span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(volume * 100)}
          onChange={(e) => setSettings({ volume: Number(e.target.value) / 100 })}
          className="m-0 h-11 min-w-0 flex-1 cursor-pointer"
        />
      </label>
      <Switch label={L.flash} checked={flash} onChange={(v) => setSettings({ flash: v })} />
    </>
  );

  return (
    <section className="tool-hero flex flex-col gap-3 min-[860px]:gap-[clamp(14px,2.6svh,34px)]">
      {/* Full-screen beat flash behind the page content. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-flash transition-opacity duration-[70ms] ease-out"
        style={{ opacity: flashing ? 1 : 0 }}
      />
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2.5 min-[860px]:items-end min-[860px]:gap-[18px]">
        <PageTitle>{L.title}</PageTitle>
        <Segmented
          label={L.timeSig}
          items={TIME_SIGNATURES.map((g) => ({ id: g, label: g }))}
          value={sig}
          onChange={(g) => {
            setSig(g);
            setAccents(defaultAccents(g));
            setBeat(-1);
          }}
          className="grid w-full grid-cols-6 gap-0.5 min-[860px]:flex min-[860px]:w-auto min-[860px]:flex-wrap"
          itemClassName="h-9 min-w-0 px-1 text-sm font-bold min-[860px]:h-10 min-[860px]:min-w-12 min-[860px]:px-2.5"
        />
      </div>

      {/*
        Desktop (≥ 860px): the prototype's side-by-side row, filling the rest of the one-screen hero;
        the pendulum scales to the height that is left. Phones: one screen like an app. The controls
        column turns into `display: contents` so its parts can sit around the pendulum: BPM on top,
        pendulum in the middle (it takes the height that is left), beats + Play at the bottom.
      */}
      <div className="flex min-h-0 flex-1 flex-col items-center gap-3 min-[860px]:flex-row min-[860px]:items-stretch min-[860px]:justify-center min-[860px]:gap-[clamp(34px,6vw,80px)]">
        <div className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center [container-type:size] max-[859px]:order-2 min-[860px]:w-auto min-[860px]:flex-[1_1_340px]">
          <svg
            role="img"
            aria-label={L.visual}
            viewBox="0 0 300 380"
            className="flex-none"
            // Fit the available height, the column width, and the prototype's 380px max.
            style={{ aspectRatio: "300 / 380", width: "auto", height: "min(100cqh, 126.667cqw, 481px)" }}
          >
            <rect x="26" y="342" width="248" height="24" fill="#3E1F10" />
            <path d="M112 22 L188 22 L264 342 L36 342 Z" fill="#6B3820" stroke="#E9DFC8" strokeWidth="4" strokeLinejoin="round" />
            <path d="M124 50 L176 50 L226 300 L74 300 Z" fill="#2B1A11" />
            {TICKS.map((y, i) => (
              <rect key={y} x={i % 2 ? 144 : 138} y={y} width={i % 2 ? 12 : 24} height="2" fill="#8F959B" />
            ))}
            <g
              style={{
                transform: `rotate(${armDeg}deg)`,
                transformOrigin: "150px 300px",
                transition: `transform ${armDur}ms ease-in-out`,
              }}
            >
              <rect x="148" y="34" width="4" height="266" fill="#D5D8DC" />
              <rect x="130" y={weightY(bpm)} width="40" height="26" fill="#39FF88" />
            </g>
            <circle cx="150" cy="300" r="10" fill="#C9CDD2" />
            <circle cx="150" cy="324" r="7" fill={flashing ? "#39FF88" : "#3E1F10"} />
          </svg>
        </div>

        <div className="flex w-full min-w-0 max-w-[520px] flex-col items-center gap-[26px] max-[859px]:contents min-[860px]:w-auto min-[860px]:flex-[1_1_380px] min-[860px]:justify-center min-[860px]:gap-[clamp(10px,2.2svh,26px)]">
          <div className="flex w-full items-center justify-center gap-[clamp(12px,3vw,34px)] max-[859px]:order-1">
            <button
              type="button"
              onClick={() => setBpm(bpm - 1)}
              aria-label={L.slower}
              className="flex size-12 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-[26px] font-medium text-ink min-[860px]:size-14"
            >
              −
            </button>
            <div className="flex min-w-0 flex-col items-center">
              <output
                aria-live="off"
                className="font-display text-[clamp(64px,min(22vw,11svh),110px)] leading-[0.85] min-[860px]:text-[clamp(72px,min(13vw,15svh),184px)] font-extrabold tracking-[-0.05em] tabular transition-colors duration-[70ms]"
                style={{ color: flashing ? "var(--color-accent-text)" : "var(--color-ink)" }}
              >
                {bpm}
              </output>
              <span className="mt-1.5 text-sm font-semibold text-muted min-[860px]:mt-3.5">BPM · {tempoName(bpm)}</span>
            </div>
            <button
              type="button"
              onClick={() => setBpm(bpm + 1)}
              aria-label={L.faster}
              className="flex size-12 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-[26px] font-medium text-ink min-[860px]:size-14"
            >
              +
            </button>
          </div>

          <label className="flex w-full flex-col gap-0.5 max-[859px]:order-3">
            <span className="sr-only">{L.tempo}</span>
            <input
              type="range"
              min={MIN_BPM}
              max={MAX_BPM}
              step={1}
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              className="m-0 h-11 w-full cursor-pointer"
            />
            <span aria-hidden="true" className="flex justify-between text-xs font-semibold text-muted max-[859px]:hidden">
              <span>{MIN_BPM}</span>
              <span>{MAX_BPM}</span>
            </span>
          </label>

          <div className="flex w-full flex-col gap-2.5 max-[859px]:order-4">
            <div role="group" aria-label={L.beats} className="flex gap-1.5">
              {accents.map((acc, i) => {
                const cur = playing && beat === i;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={acc}
                    aria-label={`${L.beat} ${i + 1}${acc ? `, ${L.accented}` : ""}`}
                    onClick={() => setAccents(accents.map((a, j) => (j === i ? !a : a)))}
                    className="flex h-12 min-w-0 flex-1 cursor-pointer min-[860px]:h-[clamp(44px,7svh,64px)] flex-col items-center justify-center gap-1.5 border-none p-0 transition-colors duration-[60ms]"
                    style={{ background: cur ? "var(--color-accent)" : "var(--color-inset)", color: cur ? "var(--color-on-accent)" : "var(--color-muted)" }}
                  >
                    <span
                      className="rounded-full"
                      style={{
                        width: acc ? 14 : 7,
                        height: acc ? 14 : 7,
                        background: cur ? "var(--color-on-accent)" : acc ? "var(--color-ink)" : "var(--color-muted)",
                      }}
                    />
                    <span className="text-[11px] font-bold tabular">{i + 1}</span>
                  </button>
                );
              })}
            </div>
            <span className="text-center text-[13px] text-muted max-[859px]:hidden">{L.accentHint}</span>
          </div>

          <div className="flex w-full gap-2.5 max-[859px]:order-5">
            <PrimaryButton active={playing} className="min-w-0 flex-[1.4] whitespace-nowrap max-[859px]:h-[52px] max-[859px]:flex-[2] max-[859px]:gap-2 max-[859px]:px-3 max-[859px]:text-[15px]" onClick={() => (playing ? stop() : start())}>
              {playing ? <StopSquare size={20} /> : <PlayTriangle />}
              {playing ? L.stop : L.play}
            </PrimaryButton>
            <button
              type="button"
              onClick={tap}
              className="h-[52px] min-w-0 flex-1 cursor-pointer rounded-full border-none bg-inset px-2 text-[15px] font-semibold whitespace-nowrap text-ink min-[860px]:h-[60px] min-[860px]:text-base"
            >
              {taps.length ? L.tapAgain : L.tap}
            </button>
            <SettingsButton label={ui.settings} onClick={() => setSheet(true)} className="size-[52px]" />
          </div>

          <MoreToggle
            open={more}
            onToggle={() => setMore(!more)}
            more={L.more}
            less={L.less}
            controls="metronome-more"
            className="px-3.5 max-[859px]:hidden"
          />
          {more && (
            <div id="metronome-more" className="flex w-full flex-col gap-3 max-[859px]:hidden">
              {settingsBody}
            </div>
          )}
        </div>
      </div>

      <BottomSheet open={sheet} title={ui.settings} closeLabel={ui.close} onClose={closeSheet}>
        {settingsBody}
      </BottomSheet>
    </section>
  );
}

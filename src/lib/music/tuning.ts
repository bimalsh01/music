import { freqToMidi } from "./notes";

/** Within ±5 cents counts as "in tune". */
export const IN_TUNE_CENTS = 5;
/** A string is ticked off after being held in tune this long. */
export const HOLD_MS = 800;

export interface TunerReading {
  /** Selected string index (into the strings array). */
  sel: number;
  /** Smoothed cents offset from the target, or null when nothing is heard. */
  cents: number | null;
  freq: number | null;
  /** Target MIDI note (string note, or nearest semitone for chromatic). */
  chrom: number;
  done: Record<number, boolean>;
  allDone: boolean;
  /** Hold tracking for the "in tune for 800 ms" tick. */
  holdKey: string | null;
  holdSince: number;
}

export const EMPTY_READING: TunerReading = {
  sel: 0,
  cents: null,
  freq: null,
  chrom: 69,
  done: {},
  allDone: false,
  holdKey: null,
  holdSince: 0,
};

/**
 * Fold one detected frequency into the tuner reading (port of the prototype's onFreq):
 * auto-picks the nearest string unless the user picked one, smooths cents 50/50 while the
 * target is unchanged, and ticks a string off after HOLD_MS within ±5 cents.
 */
export function applyFrequency(
  prev: TunerReading,
  freq: number,
  strings: readonly number[],
  a4: number,
  manual: boolean,
  now: number,
): TunerReading {
  const mf = freqToMidi(freq, a4);
  let sel = prev.sel;
  let target: number;
  if (strings.length) {
    if (!manual) {
      let best = Infinity;
      strings.forEach((m, i) => {
        const d = Math.abs(mf - m);
        if (d < best) {
          best = d;
          sel = i;
        }
      });
    }
    target = strings[Math.min(sel, strings.length - 1)];
  } else {
    target = Math.round(mf);
  }

  let cents = (mf - target) * 100;
  if (prev.cents !== null && sel === prev.sel && target === prev.chrom) {
    cents = prev.cents * 0.5 + cents * 0.5;
  }

  let done = prev.done;
  let holdKey = prev.holdKey;
  let holdSince = prev.holdSince;
  const key = `${sel}/${target}`;
  if (Math.abs(cents) < IN_TUNE_CENTS) {
    if (holdKey !== key) {
      holdKey = key;
      holdSince = now;
    } else if (strings.length && now - holdSince > HOLD_MS && !done[sel]) {
      done = { ...done, [sel]: true };
    }
  } else {
    holdKey = null;
  }

  const allDone = strings.length > 0 && strings.every((_, i) => done[i]);
  return { sel, cents, freq, chrom: target, done, allDone, holdKey, holdSince };
}

export type BarTone = "center" | "track" | "ok" | "fill" | "needle";
export interface MeterBar {
  h: number;
  tone: BarTone;
}

/** The 21-bar cents meter (−50…+50 in 5 ¢ steps), as drawn by the prototype. */
export function meterBars(cents: number | null): MeterBar[] {
  const hasReading = cents !== null;
  const c = hasReading ? Math.max(-50, Math.min(50, cents)) : 0;
  const inTune = hasReading && Math.abs(cents) < IN_TUNE_CENTS;
  const idx = hasReading ? Math.max(0, Math.min(20, Math.round(c / 5) + 10)) : 10;
  const bars: MeterBar[] = [];
  for (let i = 0; i <= 20; i++) {
    let tone: BarTone = i === 10 ? "center" : "track";
    if (hasReading) {
      if (inTune && i >= 9 && i <= 11) tone = "ok";
      else if (!inTune && i >= Math.min(10, idx) && i <= Math.max(10, idx)) tone = i === idx ? "needle" : "fill";
    }
    bars.push({ h: i === 10 ? 72 : i % 2 === 0 ? 50 : 34, tone });
  }
  return bars;
}

/** Random starting detune for the demo input (±14…44 cents). */
export function randomDetune(): number {
  return (Math.random() < 0.5 ? -1 : 1) * (14 + Math.random() * 30);
}

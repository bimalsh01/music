export const MIN_BPM = 30;
export const MAX_BPM = 300;

export const TIME_SIGNATURES = ["2/4", "3/4", "4/4", "5/4", "6/8", "7/8"] as const;
export type TimeSignature = (typeof TIME_SIGNATURES)[number];

/** Subdivisions per beat: 1/4, 1/8, triplet, 1/16. */
export const SUBDIVISIONS = [1, 2, 3, 4] as const;
export type Subdivision = (typeof SUBDIVISIONS)[number];

export function clampBpm(v: number): number {
  return Math.max(MIN_BPM, Math.min(MAX_BPM, Math.round(v)));
}

export function tempoName(b: number): string {
  if (b < 60) return "Largo";
  if (b < 76) return "Adagio";
  if (b < 108) return "Andante";
  if (b < 120) return "Moderato";
  if (b < 168) return "Allegro";
  if (b < 200) return "Presto";
  return "Prestissimo";
}

/** First beat accented; 6/8 also accents beat 4. */
export function defaultAccents(sig: TimeSignature): boolean[] {
  const n = parseInt(sig, 10);
  const a = Array.from({ length: n }, (_, i) => i === 0);
  if (sig === "6/8") a[3] = true;
  return a;
}

export const TAP_RESET_MS = 2000;
export const TAP_WINDOW = 5;

/**
 * Add a tap and return the kept taps plus the BPM they imply (null until two taps).
 * Taps older than 2 s are dropped; the last 5 are averaged.
 */
export function addTap(taps: readonly number[], now: number): { taps: number[]; bpm: number | null } {
  let kept = taps.filter((t) => now - t < TAP_RESET_MS);
  if (kept.length && now - kept[kept.length - 1] > TAP_RESET_MS) kept = [];
  kept = [...kept, now].slice(-TAP_WINDOW);
  if (kept.length < 2) return { taps: kept, bpm: null };
  let sum = 0;
  for (let i = 1; i < kept.length; i++) sum += kept[i] - kept[i - 1];
  return { taps: kept, bpm: clampBpm(60000 / (sum / (kept.length - 1))) };
}

/** Height of the pendulum weight in the SVG: slides down as the tempo rises. */
export function weightY(bpm: number): number {
  return Math.round(64 + ((bpm - MIN_BPM) / (MAX_BPM - MIN_BPM)) * 160);
}

/** Click pitch and loudness per position, as in the prototype. */
export function clickVoice(accent: boolean, subIndex: number, volume: number): { freq: number; peak: number } {
  const freq = subIndex > 0 ? 900 : accent ? 1760 : 1180;
  const peak = Math.max(0.0002, volume * (subIndex > 0 ? 0.3 : accent ? 0.9 : 0.6));
  return { freq, peak };
}

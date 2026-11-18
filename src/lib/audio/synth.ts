import { midiToFreq } from "@/lib/music/notes";
import { getAudioContext } from "./context";

type Partial = [OscillatorType, number, number];

/** Reference tone for a string: triangle + two sine overtones, 2.4 s decay. */
export function playTone(midi: number, a4 = 440): void {
  try {
    const ctx = getAudioContext();
    const f = midiToFreq(midi, a4);
    const t = ctx.currentTime;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.35, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
    g.connect(ctx.destination);
    const parts: Partial[] = [["triangle", 1, 1], ["sine", 2, 0.35], ["sine", 3, 0.12]];
    for (const [type, mult, level] of parts) {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = type;
      o.frequency.value = f * mult;
      og.gain.value = level;
      o.connect(og);
      og.connect(g);
      o.start(t);
      o.stop(t + 2.5);
    }
  } catch {
    // Audio unavailable: stay silent.
  }
}

/** Strum (guitar, with `gap` between strings) or block chord (piano). */
export function playChord(midis: readonly number[], gap: number, dur: number, kind: "guitar" | "piano"): void {
  try {
    const ctx = getAudioContext();
    const t0 = ctx.currentTime + 0.02;
    const master = ctx.createGain();
    master.gain.value = 0.9 / Math.max(3, midis.length);
    master.connect(ctx.destination);
    const parts: Partial[] =
      kind === "piano"
        ? [["triangle", 1, 0.8], ["sine", 2, 0.25], ["sine", 4, 0.05]]
        : [["triangle", 1, 0.9], ["sawtooth", 1, 0.08], ["sine", 2, 0.3]];
    midis.forEach((m, i) => {
      const t = t0 + i * gap;
      const f = midiToFreq(m);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(1, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      g.connect(master);
      for (const [type, mult, level] of parts) {
        const o = ctx.createOscillator();
        const og = ctx.createGain();
        o.type = type;
        o.frequency.value = f * mult;
        og.gain.value = level;
        o.connect(og);
        og.connect(g);
        o.start(t);
        o.stop(t + dur + 0.05);
      }
    });
  } catch {
    // Audio unavailable: stay silent.
  }
}

/** Short metronome click scheduled at an exact AudioContext time. */
export function scheduleClick(ctx: AudioContext, time: number, freq: number, peak: number): void {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "triangle";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, time);
  g.gain.exponentialRampToValueAtTime(peak, time + 0.002);
  g.gain.exponentialRampToValueAtTime(0.0001, time + 0.06);
  o.connect(g);
  g.connect(ctx.destination);
  o.start(time);
  o.stop(time + 0.07);
}

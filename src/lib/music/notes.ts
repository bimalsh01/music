import type { Locale } from "@/i18n/routing";

/** Note-naming systems. Letter names (en), Do-Re-Mi (pt), German H-notation. */
export type Naming = "abc" | "solfege" | "german";

/** Preferred spelling per pitch class (mixes sharps and flats, as in the prototype). */
export const ROOTS: Record<Naming, readonly string[]> = {
  abc: ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"],
  solfege: ["Dó", "Dó♯", "Ré", "Mi♭", "Mi", "Fá", "Fá♯", "Sol", "Lá♭", "Lá", "Si♭", "Si"],
  german: ["C", "Cis", "D", "Es", "E", "F", "Fis", "G", "As", "A", "B", "H"],
};

export const SHARP: Record<Naming, readonly string[]> = {
  abc: ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"],
  solfege: ["Dó", "Dó♯", "Ré", "Ré♯", "Mi", "Fá", "Fá♯", "Sol", "Sol♯", "Lá", "Lá♯", "Si"],
  german: ["C", "Cis", "D", "Dis", "E", "F", "Fis", "G", "Gis", "A", "Ais", "H"],
};

export const FLAT: Record<Naming, readonly string[]> = {
  abc: ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"],
  solfege: ["Dó", "Ré♭", "Ré", "Mi♭", "Mi", "Fá", "Sol♭", "Sol", "Lá♭", "Lá", "Si♭", "Si"],
  german: ["C", "Des", "D", "Es", "E", "F", "Ges", "G", "As", "A", "B", "H"],
};

export const NAMINGS: readonly Naming[] = ["abc", "solfege", "german"];

/** Default naming system for a page language. */
export function namingFor(locale: Locale): Naming {
  return locale === "pt" ? "solfege" : "abc";
}

/** Name of a MIDI note's pitch class, e.g. 64 → "E" / "Mi". */
export function noteName(midi: number, naming: Naming): string {
  return ROOTS[naming][((midi % 12) + 12) % 12];
}

/** Scientific octave number, e.g. 64 → 4. */
export function octaveOf(midi: number): number {
  return Math.floor(midi / 12) - 1;
}

export function midiToFreq(midi: number, a4 = 440): number {
  return a4 * Math.pow(2, (midi - 69) / 12);
}

/** Fractional MIDI number for a frequency (69 = A4). */
export function freqToMidi(freq: number, a4 = 440): number {
  return 69 + 12 * Math.log2(freq / a4);
}

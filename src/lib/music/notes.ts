import type { Locale } from "@/i18n/routing";

/**
 * Note-naming systems: letter names, three spellings of fixed Do-Re-Mi (Portuguese "Dó Ré Mi Fá",
 * Spanish/Italian "Do Re Mi Fa", French "Do Ré Mi Fa") and German H-notation.
 */
export type Naming = "abc" | "solfege" | "solfegeIt" | "solfegeFr" | "german";

const SOLFEGE_BASE: Record<"solfege" | "solfegeIt" | "solfegeFr", readonly string[]> = {
  solfege: ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"],
  solfegeIt: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
  solfegeFr: ["Do", "Ré", "Mi", "Fa", "Sol", "La", "Si"],
};

/** Spell all 12 pitch classes from 7 natural names. `pick` chooses ♯ or ♭ per black key. */
function spell(base: readonly string[], pick: (pc: number) => "sharp" | "flat"): string[] {
  const natural: Record<number, number> = { 0: 0, 2: 1, 4: 2, 5: 3, 7: 4, 9: 5, 11: 6 };
  return Array.from({ length: 12 }, (_, pc) => {
    if (pc in natural) return base[natural[pc]];
    return pick(pc) === "sharp" ? `${base[natural[pc - 1]]}♯` : `${base[natural[pc + 1]]}♭`;
  });
}

/** Black keys spelled as in the prototype's root picker: C♯ E♭ F♯ A♭ B♭. */
const ROOT_PICK = (pc: number) => (pc === 1 || pc === 6 ? "sharp" : "flat");

function tables(pick: (pc: number) => "sharp" | "flat") {
  return {
    abc: spell(["C", "D", "E", "F", "G", "A", "B"], pick),
    solfege: spell(SOLFEGE_BASE.solfege, pick),
    solfegeIt: spell(SOLFEGE_BASE.solfegeIt, pick),
    solfegeFr: spell(SOLFEGE_BASE.solfegeFr, pick),
  };
}

const GERMAN = {
  roots: ["C", "Cis", "D", "Es", "E", "F", "Fis", "G", "As", "A", "B", "H"],
  sharp: ["C", "Cis", "D", "Dis", "E", "F", "Fis", "G", "Gis", "A", "Ais", "H"],
  flat: ["C", "Des", "D", "Es", "E", "F", "Ges", "G", "As", "A", "B", "H"],
};

/** Preferred spelling per pitch class (mixes sharps and flats, as in the prototype). */
export const ROOTS: Record<Naming, readonly string[]> = { ...tables(ROOT_PICK), german: GERMAN.roots };
export const SHARP: Record<Naming, readonly string[]> = { ...tables(() => "sharp"), german: GERMAN.sharp };
export const FLAT: Record<Naming, readonly string[]> = { ...tables(() => "flat"), german: GERMAN.flat };

/** Default naming system for a page language. */
export function namingFor(locale: Locale): Naming {
  switch (locale) {
    case "pt":
      return "solfege";
    case "es":
    case "it":
      return "solfegeIt";
    case "fr":
      return "solfegeFr";
    case "de":
      return "german";
    default:
      return "abc";
  }
}

/** The three choices offered by the chord chart's note-naming toggle in this language. */
export function namingChoices(locale: Locale): Naming[] {
  const solfege = locale === "pt" ? "solfege" : locale === "fr" ? "solfegeFr" : "solfegeIt";
  return ["abc", solfege, "german"];
}

/** Short label for a naming system, e.g. "C D E", "Do Re Mi", "C D E H". */
export function namingLabel(naming: Naming): string {
  if (naming === "german") return "C D E H";
  const r = ROOTS[naming];
  return [r[0], r[2], r[4]].join(" ");
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

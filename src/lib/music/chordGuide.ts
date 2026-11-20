import { guitarVoicings, INTERVALS, OPEN_MIDI, type Voicing } from "./chords";
import { CHORD_PAGES, chordPageFor, PAGE_TYPES, ROOT_NAMES, type ChordPage, type PageType } from "./chordPages";

/*
 * Facts for the English chord pages, all derived from the chord tool's own data so the page text
 * always matches the diagram above it: correctly spelled notes (C#maj7 = C# E# G# B#, not C# F G# C),
 * finger-by-finger steps for the tool's first shapes, and progressions spelled in their key.
 */

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"] as const;
const LETTER_PC = [0, 2, 4, 5, 7, 9, 11] as const;

export interface Spelled {
  letter: number;
  acc: number;
}

function spell(letter: number, pc: number): Spelled {
  const l = ((letter % 7) + 7) % 7;
  const acc = ((((pc - LETTER_PC[l]) % 12) + 18) % 12) - 6;
  return { letter: l, acc };
}

const rootSpelled = (root: number): Spelled => spell(LETTERS.indexOf(ROOT_NAMES[root][0] as (typeof LETTERS)[number]), root);

/** A note name with ♯ / ♭ (E♭, F♯, C♭). */
export function noteText({ letter, acc }: Spelled): string {
  const a = acc > 0 ? (acc === 2 ? "𝄪" : "♯") : acc < 0 ? (acc === -2 ? "𝄫" : "♭") : "";
  return LETTERS[letter] + a;
}

/** A note name in chord-symbol ASCII (Eb, F#). */
function asciiNote({ letter, acc }: Spelled): string {
  return LETTERS[letter] + (acc > 0 ? "#".repeat(acc) : "b".repeat(-acc));
}

const pcOf = (s: Spelled) => (((LETTER_PC[s.letter] + s.acc) % 12) + 12) % 12;
/** E♯, B♯, C♭, F♭ and double accidentals: spelled right, but worth naming the key you actually press. */
const isUnusual = (s: Spelled) => Math.abs(s.acc) === 2 || (s.acc === 1 && (s.letter === 2 || s.letter === 6)) || (s.acc === -1 && (s.letter === 0 || s.letter === 3));
/** The everyday name of the same pitch (C♭ → B). */
export function plainName(s: Spelled): string {
  return ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"][pcOf(s)];
}

/** Letter steps above the root for each interval (a third is two letters up, a fifth four…). */
const LETTER_STEP: Record<number, number> = { 0: 0, 3: 2, 4: 2, 5: 3, 7: 4, 10: 6, 11: 6 };
const INTERVAL: Record<number, { degree: string; name: string }> = {
  0: { degree: "1", name: "root" },
  3: { degree: "♭3", name: "minor third" },
  4: { degree: "3", name: "major third" },
  5: { degree: "4", name: "perfect fourth" },
  7: { degree: "5", name: "perfect fifth" },
  10: { degree: "♭7", name: "minor seventh" },
  11: { degree: "7", name: "major seventh" },
};

export interface ChordTone {
  note: string;
  /** Same pitch under its everyday name, when the correct spelling is unusual (E♯ → F). */
  sameAs: string | null;
  degree: string;
  interval: string;
  semitones: number;
}

export function chordTones(root: number, type: PageType): ChordTone[] {
  const r = rootSpelled(root);
  return INTERVALS[type].map((iv) => {
    const s = spell(r.letter + LETTER_STEP[iv], (root + iv) % 12);
    return { note: noteText(s), sameAs: isUnusual(s) ? plainName(s) : null, degree: INTERVAL[iv].degree, interval: INTERVAL[iv].name, semitones: iv };
  });
}

// ---------------------------------------------------------------------------------------------
// Guitar shapes and finger steps

export const STRING_NAMES = ["low E", "A", "D", "G", "B", "high E"] as const;
const FINGER = ["", "index", "middle", "ring", "little"] as const;

export function ordinal(n: number): string {
  const s = n % 100 >= 11 && n % 100 <= 13 ? "th" : (["th", "st", "nd", "rd"][n % 10] ?? "th");
  return `${n}${s}`;
}

export interface Shape {
  /** "x-2-4-4-3-2", low E first. */
  tab: string;
  kind: "open" | "barre" | "movable";
  /** Lowest fretted position (for "barre at the 2nd fret"). */
  fret: number;
  /** Finger (1–4) per string, null for open / unplayed strings. */
  fingers: (number | null)[];
  steps: string[];
}

/** Which finger goes where: a barre takes the index finger, the rest follow fret by fret. */
export function assignFingers(v: Voicing): (number | null)[] {
  const out: (number | null)[] = v.frets.map(() => null);
  const notes = v.frets.flatMap((f, i) => (f !== null && f > 0 ? [{ i, f }] : []));
  let rest = notes;
  let next = 1;
  if (v.barre) {
    const b = v.barre;
    for (const n of notes) if (n.f === b.fret && n.i >= b.from && n.i <= b.to) out[n.i] = 1;
    rest = notes.filter((n) => out[n.i] === null);
    next = 2;
  } else if (notes.length && Math.max(...notes.map((n) => n.f)) <= 4) {
    // Open position: one finger per fret, when no two notes share a fret.
    const frets = notes.map((n) => n.f);
    const min = Math.min(...frets);
    const onMin = notes.filter((n) => n.f === min);
    // Two notes at the lowest fret on the B and high E strings (Dm7): the index finger covers both.
    if (onMin.length === 2 && onMin[0].i === 4 && onMin[1].i === 5) {
      for (const n of onMin) out[n.i] = 1;
      let f = 2;
      for (const n of notes.filter((x) => x.f !== min).sort((a, b) => a.f - b.f || a.i - b.i)) out[n.i] = f++;
      return out;
    }
    if (new Set(frets).size === frets.length) {
      for (const n of notes) out[n.i] = n.f;
      return out;
    }
  }
  rest = [...rest].sort((a, b) => a.f - b.f || a.i - b.i);
  for (const n of rest) out[n.i] = Math.min(4, next++);
  return out;
}

const list = (xs: string[]) => (xs.length <= 1 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);
const strings = (idx: number[]) => list(idx.map((i) => STRING_NAMES[i])) + (idx.length > 1 ? " strings" : " string");

function shapeOf(v: Voicing, root: number, type: PageType): Shape {
  const fingers = assignFingers(v);
  const fretted = v.frets.filter((f): f is number => f !== null && f > 0);
  const lowest = fretted.length ? Math.min(...fretted) : 0;
  const hasOpen = v.frets.some((f) => f === 0);
  const kind: Shape["kind"] = v.barre ? "barre" : hasOpen && Math.max(...fretted, 0) <= 4 ? "open" : "movable";
  const tones = chordTones(root, type);
  const toneAt = (i: number) => {
    const pc = (OPEN_MIDI[i] + v.frets[i]!) % 12;
    return tones.find((t) => (root + t.semitones) % 12 === pc)!;
  };

  const steps: string[] = [];
  if (v.barre) {
    const b = v.barre;
    steps.push(
      `Lay your index finger flat across the strings from the ${STRING_NAMES[b.from]} to the ${STRING_NAMES[b.to]} at the ${ordinal(b.fret)} fret. That is the barre: press just behind the fret wire.`,
    );
  }
  const placed = v.frets
    .map((f, i) => ({ f, i, finger: fingers[i] }))
    .filter((n) => n.f !== null && n.f > 0 && !(v.barre && n.finger === 1))
    .sort((a, b) => (a.finger ?? 0) - (b.finger ?? 0) || a.i - b.i);
  for (const n of placed) {
    const t = toneAt(n.i);
    steps.push(`Put your ${FINGER[n.finger!]} finger on the ${STRING_NAMES[n.i]} string at the ${ordinal(n.f!)} fret – that note is ${t.note}, the ${t.interval}.`);
  }
  const open = v.frets.flatMap((f, i) => (f === 0 ? [i] : []));
  if (open.length) steps.push(`Let the ${strings(open)} ring open.`);
  const muted = v.frets.flatMap((f, i) => (f === null ? [i] : []));
  const firstPlayed = v.frets.findIndex((f) => f !== null);
  const inner = muted.filter((i) => i > firstPlayed);
  const outer = muted.filter((i) => i < firstPlayed);
  if (outer.length) steps.push(`Leave out the ${strings(outer)}: start your strum on the ${STRING_NAMES[firstPlayed]} string.`);
  if (inner.length)
    steps.push(
      v.barre && inner.some((i) => i > v.barre!.from && i < v.barre!.to)
        ? `Keep the ${strings(inner)} silent: ease the barre off it slightly, or let the tip of the next finger touch it, so only the fretted notes sound.`
        : `Mute the ${strings(inner)} by letting a fretting finger touch it lightly, so it stays silent when you strum through.`,
    );
  if (!outer.length) steps.push(`Strum from the ${STRING_NAMES[firstPlayed]} string down and check that every note rings clearly.`);

  return { tab: v.frets.map((f) => (f === null ? "x" : String(f))).join("-"), kind, fret: lowest, fingers, steps };
}

/** The tool's first two guitar shapes for this chord, with steps. */
export function chordShapes(root: number, type: PageType, count = 2): Shape[] {
  return guitarVoicings(root, type)
    .slice(0, count)
    .map((v) => shapeOf(v, root, type));
}

export function shapeLabel(s: Shape): string {
  if (s.kind === "open") return "open position";
  if (s.kind === "barre") return `barre at the ${ordinal(s.fret)} fret`;
  return `${ordinal(s.fret)} fret`;
}

// ---------------------------------------------------------------------------------------------
// Progressions

export interface ProgChord {
  /** As written in this key: "Db", "Cb (B)". */
  name: string;
  page: ChordPage | undefined;
}
export interface Progression {
  numerals: string;
  key: string;
  chords: ProgChord[];
}

type Step = [letters: number, semitones: number, type: PageType | "sus2"];
const SUFFIX: Record<PageType | "sus2", string> = { maj: "", min: "m", "7": "7", maj7: "maj7", m7: "m7", sus4: "sus4", sus2: "sus2" };

function progression(numerals: string, tonic: Spelled, mode: "major" | "minor", steps: Step[]): Progression {
  const tonicPc = pcOf(tonic);
  const chords = steps.map(([l, st, type]) => {
    const s = spell(tonic.letter + l, (tonicPc + st) % 12);
    const name = asciiNote(s) + SUFFIX[type];
    const alias = isUnusual(s) ? ` (${plainName(s).replace("♯", "#").replace("♭", "b")}${SUFFIX[type]})` : "";
    return { name: name + alias, page: type === "sus2" ? undefined : chordPageFor(pcOf(s), type) };
  });
  return { numerals, key: `${asciiNote(tonic)} ${mode}`, chords };
}

/** Three common progressions that use this chord, spelled in their key. */
export function progressionsFor(root: number, type: PageType): Progression[] {
  const r = rootSpelled(root);
  const up = (l: number, st: number) => spell(r.letter + l, (root + st) % 12);
  switch (type) {
    case "maj":
      return [
        progression("I – IV – V", r, "major", [[0, 0, "maj"], [3, 5, "maj"], [4, 7, "maj"]]),
        progression("I – V – vi – IV", r, "major", [[0, 0, "maj"], [4, 7, "maj"], [5, 9, "min"], [3, 5, "maj"]]),
        progression("I – vi – ii – V", r, "major", [[0, 0, "maj"], [5, 9, "min"], [1, 2, "min"], [4, 7, "maj"]]),
      ];
    case "min":
      return [
        progression("i – iv – v", r, "minor", [[0, 0, "min"], [3, 5, "min"], [4, 7, "min"]]),
        progression("i – VI – III – VII", r, "minor", [[0, 0, "min"], [5, 8, "maj"], [2, 3, "maj"], [6, 10, "maj"]]),
        progression("i – iv – VII – III", r, "minor", [[0, 0, "min"], [3, 5, "min"], [6, 10, "maj"], [2, 3, "maj"]]),
      ];
    case "7":
      return [
        progression("V7 – I", up(3, 5), "major", [[4, 7, "7"], [0, 0, "maj"]]),
        progression("ii – V7 – I", up(3, 5), "major", [[1, 2, "m7"], [4, 7, "7"], [0, 0, "maj"]]),
        progression("I7 – IV7 – V7 (12-bar blues)", r, "major", [[0, 0, "7"], [3, 5, "7"], [4, 7, "7"]]),
      ];
    case "maj7":
      return [
        progression("Imaj7 – IVmaj7", r, "major", [[0, 0, "maj7"], [3, 5, "maj7"]]),
        progression("ii7 – V7 – Imaj7", r, "major", [[1, 2, "m7"], [4, 7, "7"], [0, 0, "maj7"]]),
        progression("Imaj7 – vi7 – ii7 – V7", r, "major", [[0, 0, "maj7"], [5, 9, "m7"], [1, 2, "m7"], [4, 7, "7"]]),
      ];
    case "m7":
      return [
        progression("ii7 – V7 – Imaj7", up(6, 10), "major", [[1, 2, "m7"], [4, 7, "7"], [0, 0, "maj7"]]),
        progression("i7 – iv7", r, "minor", [[0, 0, "m7"], [3, 5, "m7"]]),
        progression("i7 – IV7 (Dorian vamp)", r, "minor", [[0, 0, "m7"], [3, 5, "7"]]),
      ];
    case "sus4":
      return [
        progression("Isus4 – I", r, "major", [[0, 0, "sus4"], [0, 0, "maj"]]),
        progression("I – IV – Isus4 – I", r, "major", [[0, 0, "maj"], [3, 5, "maj"], [0, 0, "sus4"], [0, 0, "maj"]]),
        progression("Vsus4 – V – I", up(3, 5), "major", [[4, 7, "sus4"], [4, 7, "maj"], [0, 0, "maj"]]),
      ];
  }
}

// ---------------------------------------------------------------------------------------------
// Related pages

/** Pages worth linking from this chord: its relative, the rest of its root, its neighbours. */
export function relatedPages(page: ChordPage): ChordPage[] {
  const { root, type } = page;
  const at = (st: number, t: PageType) => chordPageFor((root + st) % 12, t);
  const relative: Record<PageType, (ChordPage | undefined)[]> = {
    maj: [at(9, "min"), at(7, "maj"), at(5, "maj"), at(0, "min")],
    min: [at(3, "maj"), at(0, "maj"), at(5, "min"), at(7, "min")],
    "7": [at(5, "maj"), at(0, "maj"), at(5, "7"), at(7, "7")],
    maj7: [at(9, "m7"), at(0, "maj"), at(5, "maj7"), at(7, "7")],
    m7: [at(3, "maj7"), at(0, "min"), at(5, "7"), at(10, "maj7")],
    sus4: [at(0, "maj"), at(5, "maj"), at(7, "maj")],
  };
  const sameRoot = PAGE_TYPES.map((t) => at(0, t));
  const neighbours = [at(11, type), at(1, type)];
  const seen = new Set<string>([page.slug]);
  return [...relative[type], ...sameRoot, ...neighbours].filter((p): p is ChordPage => {
    if (!p || seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

/** All pages on one root, in chord-type order. */
export function pagesOnRoot(root: number): ChordPage[] {
  return CHORD_PAGES.filter((p) => p.root === root);
}

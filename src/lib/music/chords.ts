import { FLAT, ROOTS, SHARP, type Naming } from "./notes";

export const CHORD_TYPES = ["maj", "min", "7", "maj7", "m7", "sus2", "sus4", "dim", "aug"] as const;
export type ChordType = (typeof CHORD_TYPES)[number];

export const INTERVALS: Record<ChordType, readonly number[]> = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  "7": [0, 4, 7, 10],
  maj7: [0, 4, 7, 11],
  m7: [0, 3, 7, 10],
  sus2: [0, 2, 7],
  sus4: [0, 5, 7],
  dim: [0, 3, 6],
  aug: [0, 4, 8],
};

type Frets = readonly (number | null)[];

/** Movable E-shape and A-shape barre chords (fret offsets from the barre). */
const SH_E: Record<ChordType, Frets> = {
  maj: [0, 2, 2, 1, 0, 0], min: [0, 2, 2, 0, 0, 0], "7": [0, 2, 0, 1, 0, 0], maj7: [0, null, 1, 1, 0, null],
  m7: [0, 2, 0, 0, 0, 0], sus2: [0, 2, 4, 4, 0, 0], sus4: [0, 2, 2, 2, 0, 0], dim: [0, 1, 2, 0, null, null], aug: [0, 3, 2, 1, 1, 0],
};
const SH_A: Record<ChordType, Frets> = {
  maj: [null, 0, 2, 2, 2, 0], min: [null, 0, 2, 2, 1, 0], "7": [null, 0, 2, 0, 2, 0], maj7: [null, 0, 2, 1, 2, 0],
  m7: [null, 0, 2, 0, 1, 0], sus2: [null, 0, 2, 2, 0, 0], sus4: [null, 0, 2, 2, 3, 0], dim: [null, 0, 1, 2, 1, null], aug: [null, 0, 3, 2, 2, 1],
};
/** Open-position shapes keyed by "<root pc>-<type>". */
const OPEN: Record<string, Frets> = {
  "0-maj": [null, 3, 2, 0, 1, 0], "0-7": [null, 3, 2, 3, 1, 0], "0-maj7": [null, 3, 2, 0, 0, 0],
  "2-maj": [null, null, 0, 2, 3, 2], "2-min": [null, null, 0, 2, 3, 1], "2-7": [null, null, 0, 2, 1, 2], "2-maj7": [null, null, 0, 2, 2, 2],
  "2-m7": [null, null, 0, 2, 1, 1], "2-sus2": [null, null, 0, 2, 3, 0], "2-sus4": [null, null, 0, 2, 3, 3],
  "7-maj": [3, 2, 0, 0, 0, 3], "7-7": [3, 2, 0, 0, 0, 1], "7-maj7": [3, 2, 0, 0, 0, 2],
};

/** Standard guitar tuning, low E to high E. */
export const OPEN_MIDI = [40, 45, 50, 55, 59, 64] as const;

export interface Barre {
  fret: number;
  from: number;
  to: number;
}
export interface Voicing {
  frets: (number | null)[];
  barre: Barre | null;
}

/** Open shape (if any) plus E- and A-shape barres, de-duplicated and sorted low → high on the neck. */
export function guitarVoicings(root: number, type: ChordType): Voicing[] {
  const list: Voicing[] = [];
  const seen = new Set<string>();
  const add = (v: Voicing) => {
    const k = v.frets.join(",");
    if (!seen.has(k)) {
      seen.add(k);
      list.push(v);
    }
  };
  const open = OPEN[`${root}-${type}`];
  if (open) add({ frets: [...open], barre: null });
  const shapes: [Frets, number][] = [
    [SH_E[type], (root - 4 + 12) % 12],
    [SH_A[type], (root - 9 + 12) % 12],
  ];
  for (const [sh, r] of shapes) {
    let barre: Barre | null = null;
    const frets = sh.map((x) => (x === null ? null : x + r));
    if (r > 0) {
      const idx: number[] = [];
      sh.forEach((x, i) => {
        if (x === 0) idx.push(i);
      });
      if (idx.length >= 2) barre = { fret: r, from: idx[0], to: idx[idx.length - 1] };
    }
    add({ frets, barre });
  }
  const lo = (v: Voicing) => {
    const f = v.frets.filter((x): x is number => x !== null);
    return Math.min(...f) * 10 + Math.max(...f);
  };
  return list.sort((a, b) => lo(a) - lo(b));
}

/** Spelling helper: flats for flat keys (and some minor-ish chords), sharps otherwise. */
export function chordSpeller(root: number, type: ChordType, naming: Naming) {
  const useFlat =
    [3, 5, 8, 10].includes(root) || (["min", "m7", "dim"].includes(type) && [0, 2, 7].includes(root));
  const arr = useFlat ? FLAT[naming] : SHARP[naming];
  const rootName = ROOTS[naming][root];
  const name = (pc: number) => (pc === root ? rootName : arr[pc]);
  const pcs = INTERVALS[type].map((iv) => (root + iv) % 12);
  return { rootName, name, pcs };
}

/** Piano voicing: chord tones from middle C, with `inversion` lowest notes raised an octave. */
export function pianoNotes(root: number, type: ChordType, inversion: number): number[] {
  const notes = INTERVALS[type].map((iv) => 60 + root + iv);
  for (let j = 0; j < inversion; j++) notes[j] += 12;
  return notes.sort((a, b) => a - b);
}

export interface PianoKey {
  /** Left edge as a percentage of the 2-octave keyboard. */
  x: number;
  midi: number;
  pc: number;
}

/** Two octaves of white and black keys starting at the octave of the chord's lowest note. */
export function pianoKeys(lowest: number): { whites: PianoKey[]; blacks: PianoKey[] } {
  const start = Math.floor(lowest / 12) * 12;
  const WP = [0, 2, 4, 5, 7, 9, 11];
  const BP: [number, number][] = [[1, 0], [3, 1], [6, 3], [8, 4], [10, 5]];
  const whites: PianoKey[] = [];
  const blacks: PianoKey[] = [];
  for (let o = 0; o < 2; o++) {
    WP.forEach((pc, w) => {
      whites.push({ x: +(((o * 7 + w) * 100) / 14).toFixed(3), midi: start + o * 12 + pc, pc });
    });
    for (const [pc, after] of BP) {
      blacks.push({ x: +(((o * 7 + after + 1) * 100) / 14 - 2.3).toFixed(3), midi: start + o * 12 + pc, pc });
    }
  }
  return { whites, blacks };
}

/** Instruments and tuning presets, as MIDI notes from the lowest-numbered peg column outwards. */
export type InstrumentId =
  | "guitar"
  | "ukulele"
  | "violin"
  | "cello"
  | "bass"
  | "chromatic"
  | "cavaquinho";

export type PresetId = "standard" | "dropd" | "openg" | "dadgad" | "half";

export const INSTRUMENT_IDS: readonly InstrumentId[] = [
  "guitar",
  "ukulele",
  "violin",
  "cello",
  "bass",
  "chromatic",
  "cavaquinho",
];

export const PRESETS: Record<InstrumentId, Partial<Record<PresetId, readonly number[]>>> = {
  guitar: {
    standard: [40, 45, 50, 55, 59, 64],
    dropd: [38, 45, 50, 55, 59, 64],
    openg: [38, 43, 50, 55, 59, 62],
    dadgad: [38, 45, 50, 55, 57, 62],
    half: [39, 44, 49, 54, 58, 63],
  },
  ukulele: { standard: [67, 60, 64, 69] },
  violin: { standard: [55, 62, 69, 76] },
  cello: { standard: [36, 43, 50, 57] },
  bass: { standard: [28, 33, 38, 43] },
  chromatic: { standard: [] },
  cavaquinho: { standard: [62, 67, 71, 74] },
};

export function presetIds(id: InstrumentId): PresetId[] {
  return Object.keys(PRESETS[id]) as PresetId[];
}

export function stringsFor(id: InstrumentId, preset: PresetId): readonly number[] {
  return PRESETS[id][preset] ?? PRESETS[id].standard ?? [];
}

/** Low-pitched instruments need a bigger analysis window. */
export function isLowInstrument(id: InstrumentId): boolean {
  return id === "bass" || id === "cello";
}

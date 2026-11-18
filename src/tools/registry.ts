import type { Locale } from "@/i18n/routing";
import type { InstrumentId } from "@/lib/music/instruments";

export type ToolKind = "tuner" | "metronome" | "chords";
export type ToolId = InstrumentId | "metronome" | "chords";

export interface Tool {
  id: ToolId;
  kind: ToolKind;
  /** URL slug per language; a missing language means the page does not exist there. */
  slugs: Partial<Record<Locale, string>>;
  /** The "Next: …" link at the bottom of the page. */
  next: ToolId;
}

const tuner = (id: InstrumentId, en: string | undefined, pt: string): Tool => ({
  id,
  kind: "tuner",
  slugs: en ? { en, pt } : { pt },
  next: "metronome",
});

export const TOOLS: readonly Tool[] = [
  tuner("guitar", "guitar-tuner", "afinador-de-violao"),
  tuner("ukulele", "ukulele-tuner", "afinador-de-ukulele"),
  tuner("violin", "violin-tuner", "afinador-de-violino"),
  tuner("cello", "cello-tuner", "afinador-de-violoncelo"),
  tuner("bass", "bass-tuner", "afinador-de-baixo"),
  tuner("chromatic", "chromatic-tuner", "afinador-cromatico"),
  // Cavaquinho is Brazilian Portuguese only.
  tuner("cavaquinho", undefined, "afinador-de-cavaquinho"),
  { id: "metronome", kind: "metronome", slugs: { en: "metronome", pt: "metronomo" }, next: "chords" },
  { id: "chords", kind: "chords", slugs: { en: "chord-lookup", pt: "acordes" }, next: "guitar" },
];

export function getTool(id: ToolId): Tool {
  const t = TOOLS.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown tool ${id}`);
  return t;
}

export function toolBySlug(locale: Locale, slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slugs[locale] === slug);
}

export function toolsFor(locale: Locale): Tool[] {
  return TOOLS.filter((t) => t.slugs[locale]);
}

/** Path of a tool page, or null if it doesn't exist in that language. */
export function toolPath(locale: Locale, id: ToolId): string | null {
  const slug = getTool(id).slugs[locale];
  return slug ? `/${locale}/${slug}/` : null;
}

export function homePath(locale: Locale): string {
  return `/${locale}/`;
}

/** Where the language switch should go: the same tool in the other language, else its home. */
export function switchPath(target: Locale, id: ToolId | null): string {
  return (id && toolPath(target, id)) ?? homePath(target);
}

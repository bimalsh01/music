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

type Slugs = Partial<Record<Locale, string>>;

const tuner = (id: InstrumentId, slugs: Slugs): Tool => ({ id, kind: "tuner", slugs, next: "metronome" });

/**
 * Translated URL slugs. Latin-script languages use their own words (Russian is transliterated);
 * Japanese, Korean, Chinese and Hindi keep English words, since slugs in those scripts get
 * percent-encoded in links and search results.
 */
export const TOOLS: readonly Tool[] = [
  tuner("guitar", {
    en: "guitar-tuner", pt: "afinador-de-violao", es: "afinador-de-guitarra", fr: "accordeur-guitare", de: "gitarre-stimmen",
    it: "accordatore-chitarra", ja: "guitar-tuner", ko: "guitar-tuner", zh: "guitar-tuner", ru: "tyuner-dlya-gitary",
    pl: "stroik-gitarowy", nl: "gitaar-stemmen", tr: "gitar-akort", id: "stem-gitar", hi: "guitar-tuner",
  }),
  tuner("ukulele", {
    en: "ukulele-tuner", pt: "afinador-de-ukulele", es: "afinador-de-ukelele", fr: "accordeur-ukulele", de: "ukulele-stimmen",
    it: "accordatore-ukulele", ja: "ukulele-tuner", ko: "ukulele-tuner", zh: "ukulele-tuner", ru: "tyuner-dlya-ukulele",
    pl: "stroik-do-ukulele", nl: "ukelele-stemmen", tr: "ukulele-akort", id: "stem-ukulele", hi: "ukulele-tuner",
  }),
  tuner("violin", {
    en: "violin-tuner", pt: "afinador-de-violino", es: "afinador-de-violin", fr: "accordeur-violon", de: "geige-stimmen",
    it: "accordatore-violino", ja: "violin-tuner", ko: "violin-tuner", zh: "violin-tuner", ru: "tyuner-dlya-skripki",
    pl: "stroik-do-skrzypiec", nl: "viool-stemmen", tr: "keman-akort", id: "stem-biola", hi: "violin-tuner",
  }),
  tuner("cello", {
    en: "cello-tuner", pt: "afinador-de-violoncelo", es: "afinador-de-violonchelo", fr: "accordeur-violoncelle", de: "cello-stimmen",
    it: "accordatore-violoncello", ja: "cello-tuner", ko: "cello-tuner", zh: "cello-tuner", ru: "tyuner-dlya-violoncheli",
    pl: "stroik-do-wiolonczeli", nl: "cello-stemmen", tr: "viyolonsel-akort", id: "stem-cello", hi: "cello-tuner",
  }),
  tuner("bass", {
    en: "bass-tuner", pt: "afinador-de-baixo", es: "afinador-de-bajo", fr: "accordeur-basse", de: "bass-stimmen",
    it: "accordatore-basso", ja: "bass-tuner", ko: "bass-tuner", zh: "bass-tuner", ru: "tyuner-dlya-bas-gitary",
    pl: "stroik-do-basu", nl: "basgitaar-stemmen", tr: "bas-gitar-akort", id: "stem-bass", hi: "bass-tuner",
  }),
  tuner("chromatic", {
    en: "chromatic-tuner", pt: "afinador-cromatico", es: "afinador-cromatico", fr: "accordeur-chromatique", de: "chromatisches-stimmgeraet",
    it: "accordatore-cromatico", ja: "chromatic-tuner", ko: "chromatic-tuner", zh: "chromatic-tuner", ru: "khromaticheskiy-tyuner",
    pl: "stroik-chromatyczny", nl: "chromatische-stemmer", tr: "kromatik-akort", id: "tuner-kromatik", hi: "chromatic-tuner",
  }),
  // Cavaquinho is Brazilian Portuguese only.
  tuner("cavaquinho", { pt: "afinador-de-cavaquinho" }),
  {
    id: "metronome",
    kind: "metronome",
    slugs: {
      en: "metronome", pt: "metronomo", es: "metronomo", fr: "metronome", de: "metronom", it: "metronomo", ja: "metronome",
      ko: "metronome", zh: "metronome", ru: "metronom", pl: "metronom", nl: "metronoom", tr: "metronom", id: "metronom", hi: "metronome",
    },
    next: "chords",
  },
  {
    id: "chords",
    kind: "chords",
    slugs: {
      en: "chord-lookup", pt: "acordes", es: "acordes", fr: "accords", de: "akkorde", it: "accordi", ja: "chords", ko: "chords",
      zh: "chords", ru: "akkordy", pl: "akordy", nl: "akkoorden", tr: "akorlar", id: "kunci-akor", hi: "chords",
    },
    next: "guitar",
  },
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

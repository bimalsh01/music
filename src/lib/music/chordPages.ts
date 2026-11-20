import type { ChordType } from "./chords";

/**
 * The English chord pages (/en/chords/<slug>/), one per chord that has search demand. The major chord
 * of each root doubles as that root's page (/en/chords/c/ = "C chord" and "all C chords"), so the two
 * never compete for the same search. Client-safe: the chord tool imports this to update the URL.
 */
export const CHORD_PAGE_LOCALE = "en" as const;

/** Root names as the chord tool shows them (C♯ E♭ F♯ A♭ B♭), in plain ASCII for titles and URLs. */
export const ROOT_NAMES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"] as const;
const ROOT_SLUGS = ["c", "c-sharp", "d", "e-flat", "e", "f", "f-sharp", "g", "a-flat", "a", "b-flat", "b"] as const;

/** Chord types that get pages, and how each is written after the root. */
export const PAGE_TYPES = ["maj", "min", "7", "maj7", "m7", "sus4"] as const satisfies readonly ChordType[];
export type PageType = (typeof PAGE_TYPES)[number];
const SUFFIX: Record<PageType, string> = { maj: "", min: "m", "7": "7", maj7: "maj7", m7: "m7", sus4: "sus4" };

export interface ChordPage {
  root: number;
  type: PageType;
  slug: string;
  /** "Bm", "C#maj7". */
  name: string;
  /** H1, written on the page's primary keyword: "Bm Chord", "C Chord on Guitar". */
  h1: string;
}

/**
 * Primary keyword per chord (Rankability, US), as the H1. Chords missing here get no page.
 * Index = root pitch class.
 */
const H1: Record<PageType, (string | null)[]> = {
  //     C                     C#                    D                  Eb                     E                  F                     F#                     G                   Ab           A                     Bb                 B
  maj: ["C Chord on Guitar", "C# Chord", "D Chord", "Eb Guitar Chord", "E Chord", "F Chord", "F# Chord on Guitar", "G Chord", "Ab Chord", "A Chord", "Bb Guitar Chord", "B Chord"],
  min: ["Cm Chord", "C#m Chord", "Dm Chord", "Ebm Chord on Guitar", "Em Chord", "Fm Chord on Guitar", "F#m Chord on Guitar", "Gm Chord", null, "Am Chord on Guitar", "Bbm Chord", "Bm Chord"],
  "7": ["C7 Chord", "C#7 Chord", "D7 Guitar Chord", null, "E7 Guitar Chord", "F7 Chord", "F#7 Chord", "G7 Guitar Chord", null, "A7 Chord", "Bb7 Chord", "B7 Guitar Chord"],
  maj7: ["Cmaj7 Guitar Chord", "C#maj7 Chord", "Dmaj7 Chord", "Eb Maj7 Guitar Chord", null, "Fmaj7 Guitar Chord", "F#maj7 Chord", "Gmaj7 Guitar Chord", null, "Amaj7 Chord", null, null],
  m7: ["Cm7 Chord", "C#m7 Guitar Chord", "Dm7 Guitar Chord", "Ebm7 Chord on Guitar", "Em7 Guitar Chord", "Fm7 Chord", "F#m7 Chord", "Gm7 Guitar Chord", null, "Am7 Guitar Chord", null, "Bm7 Guitar Chord"],
  sus4: ["Csus4 Guitar Chord", null, "Dsus4 Chord", null, null, null, null, "Gsus4 Chord", null, "Asus4 Chord", null, null],
};

export function chordName(root: number, type: PageType): string {
  return ROOT_NAMES[root] + SUFFIX[type];
}

function slugFor(root: number, type: PageType): string {
  const r = ROOT_SLUGS[root];
  const s = SUFFIX[type];
  if (!s) return r;
  return r.includes("-") ? `${r}-${s}` : `${r}${s}`;
}

/** Every chord page, in chromatic root order then chord-type order. */
export const CHORD_PAGES: readonly ChordPage[] = Array.from({ length: 12 }, (_, root) =>
  PAGE_TYPES.flatMap((type) => {
    const h1 = H1[type][root];
    return h1 ? [{ root, type, slug: slugFor(root, type), name: chordName(root, type), h1 }] : [];
  }),
).flat();

const isPageType = (t: string): t is PageType => (PAGE_TYPES as readonly string[]).includes(t);

export function chordPageFor(root: number, type: ChordType | string): ChordPage | undefined {
  if (!isPageType(type)) return undefined;
  return CHORD_PAGES.find((p) => p.root === root && p.type === type);
}

export function chordPageBySlug(slug: string): ChordPage | undefined {
  return CHORD_PAGES.find((p) => p.slug === slug);
}

export function chordPagePath(p: ChordPage): string {
  return `/${CHORD_PAGE_LOCALE}/chords/${p.slug}/`;
}

/** The root page of a chord: its major chord, which lists every chord on that root. */
export function rootPage(root: number): ChordPage {
  return chordPageFor(root, "maj")!;
}

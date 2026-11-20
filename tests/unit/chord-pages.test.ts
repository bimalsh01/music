import { afterEach, describe, expect, it, vi } from "vitest";
import { CHORD_INTROS } from "@/content/chords/en";
import { assignFingers, chordShapes, chordTones, progressionsFor, relatedPages } from "@/lib/music/chordGuide";
import { CHORD_PAGES, chordPageBySlug, chordPageFor, chordPagePath } from "@/lib/music/chordPages";
import { guitarVoicings } from "@/lib/music/chords";

afterEach(() => vi.unstubAllEnvs());

describe("chord pages", () => {
  it("has the 55 chords from the keyword list, with the 12 majors as root pages", () => {
    expect(CHORD_PAGES).toHaveLength(55);
    expect(new Set(CHORD_PAGES.map((p) => p.slug)).size).toBe(55);
    expect(CHORD_PAGES.filter((p) => p.type === "maj").map((p) => p.slug)).toEqual([
      "c", "c-sharp", "d", "e-flat", "e", "f", "f-sharp", "g", "a-flat", "a", "b-flat", "b",
    ]);
    expect(chordPagePath(chordPageBySlug("bm")!)).toBe("/en/chords/bm/");
    expect(chordPageFor(1, "m7")?.slug).toBe("c-sharp-m7");
    expect(chordPageFor(3, "maj7")?.h1).toBe("Eb Maj7 Guitar Chord");
    // No page: chords outside the list, and types without pages.
    expect(chordPageFor(8, "min")).toBeUndefined();
    expect(chordPageFor(0, "dim")).toBeUndefined();
  });

  it("every page has its own hand-written intro", () => {
    for (const p of CHORD_PAGES) expect(CHORD_INTROS[p.slug], p.slug).toBeTruthy();
    expect(Object.keys(CHORD_INTROS)).toHaveLength(55);
    expect(new Set(Object.values(CHORD_INTROS)).size).toBe(55);
  });

  it("spells notes with one letter per chord tone", () => {
    expect(chordTones(1, "maj7").map((t) => t.note)).toEqual(["C♯", "E♯", "G♯", "B♯"]);
    expect(chordTones(1, "maj7")[1].sameAs).toBe("F");
    expect(chordTones(3, "m7").map((t) => t.note)).toEqual(["E♭", "G♭", "B♭", "D♭"]);
    expect(chordTones(11, "min").map((t) => t.note)).toEqual(["B", "D", "F♯"]);
    expect(chordTones(0, "sus4").map((t) => t.interval)).toEqual(["root", "perfect fourth", "perfect fifth"]);
  });

  it("finger steps match the chart's first shape", () => {
    const [bm] = chordShapes(11, "min");
    expect(bm.tab).toBe("x-2-4-4-3-2");
    expect(bm.kind).toBe("barre");
    expect(bm.fingers).toEqual([null, 1, 3, 4, 2, 1]);
    expect(bm.steps[0]).toMatch(/index finger flat across .* 2nd fret/);
    expect(bm.steps.at(-1)).toMatch(/start your strum on the A string/);
    // Open C: one finger per fret.
    expect(assignFingers(guitarVoicings(0, "maj")[0])).toEqual([null, 3, 2, null, 1, null]);
    // Open G: middle on low E, index on A, ring on high E.
    expect(assignFingers(guitarVoicings(7, "maj")[0])).toEqual([2, 1, null, null, null, 3]);
    for (const p of CHORD_PAGES) {
      const shapes = chordShapes(p.root, p.type);
      expect(shapes.length, p.slug).toBe(2);
      for (const s of shapes) expect(s.steps.length, p.slug).toBeGreaterThanOrEqual(2);
    }
  });

  it("progressions are spelled in their key", () => {
    const names = (root: number, t: Parameters<typeof progressionsFor>[1]) => progressionsFor(root, t).map((p) => p.chords.map((c) => c.name).join(" "));
    expect(names(0, "maj")).toEqual(["C F G", "C G Am F", "C Am Dm G"]);
    expect(names(11, "7")[0]).toBe("B7 E");
    expect(names(0, "m7")[0]).toBe("Cm7 F7 Bbmaj7");
    expect(names(3, "min")[1]).toBe("Ebm Cb (B) Gb Db");
    // Progression links point at real pages.
    expect(progressionsFor(9, "min")[1].chords.map((c) => c.page?.slug)).toEqual(["am", "f", "c", "g"]);
  });

  it("related links never point at the page itself", () => {
    for (const p of CHORD_PAGES) {
      const rel = relatedPages(p);
      expect(rel.length, p.slug).toBeGreaterThan(2);
      expect(rel.map((r) => r.slug)).not.toContain(p.slug);
    }
  });
});

describe("chord page SEO", () => {
  async function prod() {
    vi.resetModules();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined as unknown as string);
    return { seo: await import("@/lib/seo"), sitemap: (await import("@/app/sitemap")).default, pages: await import("@/lib/music/chordPages") };
  }

  it("titles and descriptions are unique and lead with the keyword", async () => {
    const { seo, pages } = await prod();
    const metas = pages.CHORD_PAGES.map((p) => ({ p, m: seo.chordMetadata(p) }));
    expect(new Set(metas.map((x) => x.m.title)).size).toBe(55);
    expect(new Set(metas.map((x) => x.m.description)).size).toBe(55);
    for (const { p, m } of metas) {
      expect(String(m.title).startsWith(p.h1), p.slug).toBe(true);
      expect(String(m.description).length, p.slug).toBeLessThanOrEqual(165);
      expect(m.alternates?.canonical).toBe(`/en/chords/${p.slug}/`);
    }
  });

  it("sitemap lists every chord page; JSON-LD has WebPage, HowTo and breadcrumbs", async () => {
    const { seo, sitemap, pages } = await prod();
    const urls = sitemap().map((e) => e.url);
    for (const p of pages.CHORD_PAGES) expect(urls).toContain(`https://www.wowguitar.com/en/chords/${p.slug}/`);
    const g = JSON.parse(seo.chordJsonLd(pages.chordPageBySlug("c-sharp-m7")!))["@graph"];
    expect(g.map((n: { "@type": string }) => n["@type"])).toEqual(["WebPage", "HowTo", "BreadcrumbList"]);
    expect(g[2].itemListElement.map((i: { item: string }) => i.item)).toEqual([
      "https://www.wowguitar.com/en/",
      "https://www.wowguitar.com/en/chord-lookup/",
      "https://www.wowguitar.com/en/chords/c-sharp/",
      "https://www.wowguitar.com/en/chords/c-sharp-m7/",
    ]);
  });
});

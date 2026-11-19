import { describe, expect, it } from "vitest";
import { getPageSeo, getSeoContent, plainText } from "@/content/seo";
import { getDictionary } from "@/i18n/dictionary";
import { locales } from "@/i18n/routing";
import { namingChoices, namingFor, namingLabel, noteName, ROOTS } from "@/lib/music/notes";
import { TOOLS, toolPath, toolsFor } from "@/tools/registry";

/** Every leaf path of a nested object, with array lengths, so translations can be compared to English. */
function shape(v: unknown, path = ""): string[] {
  if (Array.isArray(v)) return [`${path}[${v.length}]`];
  if (v && typeof v === "object") return Object.entries(v).flatMap(([k, x]) => shape(x, path ? `${path}.${k}` : k));
  return [path];
}

const en = getDictionary("en");

describe("translations: UI messages", () => {
  it.each(locales)("%s has exactly the English keys (and array lengths)", (l) => {
    expect(shape(getDictionary(l)).sort()).toEqual(shape(en).sort());
  });

  it.each(locales.filter((l) => l !== "en"))("%s is actually translated", (l) => {
    const d = getDictionary(l);
    // A few strings that must differ from English in every other language.
    expect(d.tuner.start).not.toBe(en.tuner.start);
    expect(d.home.sub).not.toBe(en.home.sub);
    expect(d.site.footer.note).not.toBe(en.site.footer.note);
  });

  it.each(locales)("%s placeholders are intact", (l) => {
    expect(getDictionary(l).chords.pos).toMatch(/\{i\}.*\{n\}|\{n\}.*\{i\}/);
  });
});

describe("translations: SEO content", () => {
  for (const l of locales) {
    const pages = ["home" as const, ...toolsFor(l).map((t) => t.id)];
    it.each(pages)(`${l}/%s has complete keyword content`, (key) => {
      const seo = getPageSeo(l, key);
      expect(seo, `missing ${l}/${key}`).toBeDefined();
      expect(seo!.title.length).toBeGreaterThan(10);
      expect(seo!.title.length).toBeLessThanOrEqual(70);
      // Chinese packs a word into each character, so its descriptions are naturally shorter.
      expect(seo!.description.length).toBeGreaterThan(l === "zh" ? 35 : 60);
      expect(seo!.description.length).toBeLessThanOrEqual(175);
      expect(seo!.blocks.length).toBeGreaterThanOrEqual(2);
      expect(seo!.faq.length).toBeGreaterThanOrEqual(2);
      // Internal links point at tools that exist in this language.
      const text = JSON.stringify(seo);
      for (const [, id] of text.matchAll(/\]\(([a-z]+)\)/g)) {
        expect(toolPath(l, id as never), `${l}/${key} links to missing tool ${id}`).not.toBeNull();
      }
      // No leftover markup in the plain-text versions used for meta tags / JSON-LD.
      for (const f of seo!.faq) expect(plainText(f.a)).not.toMatch(/\*\*|\]\(/);
    });
  }

  it.each(locales)("%s titles are unique across its pages", (l) => {
    const titles = ["home" as const, ...toolsFor(l).map((t) => t.id)].map((k) => getPageSeo(l, k)!.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it.each(locales)("%s has table labels", (l) => {
    const labels = getSeoContent(l).labels;
    for (const v of Object.values(labels)) expect(v.length).toBeGreaterThan(0);
  });
});

describe("routing", () => {
  it("has 15 languages", () => {
    expect(locales).toHaveLength(15);
  });
  it.each(locales)("%s slugs are unique and URL-safe", (l) => {
    const slugs = toolsFor(l).map((t) => t.slugs[l]!);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it("cavaquinho exists only in Portuguese", () => {
    expect(locales.filter((l) => toolPath(l, "cavaquinho"))).toEqual(["pt"]);
  });
  it("every other tool exists in every language", () => {
    for (const t of TOOLS.filter((x) => x.id !== "cavaquinho")) for (const l of locales) expect(toolPath(l, t.id)).not.toBeNull();
  });
});

describe("note naming per language", () => {
  it("uses Do Re Mi spellings per language and German H", () => {
    expect(noteName(60, namingFor("pt"))).toBe("Dó");
    expect(noteName(62, namingFor("es"))).toBe("Re");
    expect(noteName(62, namingFor("fr"))).toBe("Ré");
    expect(noteName(65, namingFor("it"))).toBe("Fa");
    expect(noteName(71, namingFor("de"))).toBe("H");
    expect(noteName(70, namingFor("de"))).toBe("B");
    expect(noteName(64, namingFor("ja"))).toBe("E");
  });
  it("keeps the prototype's root spellings", () => {
    expect(ROOTS.abc).toEqual(["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"]);
    expect(ROOTS.solfege).toEqual(["Dó", "Dó♯", "Ré", "Mi♭", "Mi", "Fá", "Fá♯", "Sol", "Lá♭", "Lá", "Si♭", "Si"]);
  });
  it("offers three naming choices with readable labels", () => {
    expect(namingChoices("fr").map(namingLabel)).toEqual(["C D E", "Do Ré Mi", "C D E H"]);
    expect(namingChoices("pt").map(namingLabel)).toEqual(["C D E", "Dó Ré Mi", "C D E H"]);
    expect(namingChoices("en").map(namingLabel)).toEqual(["C D E", "Do Re Mi", "C D E H"]);
  });
});

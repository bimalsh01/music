import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { alternatesFor, hreflangMap, SITE_URL, type PageKey } from "@/lib/seo";
import { CONTENT_UPDATED, INFO_PAGES } from "@/lib/site";
import { TOOLS } from "@/tools/registry";
import { CHORD_PAGES, chordPagePath } from "@/lib/music/chordPages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageKey[] = [null, ...TOOLS.map((t) => t.id), ...INFO_PAGES];
  const chords = CHORD_PAGES.map((p) => {
    const url = `${SITE_URL}${chordPagePath(p)}`;
    // Root pages (the major chord of each root, which lists every chord on it) rank a step higher.
    const priority = p.type === "maj" ? 0.7 : 0.6;
    return { url, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority, alternates: { languages: { en: url, "x-default": url } } };
  });
  return [...pages.flatMap((id) => {
    const alts = alternatesFor(id);
    const languages = hreflangMap(id, true);
    const priority = id === null ? 1 : (INFO_PAGES as readonly string[]).includes(id) ? 0.3 : 0.8;
    return locales.flatMap((l) =>
      alts[l]
        ? [{ url: `${SITE_URL}${alts[l]}`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly" as const, priority, alternates: { languages } }]
        : [],
    );
  }), ...chords];
}

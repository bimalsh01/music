import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { alternatesFor, hreflangMap, SITE_URL } from "@/lib/seo";
import { TOOLS, type ToolId } from "@/tools/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: (ToolId | null)[] = [null, ...TOOLS.map((t) => t.id)];
  return pages.flatMap((id) => {
    const alts = alternatesFor(id);
    const languages = hreflangMap(id, true);
    return locales.flatMap((l) =>
      alts[l]
        ? [{ url: `${SITE_URL}${alts[l]}`, changeFrequency: "monthly" as const, priority: id === null ? 1 : 0.8, alternates: { languages } }]
        : [],
    );
  });
}

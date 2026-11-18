import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { alternatesFor, SITE_URL } from "@/lib/seo";
import { TOOLS, type ToolId } from "@/tools/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: (ToolId | null)[] = [null, ...TOOLS.map((t) => t.id)];
  return pages.flatMap((id) => {
    const alts = alternatesFor(id);
    const languages = Object.fromEntries(Object.entries(alts).map(([l, p]) => [l, `${SITE_URL}${p}`]));
    return locales.flatMap((l) =>
      alts[l]
        ? [{ url: `${SITE_URL}${alts[l]}`, changeFrequency: "monthly" as const, priority: id === null ? 1 : 0.8, alternates: { languages } }]
        : [],
    );
  });
}

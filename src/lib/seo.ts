import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionary";
import { locales, type Locale } from "@/i18n/routing";
import { getTool, homePath, toolPath, type ToolId } from "@/tools/registry";

/** Public origin for canonical URLs, sitemap and hreflang. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/** Every language version of a page (home when toolId is null). */
export function alternatesFor(toolId: ToolId | null): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of locales) {
    const p = toolId ? toolPath(l, toolId) : homePath(l);
    if (p) out[l] = p;
  }
  return out;
}

export function pageMetadata(locale: Locale, toolId: ToolId | null): Metadata {
  const d = getDictionary(locale);
  const meta = toolId ? d.meta[toolId] : d.meta.home;
  const alternates = alternatesFor(toolId);
  const self = alternates[locale]!;
  const languages: Record<string, string> = { ...alternates };
  if (alternates.en) languages["x-default"] = alternates.en;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: self, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: self,
      siteName: d.site.name,
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
  };
}

/** WebApplication structured data for a tool page. */
export function toolJsonLd(locale: Locale, toolId: ToolId): string {
  const d = getDictionary(locale);
  const meta = d.meta[toolId];
  const path = toolPath(locale, toolId) ?? homePath(locale);
  const tool = getTool(toolId);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: meta.title.split(" — ")[0],
    description: meta.description,
    url: `${SITE_URL}${path}`,
    applicationCategory: tool.kind === "chords" ? "ReferenceApplication" : "MultimediaApplication",
    operatingSystem: "Any",
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0" },
  }).replace(/</g, "\\u003c");
}

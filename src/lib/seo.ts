import type { Metadata } from "next";
import { getPageSeo, plainText, type PageSeo, type SeoKey } from "@/content/seo";
import { getDictionary } from "@/i18n/dictionary";
import { LOCALE_INFO, locales, type Locale } from "@/i18n/routing";
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

/** The same alternates keyed by hreflang code (pt-BR, zh-CN…), plus x-default. */
export function hreflangMap(toolId: ToolId | null, absolute = false): Record<string, string> {
  const out: Record<string, string> = {};
  const alts = alternatesFor(toolId);
  for (const [l, p] of Object.entries(alts) as [Locale, string][]) out[LOCALE_INFO[l].tag] = absolute ? `${SITE_URL}${p}` : p;
  const def = alts.en ?? alts.pt;
  if (def) out["x-default"] = absolute ? `${SITE_URL}${def}` : def;
  return out;
}

/** Keyword-targeted copy for a page. Every page must have it in every language. */
function seoFor(locale: Locale, key: SeoKey): PageSeo {
  const seo = getPageSeo(locale, key);
  if (!seo) throw new Error(`Missing SEO content for ${locale}/${key}`);
  return seo;
}

export function pageMetadata(locale: Locale, toolId: ToolId | null): Metadata {
  const d = getDictionary(locale);
  const meta = seoFor(locale, toolId ?? "home");
  const self = alternatesFor(toolId)[locale]!;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: self, languages: hreflangMap(toolId) },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: self,
      siteName: d.site.name,
      locale: LOCALE_INFO[locale].og,
      type: "website",
    },
  };
}

/** WebApplication structured data for a tool page. */
export function toolJsonLd(locale: Locale, toolId: ToolId): string {
  const meta = seoFor(locale, toolId);
  const path = toolPath(locale, toolId) ?? homePath(locale);
  const tool = getTool(toolId);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: meta.title.split(/ [–—] /)[0],
    description: meta.description,
    url: `${SITE_URL}${path}`,
    applicationCategory: tool.kind === "chords" ? "ReferenceApplication" : "MultimediaApplication",
    operatingSystem: "Any",
    inLanguage: LOCALE_INFO[locale].tag,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0" },
  }).replace(/</g, "\\u003c");
}

/** FAQPage structured data for the page's FAQ (matches the visible questions exactly). */
export function faqJsonLd(locale: Locale, toolId: ToolId | null): string | null {
  const seo = getPageSeo(locale, toolId ?? "home");
  if (!seo?.faq.length) return null;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_INFO[locale].tag,
    mainEntity: seo.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  }).replace(/</g, "\\u003c");
}

import type { Metadata } from "next";
import { getPageSeo, plainText } from "@/content/seo";
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
  // Keyword-targeted title/description (Rankability research) with the dictionary as fallback.
  const meta = getPageSeo(locale, toolId ?? "home") ?? (toolId ? d.meta[toolId] : d.meta.home);
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
  const meta = getPageSeo(locale, toolId) ?? d.meta[toolId];
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
    inLanguage: locale === "pt" ? "pt-BR" : "en",
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
    inLanguage: locale === "pt" ? "pt-BR" : "en",
    mainEntity: seo.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  }).replace(/</g, "\\u003c");
}

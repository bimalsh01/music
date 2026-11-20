import type { Metadata } from "next";
import { getPageSeo, plainText, type PageSeo, type SeoKey } from "@/content/seo";
import { getDictionary } from "@/i18n/dictionary";
import { LOCALE_INFO, locales, type Locale } from "@/i18n/routing";
import { BRAND, CONTACT_EMAIL, CONTENT_UPDATED, INFO_PAGES, PRODUCTION_URL, type InfoPage } from "@/lib/site";
import { getTool, homePath, toolPath, type ToolId } from "@/tools/registry";
import { TITLE_TAILS } from "@/content/chords/en";
import { chordShapes, chordTones, shapeLabel } from "@/lib/music/chordGuide";
import { CHORD_PAGES, chordPagePath, ROOT_NAMES, rootPage, type ChordPage } from "@/lib/music/chordPages";

/**
 * Public origin for canonical URLs, sitemap, hreflang and structured data. Production builds use the
 * real domain unless NEXT_PUBLIC_SITE_URL overrides it; `next dev` uses localhost.
 * (next.config.ts refuses a production build whose origin is localhost.)
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000")
).replace(/\/$/, "");

/** A page of the site: the home page (null), a tool, or one of the plain info pages. */
export type PageKey = ToolId | InfoPage | null;

const isInfo = (k: PageKey): k is InfoPage => (INFO_PAGES as readonly string[]).includes(k as string);

function pathFor(l: Locale, key: PageKey): string | null {
  if (key === null) return homePath(l);
  if (isInfo(key)) return `/${l}/${key}/`;
  return toolPath(l, key);
}

/** Every language version of a page. */
export function alternatesFor(key: PageKey): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of locales) {
    const p = pathFor(l, key);
    if (p) out[l] = p;
  }
  return out;
}

/** The same alternates keyed by hreflang code (pt-BR, zh-CN…), plus x-default. */
export function hreflangMap(key: PageKey, absolute = false): Record<string, string> {
  const out: Record<string, string> = {};
  const alts = alternatesFor(key);
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

/** Shared social-preview image (1200×630). */
const OG_IMAGE = { url: "/og.png", width: 1200, height: 630, alt: BRAND };

/** Title, description, canonical, hreflang and social tags for any page. */
export function metadataFor(locale: Locale, key: PageKey, title: string, description: string): Metadata {
  const self = alternatesFor(key)[locale]!;
  return {
    title,
    description,
    alternates: { canonical: self, languages: hreflangMap(key) },
    openGraph: {
      title,
      description,
      url: self,
      siteName: BRAND,
      locale: LOCALE_INFO[locale].og,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export function pageMetadata(locale: Locale, toolId: ToolId | null): Metadata {
  const meta = seoFor(locale, toolId ?? "home");
  return metadataFor(locale, toolId, meta.title, meta.description);
}

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const json = (o: unknown) => JSON.stringify(o).replace(/</g, "\\u003c");

function organization() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND,
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
    email: CONTACT_EMAIL,
    // Add real profile URLs (YouTube, social) here once they exist.
    sameAs: [] as string[],
  };
}

/** Organization + WebSite for the home page of a language. */
export function homeJsonLd(locale: Locale): string {
  const d = getDictionary(locale);
  return json({
    "@context": "https://schema.org",
    "@graph": [
      organization(),
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        name: BRAND,
        url: `${SITE_URL}${homePath(locale)}`,
        description: d.site.footer.note,
        inLanguage: LOCALE_INFO[locale].tag,
        publisher: { "@id": ORG_ID },
      },
    ],
  });
}

function breadcrumb(locale: Locale, name: string, path: string) {
  const d = getDictionary(locale);
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: d.site.name, item: `${SITE_URL}${homePath(locale)}` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** WebApplication + BreadcrumbList for a tool page. */
export function toolJsonLd(locale: Locale, toolId: ToolId): string {
  const meta = seoFor(locale, toolId);
  const path = toolPath(locale, toolId) ?? homePath(locale);
  const tool = getTool(toolId);
  const name = meta.title.split(/ [–—] /)[0];
  return json({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name,
        description: meta.description,
        url: `${SITE_URL}${path}`,
        applicationCategory: tool.kind === "chords" ? "ReferenceApplication" : "MultimediaApplication",
        operatingSystem: "Any",
        inLanguage: LOCALE_INFO[locale].tag,
        isAccessibleForFree: true,
        dateModified: CONTENT_UPDATED,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: organization(),
      },
      breadcrumb(locale, name, path),
    ],
  });
}

/** WebPage + BreadcrumbList for About / Contact / Privacy. */
export function infoJsonLd(locale: Locale, page: InfoPage, name: string): string {
  const path = `/${locale}/${page}/`;
  const type = page === "about" ? "AboutPage" : page === "contact" ? "ContactPage" : "WebPage";
  return json({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        name,
        url: `${SITE_URL}${path}`,
        inLanguage: LOCALE_INFO[locale].tag,
        dateModified: CONTENT_UPDATED,
        isPartOf: { "@id": SITE_ID },
        publisher: organization(),
      },
      breadcrumb(locale, name, path),
    ],
  });
}

/** FAQPage structured data for the page's FAQ (matches the visible questions exactly). */
export function faqJsonLd(locale: Locale, toolId: ToolId | null): string | null {
  const seo = getPageSeo(locale, toolId ?? "home");
  if (!seo?.faq.length) return null;
  return json({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: LOCALE_INFO[locale].tag,
    mainEntity: seo.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
    })),
  });
}

// ---------------------------------------------------------------------------------------------
// English chord pages (/en/chords/<slug>/)

/** Title, meta description and canonical for a chord page. English only, so hreflang is en + x-default. */
export function chordMetadata(page: ChordPage): Metadata {
  const index = CHORD_PAGES.indexOf(page);
  const title = `${page.h1} – ${TITLE_TAILS[index % TITLE_TAILS.length]}`;
  const description = chordDescription(page, index);
  const path = chordPagePath(page);
  const base = metadataFor("en", "chords", title, description);
  return {
    ...base,
    alternates: { canonical: path, languages: { en: path, "x-default": path } },
    openGraph: { ...base.openGraph, url: path },
  };
}

function chordDescription(page: ChordPage, index: number): string {
  const notes = chordTones(page.root, page.type).map((t) => t.note).join(", ");
  const [first] = chordShapes(page.root, page.type, 1);
  const where = first.kind === "open" ? `open shape ${first.tab}` : `${shapeLabel(first)} (${first.tab})`;
  const kw = page.h1.replace(/ (Chord|Guitar Chord|Chord on Guitar)$/, "");
  const variants = [
    `${page.h1}: ${where}, finger by finger. Notes ${notes}, a second shape and common progressions – press Play to hear it.`,
    `How to play ${kw} on guitar: ${where}. Fingering, sound, the notes ${notes} and the progressions it fits.`,
    `${page.h1} chart with sound: ${where}, step-by-step fingers, the notes ${notes} and a second shape.`,
  ];
  return variants[index % variants.length];
}

/** WebPage + HowTo (the finger steps) + BreadcrumbList for a chord page. */
export function chordJsonLd(page: ChordPage): string {
  const d = getDictionary("en");
  const path = chordPagePath(page);
  const url = `${SITE_URL}${path}`;
  const [shape] = chordShapes(page.root, page.type, 1);
  const root = rootPage(page.root);
  const crumbs = [
    { name: d.site.name, item: `${SITE_URL}${homePath("en")}` },
    { name: d.chords.title, item: `${SITE_URL}${toolPath("en", "chords")}` },
    ...(root.slug === page.slug ? [] : [{ name: `${ROOT_NAMES[page.root]} chords`, item: `${SITE_URL}${chordPagePath(root)}` }]),
    { name: page.h1, item: url },
  ];
  return json({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: chordMetadata(page).title,
        description: chordDescription(page, CHORD_PAGES.indexOf(page)),
        url,
        inLanguage: LOCALE_INFO.en.tag,
        dateModified: CONTENT_UPDATED,
        isPartOf: { "@id": SITE_ID },
        publisher: organization(),
      },
      {
        "@type": "HowTo",
        name: `How to play the ${page.name} chord on guitar`,
        description: `${page.name}, ${shapeLabel(shape)}: ${shape.tab}`,
        inLanguage: LOCALE_INFO.en.tag,
        step: shape.steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, text })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, ...c })),
      },
    ],
  });
}

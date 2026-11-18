import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { pt } from "./pt";
import type { PageSeo, SeoContent, SeoKey } from "./types";

const CONTENT: Record<Locale, SeoContent> = { en, pt };

export function getSeoContent(locale: Locale): SeoContent {
  return CONTENT[locale];
}

export function getPageSeo(locale: Locale, key: SeoKey): PageSeo | undefined {
  return CONTENT[locale].pages[key];
}

/** Plain text (no **bold** / [link](id) markup) for meta tags and JSON-LD. */
export function plainText(s: string): string {
  return s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/\[([^\]]+)\]\([a-z]+\)/g, "$1");
}

export type { PageSeo, SeoKey } from "./types";

import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { pt } from "./pt";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { zh } from "./zh";
import { ru } from "./ru";
import { pl } from "./pl";
import { nl } from "./nl";
import { tr } from "./tr";
import { id } from "./id";
import { hi } from "./hi";
import type { PageSeo, SeoContent, SeoKey } from "./types";

const CONTENT: Record<Locale, SeoContent> = { en, pt, es, fr, de, it, ja, ko, zh, ru, pl, nl, tr, id, hi };

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

import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pt", "es", "fr", "de", "it", "ja", "ko", "zh", "ru", "pl", "nl", "tr", "id", "hi"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

interface LocaleInfo {
  /** Name shown in the footer language list, in its own language. */
  native: string;
  /** <html lang> and hreflang value. */
  tag: string;
  /** Open Graph locale. */
  og: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: { native: "English", tag: "en", og: "en_US" },
  pt: { native: "Português (Brasil)", tag: "pt-BR", og: "pt_BR" },
  es: { native: "Español", tag: "es", og: "es_ES" },
  fr: { native: "Français", tag: "fr", og: "fr_FR" },
  de: { native: "Deutsch", tag: "de", og: "de_DE" },
  it: { native: "Italiano", tag: "it", og: "it_IT" },
  ja: { native: "日本語", tag: "ja", og: "ja_JP" },
  ko: { native: "한국어", tag: "ko", og: "ko_KR" },
  zh: { native: "中文 (简体)", tag: "zh-CN", og: "zh_CN" },
  ru: { native: "Русский", tag: "ru", og: "ru_RU" },
  pl: { native: "Polski", tag: "pl", og: "pl_PL" },
  nl: { native: "Nederlands", tag: "nl", og: "nl_NL" },
  tr: { native: "Türkçe", tag: "tr", og: "tr_TR" },
  id: { native: "Bahasa Indonesia", tag: "id", og: "id_ID" },
  hi: { native: "हिन्दी", tag: "hi", og: "hi_IN" },
};

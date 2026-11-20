import LocaleLayout from "../[locale]/layout";

// The English chord pages (/en/chords/<chord>/) live outside [locale]: a static export can't have a
// [locale] route that generates no pages for the other 14 languages. Same <html> as every /en/ page.
export { metadata, viewport } from "../[locale]/layout";

export default function ChordPagesLayout({ children }: { children: React.ReactNode }) {
  return LocaleLayout({ children, params: Promise.resolve({ locale: "en" }) });
}

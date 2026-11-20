import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ChordLookup } from "@/components/chords/ChordLookup";
import { ChordPageContent } from "@/components/chords/ChordPageContent";
import { PageMain } from "@/components/shell/HowTo";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { BottomNav, SiteHeader } from "@/components/shell/SiteHeader";
import { getDictionary } from "@/i18n/dictionary";
import { CHORD_PAGE_LOCALE, CHORD_PAGES, chordPageBySlug } from "@/lib/music/chordPages";
import { chordJsonLd, chordMetadata } from "@/lib/seo";

export const dynamicParams = false;

/** English only for now: one page per chord in CHORD_PAGES. */
export async function generateStaticParams() {
  return CHORD_PAGES.map((p) => ({ chord: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/en/chords/[chord]">): Promise<Metadata> {
  const { chord } = await params;
  const page = chordPageBySlug(chord);
  return page ? chordMetadata(page) : {};
}

export default async function ChordPage({ params }: PageProps<"/en/chords/[chord]">) {
  const { chord } = await params;
  const page = chordPageBySlug(chord);
  if (!page) notFound();
  setRequestLocale(CHORD_PAGE_LOCALE);
  const d = getDictionary(CHORD_PAGE_LOCALE);

  return (
    <div className="flex min-h-dvh flex-col text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: chordJsonLd(page) }} />
      <SiteHeader locale={CHORD_PAGE_LOCALE} toolId="chords" site={d.site} />
      <PageMain>
        <ChordLookup locale={CHORD_PAGE_LOCALE} L={d.chords} ui={d.site} initial={{ root: page.root, type: page.type }} chordPages />
        <ChordPageContent page={page} />
      </PageMain>
      <SiteFooter locale={CHORD_PAGE_LOCALE} toolId="chords" d={d} />
      <BottomNav locale={CHORD_PAGE_LOCALE} toolId="chords" site={d.site} />
    </div>
  );
}

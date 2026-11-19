import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ChordLookup } from "@/components/chords/ChordLookup";
import { Metronome } from "@/components/metronome/Metronome";
import { HowTo, PageMain } from "@/components/shell/HowTo";
import { SeoContent } from "@/components/shell/SeoContent";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { BottomNav, SiteHeader } from "@/components/shell/SiteHeader";
import { Tuner, type InstrumentTab } from "@/components/tuner/Tuner";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { INSTRUMENT_IDS, type InstrumentId } from "@/lib/music/instruments";
import { faqJsonLd, pageMetadata, toolJsonLd } from "@/lib/seo";
import { toolBySlug, toolPath, toolsFor } from "@/tools/registry";

export const dynamicParams = false;

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  return toolsFor(params.locale as Locale).map((t) => ({ tool: t.slugs[params.locale as Locale]! }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/[tool]">): Promise<Metadata> {
  const { locale, tool: slug } = await params;
  const tool = toolBySlug(locale as Locale, slug);
  if (!tool) return {};
  return pageMetadata(locale as Locale, tool.id);
}

export default async function ToolPage({ params }: PageProps<"/[locale]/[tool]">) {
  const { locale: rawLocale, tool: slug } = await params;
  const locale = rawLocale as Locale;
  const tool = toolBySlug(locale, slug);
  if (!tool) notFound();
  setRequestLocale(locale);
  const d = getDictionary(locale);

  let body: React.ReactNode;
  let text: { how: string; how1: string; how2: string; how3: string; next: string };
  if (tool.kind === "tuner") {
    const instrument = tool.id as InstrumentId;
    const tabs: InstrumentTab[] = INSTRUMENT_IDS.flatMap((id) => {
      const href = toolPath(locale, id);
      return href ? [{ id, label: d.instruments[id], href }] : [];
    });
    body = <Tuner locale={locale} instrument={instrument} title={d.tuner.titles[instrument]} tabs={tabs} L={d.tuner} ui={d.site} />;
    text = d.tuner;
  } else if (tool.kind === "metronome") {
    body = <Metronome L={d.metronome} ui={d.site} />;
    text = d.metronome;
  } else {
    body = <ChordLookup locale={locale} L={d.chords} ui={d.site} />;
    text = d.chords;
  }

  const faq = faqJsonLd(locale, tool.id);
  return (
    <div className="flex min-h-dvh flex-col text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toolJsonLd(locale, tool.id) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faq }} />}
      <SiteHeader locale={locale} toolId={tool.id} site={d.site} />
      <PageMain>
        {body}
        <HowTo title={text.how} steps={[text.how1, text.how2, text.how3]} nextLabel={text.next} nextHref={toolPath(locale, tool.next)!} />
        <SeoContent locale={locale} page={tool.id} />
      </PageMain>
      <SiteFooter locale={locale} toolId={tool.id} d={d} />
      <BottomNav locale={locale} toolId={tool.id} site={d.site} />
    </div>
  );
}

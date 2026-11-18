import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { FretboardArt, HeadstockArt, MetronomeArt } from "@/components/home/illustrations";
import { ArrowRight, ArrowUpRight } from "@/components/shell/icons";
import { PageMain } from "@/components/shell/HowTo";
import { SeoContent } from "@/components/shell/SeoContent";
import { SiteHeader } from "@/components/shell/SiteHeader";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { INSTRUMENT_IDS, stringsFor } from "@/lib/music/instruments";
import { namingFor, noteName } from "@/lib/music/notes";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { toolPath } from "@/tools/registry";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale as Locale, null);
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const d = getDictionary(locale);
  const t = d.home;
  const naming = namingFor(locale);

  const cards = [
    { href: toolPath(locale, "guitar")!, title: t.tuner, sub: t.tunerSub, art: <HeadstockArt />, pad: "px-[18px] pt-[26px]" },
    { href: toolPath(locale, "metronome")!, title: t.metronome, sub: t.metroSub, art: <MetronomeArt />, pad: "p-[34px]" },
    { href: toolPath(locale, "chords")!, title: t.chords, sub: t.chordsSub, art: <FretboardArt />, pad: "p-[34px]" },
  ];

  const tuners = INSTRUMENT_IDS.flatMap((id) => {
    const href = toolPath(locale, id);
    if (!href) return [];
    const notes = stringsFor(id, "standard").map((m) => noteName(m, naming));
    return [{ id, href, name: d.instruments[id], notes: notes.length ? notes : [t.any] }];
  });

  const faq = faqJsonLd(locale, null);
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-ink">
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faq }} />}
      <SiteHeader locale={locale} toolId={null} site={d.site} />
      <PageMain top="pt-20">
        <div className="flex flex-col items-center gap-[26px] text-center">
          <span className="flex h-[30px] items-center gap-2 rounded-full bg-surface px-3 text-xs font-semibold tracking-[0.04em] text-muted">
            <span className="size-[7px] rounded-full bg-accent" />
            {t.eyebrow}
          </span>
          <h1 className="m-0 max-w-[1000px] font-display text-[clamp(3.25rem,9vw,7.25rem)] leading-[0.98] font-extrabold tracking-[-0.035em]">
            {t.h1a} <span className="text-accent">{t.h1b}</span> {t.h1c}
          </h1>
          <p className="m-0 max-w-[560px] text-lg leading-[30px] text-muted">{t.sub}</p>
          <Link
            href={toolPath(locale, "guitar")!}
            className="mt-2 flex h-[52px] items-center gap-2.5 rounded-full bg-accent px-[26px] text-base font-bold text-bg no-underline shadow-glow"
          >
            {t.cta}
            <ArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
          {cards.map((c) => (
            <Link key={c.href} href={c.href} className="flex flex-col gap-[18px] text-ink no-underline">
              <span className={`box-border flex h-[360px] items-center justify-center overflow-hidden bg-surface ${c.pad}`}>
                {c.art}
              </span>
              <span className="flex items-center justify-between gap-3">
                <span className="flex flex-col gap-1">
                  <span className="font-display text-[26px] font-bold tracking-[-0.02em]">{c.title}</span>
                  <span className="text-sm text-muted">{c.sub}</span>
                </span>
                <span className="flex size-11 flex-none items-center justify-center rounded-full bg-inset">
                  <ArrowUpRight />
                </span>
              </span>
            </Link>
          ))}
        </div>

        <section className="flex flex-col gap-[34px]">
          <h2 className="m-0 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold tracking-[-0.02em]">{t.tuners}</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[18px]">
            {tuners.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="box-border flex min-h-[150px] flex-col justify-between gap-[18px] bg-surface p-6 text-ink no-underline"
              >
                <span className="font-display text-[22px] font-bold tracking-[-0.02em]">{c.name}</span>
                <span className="flex flex-wrap gap-1">
                  {c.notes.map((n, i) => (
                    <span
                      key={i}
                      className="box-border flex h-7 min-w-7 items-center justify-center rounded-full bg-raised px-[7px] text-xs font-bold"
                    >
                      {n}
                    </span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </section>
        <SeoContent locale={locale} page="home" />
      </PageMain>
    </div>
  );
}

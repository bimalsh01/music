import type { ReactNode } from "react";
import { getDictionary } from "@/i18n/dictionary";
import { format } from "@/i18n/format";
import { LOCALE_INFO, type Locale } from "@/i18n/routing";
import { infoJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL, CONTENT_UPDATED, type InfoPage as InfoKey } from "@/lib/site";
import { PageMain, PageTitle } from "./HowTo";
import { SiteFooter } from "./SiteFooter";
import { BottomNav, SiteHeader } from "./SiteHeader";

/** Date in the page language, e.g. "19 November 2026". */
export function localDate(locale: Locale, iso = CONTENT_UPDATED): string {
  return new Intl.DateTimeFormat(LOCALE_INFO[locale].tag, { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
}

/** **bold**, the contact email and https:// links inside a paragraph. */
function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|(hello@wowguitar\.com)|(https:\/\/[^\s)]+[^\s.,)])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={k++} className="font-semibold text-ink">{m[1]}</strong>);
    else {
      const href = m[2] ? `mailto:${m[2]}` : m[3];
      out.push(
        <a key={k++} href={href} className="font-semibold text-mint underline underline-offset-[3px]" rel={m[3] ? "noopener" : undefined}>
          {m[2] ?? m[3]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** About / Contact / Privacy: plain, translated text pages with the site header and footer. */
export function InfoPage({ locale, page }: { locale: Locale; page: InfoKey }) {
  const d = getDictionary(locale);
  const t = d.pages[page];
  const vars = { email: CONTACT_EMAIL, date: localDate(locale) };
  return (
    <div className="flex min-h-dvh flex-col text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: infoJsonLd(locale, page, t.h1) }} />
      <SiteHeader locale={locale} toolId={null} site={d.site} />
      <PageMain top="pt-12">
        <article className="flex max-w-[760px] flex-col gap-5">
          <PageTitle>{t.h1}</PageTitle>
          {t.body.map((p, i) => (
            <p key={i} className="m-0 text-[17px] leading-[1.7] text-muted">
              <Rich text={format(p, vars)} />
            </p>
          ))}
        </article>
      </PageMain>
      <SiteFooter locale={locale} toolId={null} d={d} page={page} />
      <BottomNav locale={locale} toolId={null} site={d.site} />
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { getSeoContent, plainText, type SeoKey } from "@/content/seo";
import type { AutoTable, Block } from "@/content/seo/types";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/i18n/dictionary";
import { INSTRUMENT_IDS, presetIds, stringsFor, type InstrumentId } from "@/lib/music/instruments";
import { format } from "@/i18n/format";
import { CONTENT_UPDATED } from "@/lib/site";
import { localDate } from "./InfoPage";
import { midiToFreq, namingFor, noteName, octaveOf } from "@/lib/music/notes";
import { toolPath, type ToolId } from "@/tools/registry";
import { ChevronDown } from "./icons";

/**
 * Keyword-targeted reading content below "How to use": guides, tables built from the app's own
 * tuning data, and an FAQ (also emitted as FAQPage JSON-LD by the page). Server-rendered, no JS.
 */
export function SeoContent({ locale, page }: { locale: Locale; page: SeoKey }) {
  const content = getSeoContent(locale);
  const seo = content.pages[page];
  if (!seo) return null;
  const instrument = page as InstrumentId;
  const d = getDictionary(locale);
  const isTuner = (INSTRUMENT_IDS as readonly string[]).includes(page);

  return (
    <div className="flex flex-col gap-16 border-t border-inset pt-16">
      {seo.blocks.map((b, i) => (
        <section key={i} className="flex max-w-[820px] flex-col gap-5">
          <h2 className="m-0 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-tight font-bold tracking-[-0.02em]">{b.h2}</h2>
          {b.p?.map((t, j) => (
            <Para key={j} text={t} locale={locale} />
          ))}
          {b.list && <List block={b} locale={locale} />}
          {b.table && <Table head={b.table.head} rows={b.table.rows} />}
          {b.autoTable && <AutoTableView kind={b.autoTable} locale={locale} instrument={instrument} />}
          {b.after?.map((t, j) => (
            <Para key={`a${j}`} text={t} locale={locale} />
          ))}
        </section>
      ))}

      {isTuner && (
        <section className="flex max-w-[820px] flex-col gap-5">
          <h2 className="m-0 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-tight font-bold tracking-[-0.02em]">{d.tuner.accuracy.h2}</h2>
          <p className="m-0 text-[17px] leading-[1.7] text-muted">{d.tuner.accuracy.p}</p>
        </section>
      )}

      {seo.faq.length > 0 && (
        <section className="flex max-w-[820px] flex-col gap-5">
          <h2 className="m-0 font-display text-[clamp(1.5rem,2.6vw,2.125rem)] leading-tight font-bold tracking-[-0.02em]">
            {content.labels.faq}
          </h2>
          <div className="flex flex-col gap-2">
            {seo.faq.map((f, i) => (
              <details key={i} className="group rounded-2xl bg-surface open:bg-inset">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-[17px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={18} className="flex-none text-muted transition-transform duration-150 group-open:rotate-180" />
                </summary>
                <p className="m-0 px-5 pb-5 text-[15px] leading-[1.7] text-muted">{plainText(f.a)}</p>
              </details>
            ))}
          </div>
        </section>
      )}
      <p className="m-0 text-sm text-muted">
        <time dateTime={CONTENT_UPDATED}>{format(d.site.updated, { date: localDate(locale) })}</time>
      </p>
    </div>
  );
}

/** Inline markup: **bold**, *italic*, [text](toolId). */
function Inline({ text, locale }: { text: string; locale: Locale }) {
  const parts: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([a-z]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={k++} className="font-semibold text-ink">{m[1]}</strong>);
    else if (m[2]) parts.push(<em key={k++}>{m[2]}</em>);
    else {
      const href = toolPath(locale, m[4] as ToolId);
      parts.push(
        href ? (
          <Link key={k++} href={href} className="font-semibold text-mint underline underline-offset-[3px]">
            {m[3]}
          </Link>
        ) : (
          m[3]
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function Para({ text, locale }: { text: string; locale: Locale }) {
  return (
    <p className="m-0 text-base leading-[1.75] text-muted">
      <Inline text={text} locale={locale} />
    </p>
  );
}

function List({ block, locale }: { block: Block; locale: Locale }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className={`m-0 flex flex-col gap-3 pl-6 text-base leading-[1.7] text-muted marker:font-bold marker:text-accent-text ${block.ordered ? "list-decimal" : "list-disc"}`}>
      {block.list!.map((t, i) => (
        <li key={i} className="pl-1">
          <Inline text={t} locale={locale} />
        </li>
      ))}
    </Tag>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-surface">
      <table className="w-full border-collapse text-left text-[15px] tabular">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3 text-xs font-semibold tracking-[0.04em] text-muted uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-inset">
              {r.map((c, j) => (
                <td key={j} className={`px-5 py-3 ${j === 0 ? "font-semibold text-ink" : "text-muted"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AutoTableView({ kind, locale, instrument }: { kind: AutoTable; locale: Locale; instrument: InstrumentId }) {
  const { labels } = getSeoContent(locale);
  const naming = namingFor(locale);
  const full = (m: number) => `${noteName(m, naming)}${octaveOf(m)}`;
  const num = new Intl.NumberFormat(locale === "pt" ? "pt-BR" : "en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const hz = (m: number) => `${num.format(midiToFreq(m))} Hz`;

  if (kind === "tuning") {
    const strings = stringsFor(instrument, "standard");
    const n = strings.length;
    const rows = strings.map((m, i) => [`${n - i}`, full(m), hz(m)]);
    return <Table head={[labels.string, labels.note, labels.frequency]} rows={rows} />;
  }
  if (kind === "alternates") {
    const presetNames = getDictionary(locale).tuner.presets;
    const rows = presetIds(instrument).map((p) => [
      presetNames[p],
      stringsFor(instrument, p)
        .map((m) => noteName(m, naming))
        .join(" "),
    ]);
    return <Table head={[labels.tuning, labels.notes]} rows={rows} />;
  }
  const rows = Array.from({ length: 12 }, (_, i) => [full(60 + i), hz(60 + i)]);
  return <Table head={[labels.note, labels.frequency]} rows={rows} />;
}

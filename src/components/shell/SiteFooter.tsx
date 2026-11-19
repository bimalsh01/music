import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary";
import { LOCALE_INFO, locales, type Locale } from "@/i18n/routing";
import { INSTRUMENT_IDS } from "@/lib/music/instruments";
import { switchPath, toolPath, type ToolId } from "@/tools/registry";
import { LogoMark } from "./icons";

/**
 * Footer: every tool in this language, and the 15-language switcher. Each language link goes to the
 * same tool in that language (or its home page when the tool doesn't exist there, e.g. cavaquinho).
 */
export function SiteFooter({ locale, toolId, d }: { locale: Locale; toolId: ToolId | null; d: Dictionary }) {
  const tools: { id: ToolId; label: string }[] = [
    ...INSTRUMENT_IDS.map((id) => ({ id, label: d.tuner.titles[id] })),
    { id: "metronome" as const, label: d.metronome.title },
    { id: "chords" as const, label: d.chords.title },
  ].filter((t) => toolPath(locale, t.id));

  return (
    <footer className="mt-8 border-t border-inset bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-14">
        <div className="grid gap-12 min-[860px]:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-[-0.02em]">
              <span className="flex size-[34px] items-center justify-center rounded-full bg-accent text-on-accent">
                <LogoMark />
              </span>
              {d.site.name}
            </span>
            <p className="m-0 max-w-[320px] text-sm leading-relaxed text-muted">{d.site.footer.note}</p>
            <nav aria-label={d.site.footer.tools}>
              <h2 className="m-0 mb-3 text-xs font-semibold tracking-[0.06em] text-muted uppercase">{d.site.footer.tools}</h2>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {tools.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={toolPath(locale, t.id)!}
                      aria-current={t.id === toolId ? "page" : undefined}
                      className="text-sm text-ink no-underline hover:underline aria-[current=page]:font-semibold aria-[current=page]:text-accent-text"
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav id="languages" aria-label={d.site.footer.languages} className="scroll-mt-24">
            <h2 className="m-0 mb-4 text-xs font-semibold tracking-[0.06em] text-muted uppercase">{d.site.footer.languages}</h2>
            <ul className="m-0 grid list-none grid-cols-2 gap-2 p-0 min-[560px]:grid-cols-3">
              {locales.map((l) => {
                const on = l === locale;
                return (
                  <li key={l}>
                    <Link
                      href={switchPath(l, toolId)}
                      hrefLang={LOCALE_INFO[l].tag}
                      lang={LOCALE_INFO[l].tag}
                      aria-current={on ? "true" : undefined}
                      className={`flex min-h-11 items-center justify-between gap-2 rounded-xl px-4 text-sm no-underline ${
                        on ? "bg-pill font-semibold text-on-pill" : "bg-inset text-ink hover:bg-raised"
                      }`}
                    >
                      {LOCALE_INFO[l].native}
                      <span className={`text-xs font-semibold ${on ? "text-on-pill" : "text-muted"}`}>{l.toUpperCase()}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

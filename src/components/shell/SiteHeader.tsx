import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary";
import { locales, type Locale } from "@/i18n/routing";
import { getTool, homePath, switchPath, toolPath, type ToolId, type ToolKind } from "@/tools/registry";
import { LogoMark } from "./icons";

interface Props {
  locale: Locale;
  /** The tool on this page, so the language switch stays on the same tool and the nav shows it. */
  toolId: ToolId | null;
  site: Dictionary["site"];
}

/** The three tools, always one tap away. "Tuner" opens the guitar tuner; the others pick an instrument there. */
const NAV: { kind: ToolKind; id: ToolId }[] = [
  { kind: "tuner", id: "guitar" },
  { kind: "metronome", id: "metronome" },
  { kind: "chords", id: "chords" },
];

/**
 * Logo left, language switch right, the tool nav between them on desktop. On phones the nav drops
 * to a full-width second row so every tool stays visible.
 */
export function SiteHeader({ locale, toolId, site }: Props) {
  const activeKind = toolId ? getTool(toolId).kind : null;
  return (
    <header className="sticky top-0 z-10 bg-[rgba(9,10,10,0.8)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 px-6 pb-3 min-[860px]:h-[72px] min-[860px]:flex-nowrap min-[860px]:pb-0">
        <Link
          href={homePath(locale)}
          className="order-1 flex h-[72px] items-center gap-2.5 font-display text-xl font-extrabold tracking-[-0.02em] text-ink no-underline min-[860px]:h-auto min-[860px]:min-h-11"
        >
          <span className="flex size-[34px] items-center justify-center rounded-full bg-accent text-bg">
            <LogoMark />
          </span>
          {site.name}
        </Link>

        <nav
          aria-label={site.nav.label}
          className="order-3 grid w-full grid-cols-3 gap-0.5 rounded-full bg-inset p-1 min-[860px]:order-2 min-[860px]:flex min-[860px]:w-auto"
        >
          {NAV.map(({ kind, id }) => {
            const on = kind === activeKind;
            return (
              <Link
                key={kind}
                href={toolPath(locale, id)!}
                aria-current={on ? "page" : undefined}
                className={`flex h-9 items-center justify-center rounded-full px-4 text-[13px] font-semibold whitespace-nowrap no-underline ${
                  on ? "bg-white text-bg" : "bg-transparent text-ink"
                }`}
              >
                {site.nav[kind]}
              </Link>
            );
          })}
        </nav>

        <nav aria-label={site.language} className="order-2 flex gap-0.5 rounded-full bg-inset p-1 min-[860px]:order-3">
          {locales.map((l) => {
            const on = l === locale;
            return (
              <Link
                key={l}
                href={switchPath(l, toolId)}
                hrefLang={l}
                lang={l}
                aria-current={on ? "true" : undefined}
                className={`flex h-9 min-w-12 items-center justify-center rounded-full text-[13px] font-semibold no-underline ${
                  on ? "bg-white text-bg" : "bg-transparent text-ink"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

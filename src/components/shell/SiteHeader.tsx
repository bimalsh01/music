import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { getTool, homePath, toolPath, type ToolId, type ToolKind } from "@/tools/registry";
import { ChordsIcon, GlobeIcon, LogoMark, MetronomeIcon, TunerIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  locale: Locale;
  /** The tool on this page, so the nav highlights it. */
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
 * Logo left; theme toggle + language shortcut right; the tool nav between them on desktop. On
 * phones the header is one slim row and the tools move to the fixed BottomNav, like an app.
 */
export function SiteHeader({ locale, toolId, site }: Props) {
  const activeKind = toolId ? getTool(toolId).kind : null;
  return (
    <header className="sticky top-0 z-10 bg-bg/80 backdrop-blur-[14px]">
      <div className="mx-auto flex h-[var(--m-header-h)] max-w-[1200px] items-center justify-between gap-x-4 px-6 min-[860px]:h-[72px]">
        <Link
          href={homePath(locale)}
          className="order-1 flex min-h-11 items-center gap-2.5 font-display text-xl font-extrabold tracking-[-0.02em] text-ink no-underline"
        >
          <span className="flex size-[34px] items-center justify-center rounded-full bg-accent text-on-accent">
            <LogoMark />
          </span>
          {site.name}
        </Link>

        <nav
          aria-label={site.nav.label}
          className="order-2 hidden gap-0.5 rounded-full bg-inset p-1 min-[860px]:flex"
        >
          {NAV.map(({ kind, id }) => {
            const on = kind === activeKind;
            return (
              <Link
                key={kind}
                href={toolPath(locale, id)!}
                aria-current={on ? "page" : undefined}
                className={`flex h-9 items-center justify-center rounded-full px-4 text-[13px] font-semibold whitespace-nowrap no-underline ${
                  on ? "bg-pill text-on-pill" : "bg-transparent text-ink"
                }`}
              >
                {site.nav[kind]}
              </Link>
            );
          })}
        </nav>

        <div className="order-3 flex items-center gap-2">
          <ThemeToggle toLight={site.theme.toLight} toDark={site.theme.toDark} />
          {/* 15 languages don't fit a header pill: the globe jumps to the footer list. */}
          <a
            href="#languages"
            aria-label={site.language}
            title={site.language}
            className="flex h-11 items-center gap-1.5 rounded-full bg-inset px-3.5 text-[13px] font-semibold text-ink no-underline"
          >
            <GlobeIcon />
            {locale.toUpperCase()}
          </a>
        </div>
      </div>
    </header>
  );
}

const NAV_ICON = { tuner: TunerIcon, metronome: MetronomeIcon, chords: ChordsIcon } as const;

/**
 * Phones only: the three tools as a fixed bottom tab bar (icon + label), clear of the iPhone home
 * indicator. Rendered outside the header because the header's backdrop blur would trap `fixed`.
 */
export function BottomNav({ locale, toolId, site }: Props) {
  const activeKind = toolId ? getTool(toolId).kind : null;
  return (
    <nav
      aria-label={site.nav.label}
      className="fixed inset-x-0 bottom-0 z-20 border-t border-inset bg-bg/90 pb-[var(--safe-b)] backdrop-blur-[14px] min-[860px]:hidden"
    >
      <div className="mx-auto grid h-[var(--m-nav-h)] max-w-[520px] grid-cols-3">
        {NAV.map(({ kind, id }) => {
          const on = kind === activeKind;
          const Icon = NAV_ICON[kind];
          return (
            <Link
              key={kind}
              href={toolPath(locale, id)!}
              aria-current={on ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-semibold no-underline ${
                on ? "text-accent-text" : "text-muted"
              }`}
            >
              <span
                className={`flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-150 ${
                  on ? "bg-[rgba(57,255,136,0.14)]" : ""
                }`}
              >
                <Icon />
              </span>
              {site.nav[kind]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

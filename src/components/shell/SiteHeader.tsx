import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { getTool, homePath, toolPath, type ToolId, type ToolKind } from "@/tools/registry";
import { GlobeIcon, LogoMark } from "./icons";
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
 * phones the nav drops to a full-width second row so every tool stays visible.
 */
export function SiteHeader({ locale, toolId, site }: Props) {
  const activeKind = toolId ? getTool(toolId).kind : null;
  return (
    <header className="sticky top-0 z-10 bg-bg/80 backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 px-6 pb-3 min-[860px]:h-[72px] min-[860px]:flex-nowrap min-[860px]:pb-0">
        <Link
          href={homePath(locale)}
          className="order-1 flex h-[60px] items-center gap-2.5 font-display text-xl font-extrabold tracking-[-0.02em] text-ink no-underline min-[860px]:h-auto min-[860px]:min-h-11"
        >
          <span className="flex size-[34px] items-center justify-center rounded-full bg-accent text-on-accent">
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
                  on ? "bg-pill text-on-pill" : "bg-transparent text-ink"
                }`}
              >
                {site.nav[kind]}
              </Link>
            );
          })}
        </nav>

        <div className="order-2 flex items-center gap-2 min-[860px]:order-3">
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

"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { IN_TUNE_CENTS } from "@/lib/music/tuning";

/** The grid carries on this far below the graph's box before it has fully faded (CSS px). */
const FADE_BELOW = 84;

/**
 * Live pitch history: faded graph paper with ♭ on the left and ♯ on the right. A ring follows the
 * note; the line it leaves behind scrolls down, so you can watch yourself turn the peg toward the
 * green centre band. `children` (the note readout) sits in the top-left corner, over the grid;
 * the ring's lane starts just below it. Drawn on a canvas at screen resolution.
 */
export function PitchTrace({
  cents,
  active,
  children,
  footer,
  className = "",
  overlayClassName = "",
  fadeSides = false,
}: {
  cents: number | null;
  active: boolean;
  children?: ReactNode;
  /** Sits at the bottom of the graph (the status line); the grid keeps going past it, then fades. */
  footer?: ReactNode;
  className?: string;
  overlayClassName?: string;
  /** Also fade the left and right edges (when the graph doesn't run to the screen edges). */
  fadeSides?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const off = active && cents !== null && Math.abs(cents) >= IN_TUNE_CENTS;
  const canvas = useRef<HTMLCanvasElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const live = useRef({ cents, active });
  useEffect(() => {
    live.current = { cents, active };
  }, [cents, active]);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    let stop: (() => void) | null = null;
    let cancelled = false;
    void import("./traceDraw").then((m) => {
      if (!cancelled) stop = m.startTrace(el, wrap.current, overlay.current, live);
    });
    return () => {
      cancelled = true;
      stop?.();
    };
  }, []);

  // No box: the grid fades in softly over the top ~110px, stays fully visible down past the footer,
  // then fading away over the next ~FADE_BELOW px — behind whatever comes next (the headstock).
  const down = `linear-gradient(to bottom, transparent 0, rgba(0,0,0,0.35) 40px, #000 min(110px, 24%), #000 calc(100% - ${FADE_BELOW + 24}px), transparent 100%)`;
  const sides = "linear-gradient(to right, transparent 0, #000 14%, #000 86%, transparent 100%)";
  // .trace-mask (globals.css) fades the bottom always, and the left/right edges too on desktop
  // (phones run the graph out to the screen edges) or whenever fadeSides is set.
  const mask = { ["--mask-down" as string]: down, ["--mask-sides" as string]: sides };

  return (
    <div ref={wrap} className={`relative flex min-h-0 flex-col ${className}`}>
      <div
        aria-hidden="true"
        className={`trace-mask pointer-events-none absolute inset-x-0 top-0 bg-[linear-gradient(to_bottom,var(--color-surface),transparent)] ${
          fadeSides ? "trace-mask-sides" : ""
        }`}
        style={{ ...mask, bottom: -FADE_BELOW }}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bad)_16%,transparent),transparent_75%)] transition-opacity duration-200"
          style={{ opacity: off ? 1 : 0 }}
        />
        <canvas ref={canvas} className="absolute inset-0 size-full" />
      </div>
      {/* Behind the note in the corner: the grid melts away radially toward the bottom-right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[calc(var(--ov-h,96px)+14px)] w-[78%] bg-[radial-gradient(ellipse_at_top_left,var(--color-bg)_0%,var(--color-bg)_38%,transparent_72%)]"
      />
      <div ref={overlay} className={`relative ${overlayClassName}`}>
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute left-[var(--side,24px)] top-[var(--head-y,30px)] -translate-y-1/2 font-display text-2xl font-bold text-muted"
      >
        ♭
      </span>
      <span
        aria-hidden="true"
        className="absolute right-[var(--side,24px)] top-[var(--head-y,30px)] -translate-y-1/2 font-display text-2xl font-bold text-muted"
      >
        ♯
      </span>
      {footer && <div className="relative mt-auto translate-x-[var(--center-shift,0px)]">{footer}</div>}
    </div>
  );
}

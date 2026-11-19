/**
 * The pitch graph's canvas loop, split out of PitchTrace so its code loads after the page is
 * interactive (dynamic import), not with the first bundle.
 */
import { IN_TUNE_CENTS } from "@/lib/music/tuning";

/** How fast the trail scrolls down, in CSS px per second. */
const SPEED = 130;
/** Sample the pitch this often (ms) for the trail. */
const SAMPLE_MS = 30;
/** Head marker radius, and the gap between the overlay (note readout) and the head lane (CSS px). */
const HEAD_R = 15;
const HEAD_GAP = 30;

interface Point {
  t: number;
  /** Cents offset (−50…+50 drawn), or null for silence (a gap in the line). */
  c: number | null;
}

interface Palette {
  ink: string;
  muted: string;
  ok: string;
  bad: string;
}

export interface TraceInput {
  current: { cents: number | null; active: boolean };
}

/** Start drawing into `el`; returns a stop function. */
export function startTrace(el: HTMLCanvasElement, wrap: HTMLElement | null, overlay: HTMLElement | null, live: TraceInput): () => void {
const ctx = el.getContext("2d");
if (!ctx) return () => {};

  let w = 0;
  let h = 0;
  let headY = 36;
  let raf = 0;

  // Theme colours come from CSS variables; re-read now and then so the light/dark toggle applies.
  let pal: Palette = readPalette(el);
  let palAt = 0;

  const points: Point[] = [];
  let headX = 0; // smoothed cents of the head marker
  let lastSample = 0;

  // Centre of the scale. Normally the middle of the canvas; when the graph is stretched further on
  // one side (desktop: toward the guitar), it stays under the middle of its own column instead.
  let cx = 0;
  const half = () => Math.min(cx, w - cx) - HEAD_R - 4;
  const xOf = (c: number) => cx + (Math.max(-50, Math.min(50, c)) / 50) * half();

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    if (now - palAt > 500) {
      pal = readPalette(el);
      palAt = now;
    }
    const { cents: target, active: on } = live.current;
    const heard = on && target !== null;
    // Follow the note quickly; with no sound, glide back to the middle.
    headX += ((heard ? target : 0) - headX) * (heard ? 0.5 : 0.22);

    if (now - lastSample >= SAMPLE_MS) {
      lastSample = now;
      points.push({ t: now, c: heard ? headX : null });
    }
    // Drop points that have scrolled off the bottom.
    const maxAge = (Math.max(0, h - headY) / SPEED) * 1000;
    while (points.length && now - points[0].t > maxAge) points.shift();

    ctx.clearRect(0, 0, w, h);

    // Off the target: the whole graph turns red; in tune: green; silent: neutral.
    // (Judged on the live reading, like the status line, not the ring's eased position.)
    const good = heard && Math.abs(target) < IN_TUNE_CENTS;
    const bad = heard && !good;

    // Graph paper with square cells: vertical lines every 10¢, horizontal lines scroll with time.
    const step = Math.max(16, xOf(10) - xOf(0));
    ctx.lineWidth = 1;
    ctx.strokeStyle = bad ? pal.bad : pal.ink;
    ctx.globalAlpha = bad ? 0.26 : 0.13;
    ctx.beginPath();
    // Grid keeps going past ±50¢ to fill a stretched side.
    const cell = (10 / 50) * half();
    for (let k = -Math.ceil(cx / cell); k <= Math.ceil((w - cx) / cell); k++) {
      if (k === 0) continue;
      const x = Math.round(cx + k * cell) + 0.5;
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    const off = on ? ((now / 1000) * SPEED) % step : 0;
    for (let y = (headY % step) + off - step; y < h; y += step) {
      ctx.moveTo(0, Math.round(y) + 0.5);
      ctx.lineTo(w, Math.round(y) + 0.5);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Target band (±5¢) and centre line.
    const z0 = xOf(-IN_TUNE_CENTS);
    const z1 = xOf(IN_TUNE_CENTS);
    ctx.fillStyle = bad ? pal.bad : pal.ok;
    ctx.globalAlpha = bad ? 0.16 : good ? 0.3 : 0.18;
    ctx.fillRect(z0, 0, z1 - z0, h);
    ctx.lineWidth = 1;
    ctx.strokeStyle = bad ? pal.bad : good ? pal.ok : pal.muted;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(Math.round(cx) + 0.5, 0);
    ctx.lineTo(Math.round(cx) + 0.5, h);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // The trail: newest at the top, fading as it scrolls down; green while in tune.
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (let i = points.length - 1; i > 0; i--) {
      const a = points[i];
      const b = points[i - 1];
      if (a.c === null || b.c === null) continue;
      const ya = headY + ((now - a.t) / 1000) * SPEED;
      const yb = headY + ((now - b.t) / 1000) * SPEED;
      ctx.globalAlpha = Math.max(0, 1 - (ya - headY) / Math.max(1, h - headY));
      ctx.strokeStyle = Math.abs(a.c) < IN_TUNE_CENTS ? pal.ok : pal.bad;
      ctx.beginPath();
      ctx.moveTo(xOf(a.c), ya);
      ctx.lineTo(xOf(b.c), yb);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Head marker: a ring with a small pointer, at the current pitch (centre when silent).
    const hx = xOf(headX);
    const col = good ? pal.ok : bad ? pal.bad : pal.muted;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(hx, headY - 6, HEAD_R - 3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(hx - 5, headY + 5);
    ctx.lineTo(hx + 5, headY + 5);
    ctx.lineTo(hx, headY + 11);
    ctx.closePath();
    ctx.fill();
    if (good) {
      ctx.beginPath();
      ctx.arc(hx, headY - 6, HEAD_R - 8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Nothing left to animate: stop until the tuner starts again.
    if (!on && Math.abs(headX) < 0.3 && points.every((p) => p.c === null)) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const resize = () => {
    // Line the scale's centre up with the centre of the parent box (0 shift on phones, where the
    // parent is `display: contents` and has no box).
    const own = el.getBoundingClientRect();
    const box = wrap?.parentElement?.getBoundingClientRect();
    const shift = box && box.width > 0 ? box.left + box.width / 2 - (own.left + own.width / 2) : 0;
    const dpr = window.devicePixelRatio || 1;
    w = el.clientWidth;
    h = el.clientHeight;
    cx = w / 2 + shift;
    // The footer (status line) centres on the same point, not on the stretched box.
    wrap?.style.setProperty("--center-shift", `${Math.round(shift)}px`);
    el.width = Math.round(w * dpr);
    el.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // The ring's lane starts just below the note readout in the corner.
    headY = (overlay?.offsetHeight ?? 0) + HEAD_GAP;
    wrap?.style.setProperty("--head-y", `${headY - 6}px`);
    wrap?.style.setProperty("--ov-h", `${overlay?.offsetHeight ?? 0}px`);
    // Resizing wipes the canvas: draw again even if the loop is idle.
    if (!raf) raf = requestAnimationFrame(frame);
  };
  const ro = new ResizeObserver(resize);
  resize();
  ro.observe(el);
  if (overlay) ro.observe(overlay);

  // Restart the loop when the tuner becomes active again.
  const kick = setInterval(() => {
    if (!raf && live.current.active) raf = requestAnimationFrame(frame);
  }, 200);

  return () => {
    cancelAnimationFrame(raf);
    clearInterval(kick);
    ro.disconnect();
  };
}

function readPalette(el: HTMLElement): Palette {
  const cs = getComputedStyle(el);
  const v = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback;
  return {
    ink: v("--color-ink", "#eeedf0"),
    muted: v("--color-muted", "#b8bcc3"),
    ok: v("--color-ok", "#1ecf9a"),
    bad: v("--color-bad", "#ff5c5c"),
  };
}

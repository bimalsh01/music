/**
 * Illustrated headstock (guitar-style) or scroll (violin/cello) geometry, ported 1:1 from the
 * prototype. Pegs sit in two columns; strings run from the posts down to the nut. All units are
 * in the 420-wide SVG viewBox.
 */
export interface PegKey {
  sx: number; sy: number;
  cx: number; cy: number; rx: number; ry: number; fill: string;
  hx: number; hy: number; hrx: number; hry: number; hi: string;
}

export interface PegSlot {
  /** Index into the instrument's string list. */
  idx: number;
  side: "L" | "R";
  y: number;
}

export interface Headstock {
  H: number;
  /** Visible slice of the 420-wide viewBox: left edge and width (electric trims the empty left). */
  vx: number;
  W: number;
  body: string;
  face: string;
  neckX: number;
  neckW: number;
  nutY: number;
  neckH: number;
  fadeY: number;
  frets: number[];
  scroll: boolean;
  /** Colours of the headstock wood (acoustic) or finish (electric). */
  bodyFill: string;
  faceStroke: string;
  keys: PegKey[];
  slots: PegSlot[];
  postL: number;
  postR: number;
  nutX: (j: number) => number;
}

export function headstock(kind: string, n: number, electric = false): Headstock {
  if (electric) return inlineHeadstock(n);
  const k = n / 2;
  const scroll = kind === "violin" || kind === "cello";
  const pegY = (i: number) => 120 + i * 88;
  const yEnd = 120 + (k - 1) * 88 + 50;
  const nutY = yEnd + 70;
  const H = nutY + 190;
  let body: string, face: string, neckX: number, neckW: number, postL: number, postR: number;
  const keys: PegKey[] = [];
  const slots: PegSlot[] = [];

  if (!scroll) {
    body = `M210 18 C252 18 268 32 284 42 L302 64 L296 ${yEnd} C292 ${yEnd + 32} 256 ${yEnd + 48} 254 ${nutY} L166 ${nutY} C164 ${yEnd + 48} 128 ${yEnd + 32} 124 ${yEnd} L118 64 L136 42 C152 32 168 18 210 18 Z`;
    face = `M210 30 C246 30 260 42 274 50 L288 68 L283 ${yEnd - 6} C279 ${yEnd + 24} 248 ${yEnd + 40} 246 ${nutY - 6} L174 ${nutY - 6} C172 ${yEnd + 40} 141 ${yEnd + 24} 137 ${yEnd - 6} L132 68 L146 50 C160 42 174 30 210 30 Z`;
    neckX = 166; neckW = 88; postL = 160; postR = 260;
  } else {
    body = `M180 76 L240 76 L248 ${yEnd} C248 ${yEnd + 30} 238 ${yEnd + 50} 236 ${nutY} L184 ${nutY} C182 ${yEnd + 50} 172 ${yEnd + 30} 172 ${yEnd} Z`;
    face = `M192 92 L228 92 L232 ${yEnd - 4} L188 ${yEnd - 4} Z`;
    neckX = 184; neckW = 52; postL = 196; postR = 224;
  }

  for (let i = 0; i < k; i++) {
    slots.push({ idx: k - 1 - i, side: "L", y: pegY(i) });
    slots.push({ idx: k + i, side: "R", y: pegY(i) });
  }
  for (const p of slots) {
    const L = p.side === "L";
    if (!scroll) {
      keys.push({ sx: L ? 102 : 296, sy: p.y - 5, cx: L ? 92 : 328, cy: p.y, rx: 17, ry: 24, fill: "#C9CDD2", hx: L ? 88 : 324, hy: p.y - 7, hrx: 7, hry: 11, hi: "#F2F4F6" });
    } else {
      keys.push({ sx: L ? 150 : 248, sy: p.y - 5, cx: L ? 132 : 288, cy: p.y, rx: 26, ry: 15, fill: "#2B1A11", hx: L ? 126 : 282, hy: p.y - 4, hrx: 10, hry: 4, hi: "#4A2E1E" });
    }
  }

  const nutX = (j: number) => {
    const a = neckX + 10;
    const b = neckX + neckW - 10;
    return n > 1 ? a + (j * (b - a)) / (n - 1) : (a + b) / 2;
  };
  const frets = [nutY + 62, nutY + 118, nutY + 168];

  return {
    H, vx: 0, W: 420, body, face, neckX, neckW, nutY, neckH: H - nutY, fadeY: H - 120, frets, scroll,
    bodyFill: "#6B3820", faceStroke: "#4A2614", keys, slots, postL, postR, nutX,
  };
}

/**
 * Electric-style headstock: every tuner in one line on the right, lowest string at the top,
 * black finish. Same neck, nut and fret layout as the acoustic one so the strings line up.
 */
function inlineHeadstock(n: number): Headstock {
  const neckX = 166;
  const neckW = 88;
  const post = 270;
  const gap = 64;
  const pegY = (i: number) => 100 + i * gap;
  const last = pegY(n - 1);
  const nutY = last + 70;
  const H = nutY + 190;
  const body = `M166 ${nutY} L160 140 C156 80 180 40 230 36 C270 34 296 48 300 76 L304 ${last + 20} C304 ${last + 56} 276 ${nutY - 30} 254 ${nutY - 6} L254 ${nutY} Z`;
  const face = `M176 ${nutY - 6} L172 144 C170 92 190 52 230 48 C264 46 284 58 288 82 L292 ${last + 16} C292 ${last + 48} 268 ${nutY - 36} 246 ${nutY - 12}`;
  const slots: PegSlot[] = [];
  const keys: PegKey[] = [];
  for (let i = 0; i < n; i++) {
    const y = pegY(i);
    slots.push({ idx: i, side: "R", y });
    keys.push({ sx: 300, sy: y - 5, cx: 326, cy: y, rx: 13, ry: 17, fill: "#C9CDD2", hx: 323, hy: y - 5, hrx: 5, hry: 8, hi: "#F2F4F6" });
  }
  const nutX = (j: number) => {
    const a = neckX + 10;
    const b = neckX + neckW - 10;
    return n > 1 ? a + (j * (b - a)) / (n - 1) : (a + b) / 2;
  };
  return {
    H, vx: 148, W: 272, body, face, neckX, neckW, nutY, neckH: H - nutY, fadeY: H - 120,
    frets: [nutY + 62, nutY + 118, nutY + 168], scroll: false,
    bodyFill: "#1C1E21", faceStroke: "#3A3E44", keys, slots, postL: post, postR: post, nutX,
  };
}

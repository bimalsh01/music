// Builds public/og.png (1200×630), the shared social preview image. Run: node scripts/make-og.mjs
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#090A0A"/>
  <g stroke="#26292d" stroke-width="2">
    ${Array.from({ length: 24 }, (_, i) => `<line x1="${i * 52}" y1="0" x2="${i * 52}" y2="630"/>`).join("")}
    ${Array.from({ length: 13 }, (_, i) => `<line x1="0" y1="${i * 52}" x2="1200" y2="${i * 52}"/>`).join("")}
  </g>
  <rect x="566" y="0" width="68" height="630" fill="#1ECF9A" opacity="0.18"/>
  <line x1="600" y1="0" x2="600" y2="630" stroke="#1ECF9A" stroke-width="3" opacity="0.8"/>
  <circle cx="600" cy="168" r="34" fill="none" stroke="#39FF88" stroke-width="10"/>
  <circle cx="600" cy="168" r="14" fill="#39FF88"/>
  <rect x="80" y="300" width="1040" height="250" rx="28" fill="#090A0A" opacity="0.88"/>
  <circle cx="160" cy="380" r="46" fill="#39FF88"/>
  <path d="M136 392a24 24 0 0 1 48 0" fill="none" stroke="#090A0A" stroke-width="8" stroke-linecap="round"/>
  <path d="M160 392l11-17" stroke="#090A0A" stroke-width="8" stroke-linecap="round"/>
  <text x="230" y="408" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="800" fill="#EEEDF0">WowGuitar</text>
  <text x="120" y="500" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="600" fill="#B8BCC3">Free online guitar tuner · metronome · guitar chords</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile("public/og.png");
console.log("public/og.png written");

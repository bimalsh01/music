# Music Tools

Tuner, metronome and chord lookup that work the second the page opens. EN + PT (Brazil).
Built from the plan in `docs/music-tools-plan.pdf` and the **Music Tools Prototype** design
(source copied to `docs/prototype/` for reference).

## Stack
Next.js 16 (App Router, Turbopack, static export) · React 19.3 · TypeScript 6 · Tailwind CSS 4 ·
next-intl · zustand · pitchy (pitch detection) · Serwist (offline) · Vitest.

## Develop
```bash
pnpm install        # pnpm 12 (or: npx pnpm@latest install)
pnpm dev            # http://localhost:3000  (mic works on localhost)
pnpm check          # lint + typecheck + unit tests + build
```

## Build & deploy
`pnpm build` writes a fully static site to `out/`. Deploy that folder to Cloudflare Pages
(`public/_headers` sets CSP, the microphone permission and the service-worker scope).
Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://example.com`) at build time so canonical URLs,
hreflang and the sitemap point at the real domain.

## Where things live
- `src/tools/registry.ts` — every tool, its EN/PT slugs and its "Next" link.
- `src/messages/{en,pt}.json` — all copy (taken verbatim from the prototype).
- `src/lib/music/*` — pure music logic, ported 1:1 from the prototype and unit-tested against it.
- `src/lib/audio/*` — Web Audio: mic + pitch detection, synth voices, metronome scheduler.
- `src/components/*` — shell (header, controls), home, tuner, metronome, chords.

# WowGuitar

Tuner, metronome and chord lookup that work the second the page opens — in 15 languages
(English, Português (BR), Español, Français, Deutsch, Italiano, 日本語, 한국어, 中文, Русский,
Polski, Nederlands, Türkçe, Bahasa Indonesia, हिन्दी), with a dark (default) and light theme.
Built from the plan in `docs/music-tools-plan.pdf` and the **Music Tools Prototype** design
(source copied to `docs/prototype/` for reference).

## Stack
Next.js 16 (App Router, Turbopack, static export) · React 19.3 · TypeScript 6 · Tailwind CSS 4 ·
next-intl · zustand · pitchy (pitch detection) · Serwist (offline) · Vitest.

## Develop
```bash
pnpm install        # pnpm 12 (or: npx pnpm@latest install)
pnpm dev            # http://localhost:3000  (mic works on localhost)
pnpm check          # lint + typecheck + unit tests + build + end-to-end tests
pnpm e2e            # end-to-end tests only (needs `pnpm build`; drives your installed Google Chrome)
```

## Build & deploy
Deployed on **Vercel** (behind Cloudflare) at https://www.wowguitar.com. `pnpm build` writes a fully
static site to `out/`.

- **Site URL:** canonical URLs, hreflang, `sitemap.xml`, `robots.txt` and structured data use
  `https://www.wowguitar.com` in production builds (`src/lib/seo.ts`). Override with
  `NEXT_PUBLIC_SITE_URL`; `next.config.ts` refuses a production build that points at localhost.
- **`vercel.json`:** server-side redirect of `/` (307 by `Accept-Language`, else 308 → `/en/`),
  `/sw.js` → the Serwist service worker, and security headers (CSP allows Cloudflare Zaraz / GA4).
  `public/_headers` mirrors the headers for Cloudflare Pages.
- **Social image:** `public/og.png`, rebuilt with `node scripts/make-og.mjs`.
- **Freshness:** bump `CONTENT_UPDATED` in `src/lib/site.ts` when page copy changes.

## Where things live
- `src/tools/registry.ts` — every tool, its translated URL slug per language and its "Next" link.
- `src/i18n/routing.ts` — the 15 languages (names, hreflang codes).
- `src/messages/<lang>.json` — UI text per language (tests fail if any key is missing).
- `src/content/seo/<lang>.ts` — keyword-targeted page content, titles and FAQs per language.
- `src/lib/music/*` — pure music logic, ported 1:1 from the prototype and unit-tested against it.
- `src/lib/music/chordPages.ts` — the 55 English chord pages (`/en/chords/<chord>/`): slugs and the
  keyword H1 of each. The major chord of each root is also that root's page. Copy per chord is in
  `src/content/chords/en.ts`; notes, finger steps and progressions come from `chordGuide.ts`.
  The pages live in `src/app/(chords)/` (English only, outside `[locale]`).
- `src/lib/audio/*` — Web Audio: mic + pitch detection, synth voices, metronome scheduler.
- `src/components/*` — shell (header, controls), home, tuner, metronome, chords.

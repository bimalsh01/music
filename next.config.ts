import type { NextConfig } from "next";
import { withSerwist } from "@serwist/turbopack";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Canonicals, hreflang, sitemap and structured data use this origin (see src/lib/seo.ts).
// A production build pointing at localhost would ship an unindexable site, so refuse it.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wowguitar.com";
if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/.test(siteUrl)) {
  throw new Error(`NEXT_PUBLIC_SITE_URL is "${siteUrl}". Production builds need the public https origin.`);
}

const nextConfig: NextConfig = {
  // Fully static site: every page is pre-rendered to /out at build time.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withSerwist(withNextIntl(nextConfig));

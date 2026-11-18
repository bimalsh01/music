import { createSerwistRoute } from "@serwist/turbopack";

// Builds /serwist/sw.js at build time (static export friendly).
export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute({
  swSrc: "src/sw.ts",
  useNativeEsbuild: false,
});

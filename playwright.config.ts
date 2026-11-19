import { defineConfig } from "@playwright/test";

/**
 * End-to-end tests against the static export (run `pnpm build` first).
 * They drive the locally installed Google Chrome (channel "chrome"), so no browser download is
 * needed. The tuner tests swap the microphone for a generated tone at an exact pitch (see app.spec.ts).
 */
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  workers: 1,
  reporter: [["list"]],
  use: { baseURL: "http://127.0.0.1:4174" },
  webServer: {
    command: "node tests/e2e/serve.mjs",
    url: "http://127.0.0.1:4174/en/",
    reuseExistingServer: true,
  },
});

import { chromium, expect, test, type Browser, type Page } from "@playwright/test";

const BASE = "http://127.0.0.1:4174";

/*
 * Chrome started by an automated process can't get macOS microphone permission (a system privacy
 * setting), so getUserMedia would hang. Instead each test swaps getUserMedia for a stream carrying a
 * generated string-like tone (fundamental + 2nd harmonic) at an exact frequency. Everything after
 * the microphone — the app's AudioContext, analyser, pitch detection, smoothing and UI — is real.
 */
async function launch(): Promise<Browser> {
  return chromium.launch({ channel: "chrome", headless: true, args: ["--autoplay-policy=no-user-gesture-required"] });
}

async function openPage(browser: Browser, path: string, micHz?: number): Promise<Page> {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  if (micHz) {
    await context.addInitScript((hz: number) => {
      navigator.mediaDevices.getUserMedia = async () => {
        const ac = new AudioContext();
        await ac.resume();
        const out = ac.createMediaStreamDestination();
        for (const [mult, level] of [[1, 0.45], [2, 0.15]]) {
          const o = ac.createOscillator();
          const g = ac.createGain();
          o.frequency.value = hz * mult;
          g.gain.value = level;
          o.connect(g).connect(out);
          o.start();
        }
        return out.stream;
      };
    }, micHz);
  }
  const page = await context.newPage();
  await page.goto(BASE + path);
  return page;
}

const readout = (page: Page) => page.locator(".tool-hero span[class*='leading-[0.85]']").first();
const status = (page: Page) => page.locator(".tool-hero [data-status]").first();

test.describe("tuner with a simulated microphone", () => {
  test("chromatic tuner hears A4 = 440 Hz and shows In tune", async () => {
    const browser = await launch();
    const page = await openPage(browser, "/en/chromatic-tuner/", 440);
    await page.locator(".tool-hero .shadow-glow").click();
    await expect(status(page)).toHaveText(/In tune/, { timeout: 8000 });
    await expect(readout(page)).toHaveText("A");
    await expect(page.locator(".tool-hero")).toContainText(/44\d\.\d Hz/);
    await browser.close();
  });

  test("a note 20 cents sharp reads as 'Tune down · ~20¢'", async () => {
    const browser = await launch();
    const page = await openPage(browser, "/en/chromatic-tuner/", 440 * 2 ** (20 / 1200));
    await page.locator(".tool-hero .shadow-glow").click();
    await expect(status(page)).toHaveText(/Tune down\s*\+(1[7-9]|2[0-3])¢/, { timeout: 8000 });
    await browser.close();
  });

  test("guitar tuner picks string 6 for low E and ticks it off", async () => {
    const browser = await launch();
    const page = await openPage(browser, "/en/guitar-tuner/", 82.4069);
    await page.locator(".tool-hero .shadow-glow").click();
    await expect(status(page)).toHaveText(/In tune/, { timeout: 8000 });
    await expect(readout(page)).toHaveText("E");
    const string6 = page.locator(".tool-hero button.absolute[aria-label^='String 6']");
    await expect(string6).toHaveAttribute("aria-pressed", "true");
    await expect(string6).toContainText("✓", { timeout: 5000 });
    await browser.close();
  });

  test("Portuguese tuner hears A on string 5 and names it Lá", async () => {
    const browser = await launch();
    const page = await openPage(browser, "/pt/afinador-de-violao/", 110);
    await page.locator(".tool-hero .shadow-glow").click();
    // A live reading (Hz) proves sound was detected; the idle screen would show string 6 (Mi).
    await expect(status(page)).toHaveText(/Afinado/, { timeout: 8000 });
    await expect(readout(page)).toHaveText("Lá");
    await browser.close();
  });
});

test("metronome plays: every beat of the bar lights up in turn", async () => {
  const browser = await launch();
  const page = await openPage(browser, "/ja/metronome/");
  await page.locator(".tool-hero .shadow-glow").click();
  const seen = await page.evaluate(async () => {
    const lit = new Set<number>();
    const t0 = performance.now();
    while (performance.now() - t0 < 3000) {
      const dots = [...document.querySelectorAll(".tool-hero [role=group]")][1].querySelectorAll("button");
      dots.forEach((b, i) => {
        if ((b as HTMLElement).style.background.includes("accent")) lit.add(i);
      });
      await new Promise((r) => setTimeout(r, 20));
    }
    return [...lit].sort();
  });
  expect(seen).toEqual([0, 1, 2, 3]);
  await page.locator(".tool-hero button.bg-pill").first().click();
  await browser.close();
});

test("offline: the service worker installs and precaches the app", async () => {
  const browser = await launch();
  const page = await openPage(browser, "/en/");
  const result = await page.evaluate(async () => {
    const reg = await Promise.race([navigator.serviceWorker.ready, new Promise((r) => setTimeout(() => r(null), 15000))]);
    if (!reg) return { ready: false, entries: 0 };
    let entries = 0;
    for (const k of await caches.keys()) entries += (await (await caches.open(k)).keys()).length;
    return { ready: true, scope: (reg as ServiceWorkerRegistration).scope, entries };
  });
  expect(result.ready).toBe(true);
  expect(result.entries).toBeGreaterThan(10);
  await browser.close();
});

test("theme toggle switches to light and survives a reload", async () => {
  const browser = await launch();
  const page = await openPage(browser, "/en/metronome/");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.getByRole("button", { name: "Switch to dark mode" })).toBeVisible();
  await browser.close();
});

test("footer language switch keeps you on the same tool", async () => {
  const browser = await launch();
  const page = await openPage(browser, "/de/gitarre-stimmen/");
  await page.locator("#languages").getByRole("link", { name: /日本語/ }).click();
  await expect(page).toHaveURL(/\/ja\/guitar-tuner\/$/);
  await expect(page.locator("h1")).toHaveText("ギターチューナー");
  await page.locator("#languages").getByRole("link", { name: /Português/ }).click();
  await expect(page).toHaveURL(/\/pt\/afinador-de-violao\/$/);
  await browser.close();
});

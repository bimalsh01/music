import { afterEach, describe, expect, it, vi } from "vitest";

/** Load the SEO helpers as a production build would see them. */
async function prod() {
  vi.resetModules();
  vi.stubEnv("NODE_ENV", "production");
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined as unknown as string);
  const seo = await import("@/lib/seo");
  const sitemap = (await import("@/app/sitemap")).default;
  const robots = (await import("@/app/robots")).default;
  return { seo, sitemap, robots };
}

afterEach(() => vi.unstubAllEnvs());

describe("production URLs (audit: no localhost)", () => {
  it("uses https://www.wowguitar.com everywhere", async () => {
    const { seo, sitemap, robots } = await prod();
    expect(seo.SITE_URL).toBe("https://www.wowguitar.com");
    const urls = sitemap().map((e) => e.url);
    expect(urls.every((u) => u.startsWith("https://www.wowguitar.com/"))).toBe(true);
    expect(JSON.stringify(sitemap())).not.toMatch(/localhost/);
    expect(robots().sitemap).toBe("https://www.wowguitar.com/sitemap.xml");
  });

  it("lists About, Contact and Privacy in every language", async () => {
    const { sitemap } = await prod();
    const urls = sitemap().map((e) => e.url);
    for (const p of ["about", "contact", "privacy"]) {
      expect(urls.filter((u) => u.endsWith(`/${p}/`))).toHaveLength(15);
    }
  });
});

describe("structured data", () => {
  it("home has Organization + WebSite", async () => {
    const { seo } = await prod();
    const g = JSON.parse(seo.homeJsonLd("en"))["@graph"];
    expect(g.map((n: { "@type": string }) => n["@type"])).toEqual(["Organization", "WebSite"]);
    expect(g[0].name).toBe("WowGuitar");
    expect(g[1].url).toBe("https://www.wowguitar.com/en/");
  });

  it("tool pages have WebApplication (USD, publisher, dateModified) + BreadcrumbList", async () => {
    const { seo } = await prod();
    const g = JSON.parse(seo.toolJsonLd("en", "guitar"))["@graph"];
    expect(g[0]["@type"]).toBe("WebApplication");
    expect(g[0].offers.priceCurrency).toBe("USD");
    expect(g[0].publisher.name).toBe("WowGuitar");
    expect(g[0].dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(g[1]["@type"]).toBe("BreadcrumbList");
    expect(g[1].itemListElement[1].item).toBe("https://www.wowguitar.com/en/guitar-tuner/");
  });

  it("pages carry og:image and a large Twitter card", async () => {
    const { seo } = await prod();
    const m = seo.pageMetadata("de", "metronome");
    expect(JSON.stringify(m.openGraph)).toContain("/og.png");
    expect(m.twitter).toMatchObject({ card: "summary_large_image" });
    expect(m.alternates?.canonical).toBe("/de/metronom/");
  });
});

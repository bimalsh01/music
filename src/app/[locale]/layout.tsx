import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { RegisterServiceWorker } from "@/components/shell/RegisterServiceWorker";
import { isLocale, LOCALE_INFO, locales } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import { BRAND } from "@/lib/site";
import { fontVariables } from "../fonts";
import { themeBootScript } from "@/lib/theme";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND,
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#090A0A",
  colorScheme: "dark",
  // Draw under the iPhone home indicator; the bottom tab bar pads itself with safe-area insets.
  viewportFit: "cover",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return (
    <html lang={LOCALE_INFO[locale].tag} className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-dvh" suppressHydrationWarning>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}

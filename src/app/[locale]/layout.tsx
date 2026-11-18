import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { RegisterServiceWorker } from "@/components/shell/RegisterServiceWorker";
import { isLocale, locales } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import { fontVariables } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Music Tools",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
};

export const viewport: Viewport = {
  themeColor: "#090A0A",
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"} className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}

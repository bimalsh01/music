import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { InfoPage } from "@/components/shell/InfoPage";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/routing";
import { metadataFor } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = getDictionary(locale).pages.contact;
  return metadataFor(locale, "contact", t.title, t.description);
}

export default async function Page({ params }: PageProps<"/[locale]/contact">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  return <InfoPage locale={locale} page="contact" />;
}

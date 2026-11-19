import { Bricolage_Grotesque, Inter } from "next/font/google";

/*
 * `subsets` only decides which files are preloaded: every subset (latin-ext for Polish/Turkish,
 * cyrillic for Russian) is still in the CSS and loads on demand via unicode-range. Preloading just
 * latin keeps it to two font files on the critical path. CJK and Devanagari use the system fonts.
 */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${bricolage.variable} ${inter.variable}`;

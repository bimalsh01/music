import { Bricolage_Grotesque, Inter } from "next/font/google";

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

// Cyrillic for Russian; CJK and Devanagari fall back to the system fonts.
export const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const fontVariables = `${bricolage.variable} ${inter.variable}`;

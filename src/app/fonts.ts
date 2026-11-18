import { Bricolage_Grotesque, Inter } from "next/font/google";

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

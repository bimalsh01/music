import type { Metadata } from "next";
import { fontVariables } from "../fonts";
import { themeBootScript } from "@/lib/theme";
import "../globals.css";

export const metadata: Metadata = {
  title: "WowGuitar",
  robots: { index: false },
};

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-dvh" suppressHydrationWarning>{children}</body>
    </html>
  );
}

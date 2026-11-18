import type { Metadata } from "next";
import { fontVariables } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Music Tools",
  robots: { index: false },
};

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="min-h-dvh" suppressHydrationWarning>{children}</body>
    </html>
  );
}

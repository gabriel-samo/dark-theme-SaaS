import "./globals.css";

import clsx from "clsx";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Theme SaaS",
  description: "Stunning Dark Theme SaaS Landing Page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}

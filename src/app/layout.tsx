import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: `${COMPANY.name} | Non-Emergency Medical Transport Boston & Dorchester`,
  description:
    "Licensed NEMT provider in Dorchester, MA. Wheelchair, stretcher & ambulatory medical transport across Greater Boston. MassHealth accepted. 24/7 dispatch — book online or call now.",
  path: "/",
  keywords: [
    "NEMT Boston",
    "wheelchair transportation Dorchester",
    "medical transport near me",
    "stretcher transport Massachusetts",
    "MassHealth NEMT",
    "dialysis transportation Boston",
    "hospital discharge transport",
  ],
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
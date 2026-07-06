import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

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

export const metadata: Metadata = {
  title: `${COMPANY.name} | Non-Emergency Medical Transport Boston`,
  description: COMPANY.tagline,
  keywords: [
    "NEMT",
    "non-emergency medical transport",
    "wheelchair transport Boston",
    "stretcher transport Dorchester",
    "ambulance service Boston",
    "dialysis transport",
    "McCall Ambulance",
  ],
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.tagline,
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
  robots: { index: true, follow: true },
};

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
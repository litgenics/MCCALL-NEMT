import type { Metadata } from "next";
import { COMPANY } from "./constants";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://litgenics.github.io/mccall-ambulance";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    path === "/" ? title : `${title} | ${COMPANY.shortName} Ambulance`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      "NEMT Boston",
      "medical transport Massachusetts",
      COMPANY.shortName,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      locale: "en_US",
      siteName: COMPANY.name,
      images: [
        {
          url: absoluteUrl(COMPANY.logo.og),
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — Non-Emergency Medical Transport`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(COMPANY.logo.og)],
    },
    robots: { index: true, follow: true },
  };
}
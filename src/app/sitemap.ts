import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { SERVICE_DETAILS, LOCAL_AREAS, RESOURCES } from "@/lib/seo-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/facilities", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/areas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/how-to-book", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...SERVICE_DETAILS.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...LOCAL_AREAS.map((a) => ({
      url: absoluteUrl(`/areas/${a.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...RESOURCES.map((r) => ({
      url: absoluteUrl(`/resources/${r.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
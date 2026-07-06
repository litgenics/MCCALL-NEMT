import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABar } from "@/components/CTABar";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import {
  LOCAL_AREAS,
  getAreaBySlug,
  SERVICE_DETAILS,
} from "@/lib/seo-content";
import { Check, MapPin } from "lucide-react";

export function generateStaticParams() {
  return LOCAL_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${slug}`,
    keywords: [`NEMT ${area.city}`, `wheelchair transport ${area.city}`, `medical transport ${area.city} MA`],
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const services = area.services
    .map((s) => SERVICE_DETAILS.find((d) => d.slug === s))
    .filter(Boolean);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `McCall Ambulance Service — ${area.city}`,
    description: area.metaDescription,
    areaServed: { "@type": "City", name: area.city },
    url: absoluteUrl(`/areas/${slug}`),
  };

  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero eyebrow={`${area.city}, MA`} title={area.h1} description={area.metaDescription} />
        <div className="bg-navy-950 px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Areas", href: "/areas" },
                { label: area.city },
              ]}
            />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-navy-900">Why McCall in {area.city}?</h2>
            <ul className="mt-6 space-y-3">
              {area.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-navy-900">Neighborhoods we serve</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-navy-800"
                >
                  <MapPin className="h-3 w-3 text-teal-500" aria-hidden />
                  {n}
                </span>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold text-navy-900">Services in {area.city}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((s) =>
                s ? (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-xl border border-border p-5 transition hover:border-teal-500/30 hover:shadow-md"
                  >
                    <h3 className="font-bold text-navy-900">{s.h1}</h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">{s.intro}</p>
                  </Link>
                ) : null
              )}
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xl font-bold text-navy-900">
                Book NEMT in {area.city}
              </h2>
              <CTABar className="mt-6 [&_a]:border-border [&_a:nth-child(2)]:text-navy-900 [&_a:nth-child(2)]:bg-white" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
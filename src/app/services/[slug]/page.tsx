import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABar } from "@/components/CTABar";
import { FAQ } from "@/components/FAQ";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import {
  SERVICE_DETAILS,
  getServiceBySlug,
  LOCAL_AREAS,
} from "@/lib/seo-content";
import { Check, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
    keywords: [...service.keywords],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.intro,
    provider: { "@type": "MedicalBusiness", name: "McCall Ambulance Service" },
    areaServed: "Greater Boston, Massachusetts",
    url: absoluteUrl(`/services/${slug}`),
  };

  const relatedServices = service.relatedSlugs
    .filter((s) => SERVICE_DETAILS.some((d) => d.slug === s))
    .map((s) => SERVICE_DETAILS.find((d) => d.slug === s)!);

  const relatedAreas = service.relatedSlugs
    .filter((s) => LOCAL_AREAS.some((a) => a.slug === s))
    .map((s) => LOCAL_AREAS.find((a) => a.slug === s)!);

  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero
          eyebrow="NEMT Service"
          title={service.h1}
          description={service.intro}
        />
        <div className="bg-navy-950 px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: service.h1 },
              ]}
            />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Who qualifies?</h2>
                <ul className="mt-6 space-y-3">
                  {service.whoQualifies.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">What to expect</h2>
                <ol className="mt-6 space-y-3">
                  {service.whatToExpect.map((item, i) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-600">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xl font-bold text-navy-900">Book this service</h2>
              <p className="mt-2 text-muted">
                Call dispatch 24/7 or submit our online form. We&apos;ll confirm
                your mobility needs and insurance coverage before dispatch.
              </p>
              <CTABar className="mt-6 [&_a]:border-border [&_a:nth-child(2)]:text-navy-900 [&_a:nth-child(2)]:bg-white" />
            </div>

            {(relatedServices.length > 0 || relatedAreas.length > 0) && (
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {relatedServices.length > 0 && (
                  <div>
                    <h3 className="font-bold text-navy-900">Related services</h3>
                    <ul className="mt-3 space-y-2">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-sm text-teal-600 hover:text-teal-500"
                          >
                            {s.h1} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {relatedAreas.length > 0 && (
                  <div>
                    <h3 className="font-bold text-navy-900">Service areas</h3>
                    <ul className="mt-3 space-y-2">
                      {relatedAreas.map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/areas/${a.slug}`}
                            className="text-sm text-teal-600 hover:text-teal-500"
                          >
                            NEMT in {a.city} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <FAQ />

        <section className="bg-navy-950 py-16 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-bold text-white">Ready to schedule?</h2>
            <Link
              href="/how-to-book"
              className="mt-4 inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
            >
              Read our booking guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
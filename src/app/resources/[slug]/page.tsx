import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABar } from "@/components/CTABar";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { RESOURCES, getResourceBySlug } from "@/lib/seo-content";
import { COMPANY } from "@/lib/constants";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return buildMetadata({
    title: resource.metaTitle,
    description: resource.metaDescription,
    path: `/resources/${slug}`,
    type: "article",
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.h1,
    description: resource.metaDescription,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: { "@type": "ImageObject", url: absoluteUrl(COMPANY.logo.header) },
    },
    datePublished: "2026-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: absoluteUrl(`/resources/${slug}`),
  };

  const otherResources = RESOURCES.filter((r) => r.slug !== slug);

  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero eyebrow={resource.readTime} title={resource.h1} description={resource.metaDescription} />
        <div className="bg-navy-950 px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: resource.h1 },
              ]}
            />
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <article className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-muted">
              Written by the {COMPANY.name} team · Licensed Massachusetts NEMT provider
            </p>

            <div className="mt-10 space-y-10">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold text-navy-900">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-muted">{section.content}</p>
                </section>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xl font-bold text-navy-900">Need to book a ride?</h2>
              <p className="mt-2 text-muted">
                Our dispatch team is available 24/7 to help with scheduling and insurance verification.
              </p>
              <CTABar className="mt-6 [&_a]:border-border [&_a:nth-child(2)]:text-navy-900 [&_a:nth-child(2)]:bg-white" />
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-navy-900">More resources</h3>
              <ul className="mt-4 space-y-2">
                {otherResources.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/resources/${r.slug}`} className="text-teal-600 hover:text-teal-500">
                      {r.h1} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
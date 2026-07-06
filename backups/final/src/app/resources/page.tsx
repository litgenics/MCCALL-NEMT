import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { RESOURCES } from "@/lib/seo-content";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "NEMT Resources & Guides — Massachusetts Medical Transport",
  description:
    "Educational guides on NEMT, MassHealth coverage, wheelchair transport expectations, and safety standards. Expert answers from McCall Ambulance Service.",
  path: "/resources",
  keywords: ["what is NEMT", "Medicaid NEMT Massachusetts", "how to book NEMT"],
});

export default function ResourcesPage() {
  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero
          eyebrow="Resources"
          title="NEMT guides written by transport professionals"
          description="Clear, helpful answers to the questions patients, families, and care coordinators ask most."
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {RESOURCES.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group flex gap-5 rounded-2xl border border-border bg-surface p-6 transition hover:border-teal-500/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                    <BookOpen className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-navy-900 group-hover:text-teal-600">
                      {resource.h1}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{resource.metaDescription}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-teal-600">
                      {resource.readTime} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CTABar } from "@/components/CTABar";
import { buildMetadata } from "@/lib/seo";
import { LOCAL_AREAS } from "@/lib/seo-content";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "NEMT Service Areas — Greater Boston Medical Transport",
  description:
    "McCall Ambulance serves Dorchester, Roxbury, Cambridge, Quincy, South Boston, Brookline, and all of Greater Boston. Wheelchair, stretcher, and ambulatory NEMT.",
  path: "/areas",
  keywords: ["NEMT near me", "medical transport Boston areas", "wheelchair transport Greater Boston"],
});

export default function AreasIndexPage() {
  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero
          eyebrow="Service Areas"
          title="Non-emergency medical transport across Greater Boston"
          description="Headquartered in Dorchester, our fleet covers Suffolk County and surrounding communities with rapid response times."
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LOCAL_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-teal-500/30 hover:shadow-lg"
                >
                  <MapPin className="h-5 w-5 text-teal-500" aria-hidden />
                  <h2 className="mt-3 text-xl font-bold text-navy-900 group-hover:text-teal-600">
                    {area.city}
                  </h2>
                  <p className="mt-2 text-sm text-muted line-clamp-2">
                    {area.highlights[0]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                    View {area.city} NEMT <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
              <h2 className="text-xl font-bold text-navy-900">Don&apos;t see your area?</h2>
              <p className="mt-2 text-muted">
                We serve all of Greater Boston. Call dispatch to confirm coverage for your address.
              </p>
              <CTABar className="mt-6 justify-center [&_a]:border-border [&_a:nth-child(2)]:text-navy-900 [&_a:nth-child(2)]:bg-white" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Insurance } from "@/components/Insurance";
import { HOW_IT_WORKS, COMPANY } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: `NEMT services from ${COMPANY.name} — wheelchair, stretcher, ambulatory, dialysis, and hospital discharge transport in Greater Boston.`,
};

export default function ServicesPage() {
  return (
    <SiteShell headerVariant="solid">
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Complete non-emergency medical transport"
          description="From wheelchair vans to stretcher ambulances — every mobility level, every destination, across Greater Boston."
        />

        <Services />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center text-3xl font-bold text-navy-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How every ride works
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOW_IT_WORKS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Fleet />
        <Insurance />

        <section className="bg-navy-950 py-20 text-center sm:py-28">
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Our dispatch team will match you with the right vehicle and crew.
              Call or book online — we&apos;ll handle the rest.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
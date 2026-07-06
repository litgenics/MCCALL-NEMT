import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { SafetyTrustSection } from "@/components/SafetyTrustSection";
import { ABOUT_STORY, COMPANY } from "@/lib/constants";
import { Logo } from "@/components/Logo";
import { buildMetadata } from "@/lib/seo";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About McCall Ambulance — Our Team, Safety & Story",
  description:
    "Meet the credentialed McCall Ambulance team. EMT-certified crews, background checks, ADA training, and 10+ years serving Dorchester and Greater Boston.",
  path: "/about",
  keywords: ["McCall Ambulance about", "NEMT team Boston", "licensed ambulance Dorchester"],
});

export default function AboutPage() {
  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero
          eyebrow="About McCall"
          title="Neighbors helping neighbors get where they need to go"
          description="From Fields Corner to every corner of Greater Boston — we've built our reputation one ride at a time."
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex justify-center">
              <Logo variant="about" linked={false} className="object-center" />
            </div>
            <h2
              className="text-3xl font-bold text-navy-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ABOUT_STORY.headline}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              {ABOUT_STORY.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="mesh-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              className="text-center text-3xl font-bold text-navy-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we stand for
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ABOUT_STORY.values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />
        <SafetyTrustSection />
        <PartnershipsSection />

        <section className="bg-navy-950 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
                  Our Home Base
                </span>
                <h2
                  className="mt-3 text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Proudly based in Fields Corner, Dorchester
                </h2>
                <p className="mt-4 text-lg text-white/50">
                  Our fleet is stationed at {COMPANY.address.full}, putting us
                  minutes from Boston Medical Center, Carney Hospital, and the
                  neighborhoods we serve every day.
                </p>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition hover:text-teal-300"
                >
                  <MapPin className="h-4 w-4" />
                  View on Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="McCall Ambulance location"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba3e1f5f3a9%3A0x667cef00808fd1ac!2sMcCall%20Ambulance%20Service!5e0!3m2!1sen!2sus!4v1`}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center sm:py-28">
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-navy-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to ride with McCall?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whether it&apos;s your first trip or your hundredth, we&apos;re here
              24/7.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-teal-600"
            >
              Book a Ride
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book a Ride",
  description: `Contact ${COMPANY.name} dispatch — 24/7 non-emergency medical transport booking for Greater Boston.`,
};

export default function ContactPage() {
  return (
    <SiteShell headerVariant="solid">
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Book a ride or reach dispatch"
          description="Available 24 hours a day, 7 days a week. Submit the form below or call dispatch directly — we'll confirm your ride within 30 minutes."
        />
        <CTA />
        <FAQ />
      </main>
    </SiteShell>
  );
}
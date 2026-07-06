import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Book NEMT — 24/7 Dispatch Boston",
  description:
    "Book non-emergency medical transport now. Call, WhatsApp, or submit our online form. 24/7 dispatch for wheelchair, stretcher & ambulatory rides in Greater Boston.",
  path: "/contact",
  keywords: ["book NEMT Boston", "call medical transport", "schedule ambulance ride"],
});

export default function ContactPage() {
  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
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
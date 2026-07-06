import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { AboutPreview } from "@/components/AboutPreview";
import { Fleet } from "@/components/Fleet";
import { HowItWorks } from "@/components/HowItWorks";
import { Insurance } from "@/components/Insurance";
import { WhyUs } from "@/components/WhyUs";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { SafetyTrustSection } from "@/components/SafetyTrustSection";
import { TeamSection } from "@/components/TeamSection";
import { FacilitiesPreview } from "@/components/FacilitiesPreview";
import { ServiceArea } from "@/components/ServiceArea";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <SiteShell headerVariant="hero">
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <AboutPreview />
        <SafetyTrustSection />
        <TeamSection />
        <PartnershipsSection />
        <Fleet />
        <HowItWorks />
        <Insurance />
        <WhyUs />
        <FacilitiesPreview />
        <ServiceArea />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </SiteShell>
  );
}
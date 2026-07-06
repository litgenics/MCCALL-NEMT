import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { CTABar } from "@/components/CTABar";
import { BookingForm } from "@/components/BookingForm";
import { buildMetadata } from "@/lib/seo";
import { HOW_IT_WORKS } from "@/lib/constants";
import { Check } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "How to Book NEMT — Step-by-Step Ride Scheduling Guide",
  description:
    "Learn how to book non-emergency medical transport with McCall Ambulance. Phone, online form, or care coordinator booking. MassHealth & insurance accepted.",
  path: "/how-to-book",
  keywords: ["how to book NEMT", "schedule medical transport Boston", "NEMT booking guide"],
});

const BOOKING_CHECKLIST = [
  "Patient full name and contact phone number",
  "Pickup address (including apartment/unit and stairs)",
  "Destination facility name and address",
  "Appointment date and time",
  "Mobility level (ambulatory, wheelchair, or stretcher)",
  "Insurance or MassHealth member ID",
  "Whether a return trip is needed",
  "Special needs (oxygen, bariatric, language preference)",
] as const;

export default function HowToBookPage() {
  return (
    <SiteShell headerVariant="solid">
      <main id="main-content">
        <PageHero
          eyebrow="Booking Guide"
          title="How to book your NEMT ride"
          description="Three ways to schedule: call dispatch, submit our online form, or have your care coordinator book for you."
        />

        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-navy-900">4-step booking process</h2>
                <div className="mt-8 space-y-6">
                  {HOW_IT_WORKS.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-navy-900">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold text-navy-900">
                  What to have ready
                </h2>
                <ul className="mt-6 space-y-2">
                  {BOOKING_CHECKLIST.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <CTABar className="[&_a]:border-border [&_a:nth-child(2)]:text-navy-900 [&_a:nth-child(2)]:bg-white" />
                </div>

                <p className="mt-8 text-sm text-muted">
                  New to NEMT? Read{" "}
                  <Link href="/resources/what-is-nemt" className="font-semibold text-teal-600">
                    What is NEMT?
                  </Link>{" "}
                  or{" "}
                  <Link href="/resources/medicaid-nemt-massachusetts" className="font-semibold text-teal-600">
                    MassHealth coverage guide
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-bold text-navy-900">Online booking form</h2>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
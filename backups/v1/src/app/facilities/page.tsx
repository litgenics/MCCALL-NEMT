import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { PageHero } from "@/components/PageHero";
import { FACILITY_BENEFITS, INSURANCE_PLANS, COMPANY } from "@/lib/constants";
import {
  Building2,
  Radio,
  FileCheck,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Facilities",
  description: `Partner with ${COMPANY.name} for reliable NEMT — dedicated dispatch, real-time ETAs, and streamlined billing for hospitals and care facilities.`,
};

const ICONS = [Building2, Radio, FileCheck, Clock];

const PARTNER_TYPES = [
  "Hospitals & ER discharge",
  "Skilled nursing facilities",
  "Dialysis centers",
  "Outpatient clinics",
  "Rehabilitation centers",
  "Behavioral health facilities",
  "Group homes & assisted living",
  "Home health agencies",
] as const;

export default function FacilitiesPage() {
  return (
    <SiteShell headerVariant="solid">
      <main>
        <PageHero
          eyebrow="For Care Facilities"
          title="A NEMT partner your team can depend on"
          description="Discharge planners, social workers, and care coordinators across Greater Boston trust McCall for on-time patient transport and clear communication."
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {FACILITY_BENEFITS.map((benefit, i) => {
                const Icon = ICONS[i];
                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-border bg-surface p-8"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mesh-gradient py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <h2
                  className="text-3xl font-bold text-navy-900"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Who we partner with
                </h2>
                <p className="mt-4 text-lg text-muted">
                  If your patients need non-emergency medical transport, we can
                  help — whether it&apos;s a one-time discharge or a standing
                  dialysis schedule.
                </p>
                <ul className="mt-8 space-y-3">
                  {PARTNER_TYPES.map((type) => (
                    <li key={type} className="flex items-center gap-3 text-navy-800">
                      <Check className="h-5 w-5 shrink-0 text-teal-500" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-8 shadow-lg">
                <h3 className="text-lg font-bold text-navy-900">
                  Billing &amp; insurance
                </h3>
                <p className="mt-2 text-sm text-muted">
                  We work with major Massachusetts health plans and offer direct
                  facility billing.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {INSURANCE_PLANS.map((plan) => (
                    <span
                      key={plan}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-navy-800"
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-950 py-20 text-center sm:py-28">
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s set up a facility account
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Contact our dispatch team to establish standing orders, billing
              arrangements, and a dedicated coordination workflow.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              Contact Dispatch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
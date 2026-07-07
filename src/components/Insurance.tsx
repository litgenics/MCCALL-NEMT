"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, HelpCircle } from "lucide-react";
import { INSURANCE_PLANS } from "@/lib/constants";
import { InsuranceChecker } from "@/components/InsuranceChecker";

export function Insurance() {
  return (
    <section className="mesh-gradient py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Insurance &amp; Billing
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We handle the paperwork
            </h2>
            <p className="mt-4 text-lg text-muted">
              Medical transport shouldn&apos;t come with billing headaches. Our
              dispatch team verifies coverage before your trip and bills your
              plan directly whenever possible.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Coverage verification",
                  text: "We confirm MassHealth, Medicare, and private plan eligibility before dispatch.",
                },
                {
                  icon: FileText,
                  title: "Direct billing",
                  text: "Facilities and patients receive clear invoices — no surprise charges after the ride.",
                },
                {
                  icon: HelpCircle,
                  title: "Not sure if you're covered?",
                  text: "Call dispatch with your insurance card handy. We'll walk you through it in minutes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-white p-8 shadow-lg"
          >
            <h3 className="text-lg font-bold text-navy-900">Accepted plans &amp; payment</h3>
            <p className="mt-2 text-sm text-muted">
              We work with most major Massachusetts health plans and facilities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {INSURANCE_PLANS.map((plan, i) => (
                <motion.span
                  key={plan}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-navy-800"
                >
                  {plan}
                </motion.span>
              ))}
            </div>

            <InsuranceChecker />

            <p className="mt-6 rounded-xl bg-amber-500/10 px-4 py-3 text-sm text-amber-800">
              Don&apos;t see your plan? Contact us — we may still be able to help
              or arrange private-pay options.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
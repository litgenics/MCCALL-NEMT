"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Clock, FileCheck, Radio } from "lucide-react";
import { FACILITY_BENEFITS } from "@/lib/constants";

const ICONS = [Building2, Radio, FileCheck, Clock];

export function FacilitiesPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {FACILITY_BENEFITS.map((benefit, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-border bg-surface p-6 transition hover:border-teal-500/30 hover:shadow-md"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-navy-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              For Care Facilities
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A NEMT partner your discharge team can count on
            </h2>
            <p className="mt-4 text-lg text-muted">
              Hospitals, SNFs, dialysis centers, and outpatient clinics across
              Greater Boston rely on McCall for dependable patient transport and
              transparent communication.
            </p>
            <Link
              href="/facilities"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Partner with McCall
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
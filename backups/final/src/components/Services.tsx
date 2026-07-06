"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  BedDouble,
  Footprints,
  Droplets,
  Building2,
  Users,
  Check,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/seo-content";

const SLUG_BY_ID = Object.fromEntries(
  SERVICE_DETAILS.map((s) => [s.id, s.slug])
) as Record<string, string>;

const ICON_MAP = {
  wheelchair: Accessibility,
  stretcher: BedDouble,
  ambulatory: Footprints,
  dialysis: Droplets,
  discharge: Building2,
  specialty: Users,
} as const;

export function Services() {
  return (
    <section id="services" className="mesh-gradient py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-teal-600"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Every level of mobility,{" "}
            <span className="text-gradient">every mile covered</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted"
          >
            From wheelchair vans to stretcher transport, our certified crews
            deliver compassionate, on-time rides across Greater Boston.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-shine group scroll-mt-24 rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 sm:p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/20 transition group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-navy-800"
                    >
                      <Check className="h-4 w-4 shrink-0 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {SLUG_BY_ID[service.id] && (
                  <Link
                    href={`/services/${SLUG_BY_ID[service.id]}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
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
  ArrowRight,
  Ambulance,
} from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SERVICE_DETAILS } from "@/lib/seo-content";
import { SectionHeader } from "./SectionHeader";

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
    <section id="services" className="section-py mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          icon={Ambulance}
          title={
            <>
              Every level of mobility,{" "}
              <span className="text-gradient">every mile covered</span>
            </>
          }
          description="From wheelchair vans to stretcher transport, our certified crews deliver compassionate, on-time rides across Greater Boston."
        />

        <div className="section-stack grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.article
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-shine group scroll-mt-24 rounded-2xl border border-border bg-white shadow-sm transition hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5 card-compact"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/20 transition group-hover:bg-teal-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-navy-800"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {SLUG_BY_ID[service.id] && (
                  <Link
                    href={`/services/${SLUG_BY_ID[service.id]}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
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
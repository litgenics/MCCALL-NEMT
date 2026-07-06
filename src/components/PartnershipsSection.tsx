"use client";

import { motion } from "framer-motion";
import { Building2, Heart, Shield } from "lucide-react";
import Link from "next/link";
import { PARTNERSHIPS } from "@/lib/seo-content";

const TYPE_ICONS = {
  Hospital: Building2,
  Dialysis: Heart,
  Insurance: Shield,
  "Home Care": Heart,
} as const;

export function PartnershipsSection() {
  return (
    <section className="mesh-gradient py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Trusted Partners
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Working with Boston&apos;s leading care providers
          </h2>
          <p className="mt-4 text-lg text-muted">
            We coordinate daily with hospitals, dialysis centers, and MassHealth
            to ensure seamless patient transport and billing.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIPS.map((partner, i) => {
            const Icon = TYPE_ICONS[partner.type as keyof typeof TYPE_ICONS] ?? Building2;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <Icon className="h-5 w-5 text-teal-500" aria-hidden />
                <h3 className="mt-3 font-bold text-navy-900">{partner.name}</h3>
                <p className="mt-1 text-xs text-muted">
                  {partner.type} · {partner.area}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Are you a facility looking to partner?{" "}
          <Link href="/facilities" className="font-semibold text-teal-600 hover:text-teal-500">
            Learn about facility accounts →
          </Link>
        </p>
      </div>
    </section>
  );
}
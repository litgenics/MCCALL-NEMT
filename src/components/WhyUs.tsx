"use client";

import { motion } from "framer-motion";
import { Heart, Timer, Users, Smartphone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const REASONS = [
  {
    icon: Heart,
    title: "Compassion-first crews",
    description:
      "Every driver and attendant is trained in patient handling, empathy, and cultural sensitivity — because a ride is more than a trip.",
  },
  {
    icon: Timer,
    title: "On-time, every time",
    description:
      "Missed dialysis or a late discharge causes real harm. Our dispatch team tracks every vehicle in real time to keep your schedule intact.",
  },
  {
    icon: Users,
    title: "Community rooted",
    description:
      `Based in ${COMPANY.address.neighborhood} for over a decade, we know Boston's hospitals, neighborhoods, and the families who depend on us.`,
  },
  {
    icon: Smartphone,
    title: "Modern coordination",
    description:
      "SMS confirmations, live ETA updates, and seamless insurance billing — technology that makes caregiving easier, not harder.",
  },
] as const;

export function WhyUs() {
  return (
    <section className="section-py bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Why McCall
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Boston&apos;s trusted partner for{" "}
              <span className="text-gradient">non-emergency care</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              {COMPANY.established}. We&apos;re not a national call center — we&apos;re
              your neighbors in Dorchester, with a fleet stationed minutes from the
              hospitals and clinics you visit most.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-sm font-medium text-teal-300">Emergency?</p>
              <p className="mt-2 text-2xl font-bold text-white">Call 911</p>
              <p className="mt-2 text-sm text-white/50">
                McCall provides scheduled and non-urgent medical transport. For
                life-threatening emergencies, always dial 911 immediately.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-compact rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-teal-500/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
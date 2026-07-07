"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  SprayCan,
  Car,
  ClipboardCheck,
  HeartPulse,
  Accessibility,
} from "lucide-react";
import { SAFETY_PROTOCOLS, PERFORMANCE_STATS } from "@/lib/seo-content";

const ICONS = [ShieldCheck, HeartPulse, Car, Accessibility, SprayCan, ClipboardCheck];

export function SafetyTrustSection() {
  return (
    <section id="safety" className="section-py bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start section-grid lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Safety &amp; Trust
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your safety is non-negotiable
            </h2>
            <p className="mt-4 text-lg text-white/50">
              From background checks to between-trip sanitization, every McCall
              protocol is designed to protect patients and earn the trust of care
              facilities across Greater Boston.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {PERFORMANCE_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
                  <div className="mt-0.5 text-xs text-white/40">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {SAFETY_PROTOCOLS.map((protocol, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={protocol.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{protocol.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">
                      {protocol.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/resources/nemt-safety-standards"
            className="text-sm font-semibold text-teal-400 transition hover:text-teal-300"
          >
            Read our full NEMT safety standards guide →
          </Link>
        </p>
      </div>
    </section>
  );
}
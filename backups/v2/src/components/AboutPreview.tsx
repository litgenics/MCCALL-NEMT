"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ABOUT_STORY, COMPANY } from "@/lib/constants";

export function AboutPreview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              About McCall
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {ABOUT_STORY.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {ABOUT_STORY.paragraphs[0]}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {ABOUT_STORY.paragraphs[1]}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {ABOUT_STORY.values.slice(0, 4).map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-surface p-4"
                >
                  <h3 className="text-sm font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              Our full story
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-950">
                <iframe
                  title="McCall Ambulance Service — Gibson Street"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba3e1f5f3a9%3A0x667cef00808fd1ac!2sMcCall%20Ambulance%20Service!5e0!3m2!1sen!2sus!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 360 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-white p-5 shadow-xl sm:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted">Headquarters</p>
                  <p className="text-sm font-bold text-navy-900">
                    {COMPANY.address.neighborhood}, {COMPANY.address.city}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
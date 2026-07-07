"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Heart } from "lucide-react";
import { ABOUT_STORY, COMPANY } from "@/lib/constants";
import { ABOUT_CREW_IMAGE } from "@/lib/visuals";
import { SectionHeader } from "./SectionHeader";

export function AboutPreview() {
  return (
    <section className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center section-grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              align="left"
              eyebrow="About McCall"
              icon={Heart}
              title={ABOUT_STORY.headline}
            />
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {ABOUT_STORY.paragraphs[0]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {ABOUT_STORY.paragraphs[1]}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {ABOUT_STORY.values.slice(0, 4).map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-surface p-3.5"
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
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              Our full story
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative space-y-3"
          >
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={ABOUT_CREW_IMAGE}
                  alt="McCall NEMT crew assisting a patient at a wheelchair-accessible vehicle"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-xs font-medium text-white/90">
                  Door-to-door care across Greater Boston
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="aspect-[16/7] bg-gradient-to-br from-navy-800 to-navy-950">
                <iframe
                  title="McCall Ambulance Service — Gibson Street"
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba3e1f5f3a9%3A0x667cef00808fd1ac!2sMcCall%20Ambulance%20Service!5e0!3m2!1sen!2sus!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 200 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted">Headquarters</p>
                <p className="text-sm font-bold text-navy-900">
                  {COMPANY.address.neighborhood}, {COMPANY.address.city}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
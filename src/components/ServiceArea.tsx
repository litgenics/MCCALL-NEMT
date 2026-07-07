"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Map } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";
import { LOCAL_AREAS } from "@/lib/seo-content";
import { BOSTON_SKYLINE_IMAGE } from "@/lib/visuals";
import { SectionHeader } from "./SectionHeader";

const AREA_SLUGS: Record<string, string> = Object.fromEntries(
  LOCAL_AREAS.map((a) => [a.city, a.slug])
);

export function ServiceArea() {
  return (
    <section id="coverage" className="section-py mesh-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start section-grid lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Service Area"
              icon={Map}
              title="Greater Boston, fully covered"
              description="Headquartered in Fields Corner, Dorchester — our fleet covers Suffolk County and surrounding communities with rapid response times."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area, i) => {
                const slug = AREA_SLUGS[area];
                const className =
                  "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-navy-800 shadow-sm transition hover:border-teal-500/30";
                const inner = (
                  <>
                    <MapPin className="h-3 w-3 text-teal-500" aria-hidden />
                    {area}
                  </>
                );
                return (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                  >
                    {slug ? (
                      <Link href={`/areas/${slug}`} className={className}>
                        {inner}
                      </Link>
                    ) : (
                      <span className={className}>{inner}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/areas"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              View all service areas <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              <MapPin className="h-4 w-4" />
              Visit us at {COMPANY.address.full}
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="relative h-28">
                <Image
                  src={BOSTON_SKYLINE_IMAGE}
                  alt="Boston skyline — McCall Ambulance service area"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-navy-950/20" />
                <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                  Serving Greater Boston &amp; Suffolk County
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <iframe
                title="McCall Ambulance Service location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba3e1f5f3a9%3A0x667cef00808fd1ac!2sMcCall%20Ambulance%20Service!5e0!3m2!1sen!2sus!4v1`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
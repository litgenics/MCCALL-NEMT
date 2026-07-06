"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export function ServiceArea() {
  return (
    <section id="coverage" className="mesh-gradient py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Service Area
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Greater Boston, fully covered
            </h2>
            <p className="mt-4 text-lg text-muted">
              Headquartered in Fields Corner, Dorchester — our fleet covers Suffolk
              County and surrounding communities with rapid response times.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-navy-800 shadow-sm"
                >
                  <MapPin className="h-3 w-3 text-teal-500" />
                  {area}
                </motion.span>
              ))}
            </div>

            <a
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition hover:text-teal-500"
            >
              <MapPin className="h-4 w-4" />
              Visit us at {COMPANY.address.full}
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border shadow-xl"
          >
            <iframe
              title="McCall Ambulance Service location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.5!2d${COMPANY.coordinates.lng}!3d${COMPANY.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37ba3e1f5f3a9%3A0x667cef00808fd1ac!2sMcCall%20Ambulance%20Service!5e0!3m2!1sen!2sus!4v1`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
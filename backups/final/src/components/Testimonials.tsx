"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Patient Stories
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trusted by families &amp; care teams
          </h2>
          <p className="mt-4 text-muted">
            Real feedback from patients, caregivers, and hospital discharge
            coordinators across Greater Boston.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-surface p-8"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-teal-500/20" aria-hidden />
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 text-sm font-bold text-white ring-2 ring-teal-500/20"
                  aria-hidden
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="flex gap-0.5" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden />
                    ))}
                  </div>
                  <cite className="not-italic">
                    <span className="block text-sm font-bold text-navy-900" itemProp="author">
                      {testimonial.author}
                    </span>
                  </cite>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-800" itemProp="reviewBody">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-4 border-t border-border pt-4">
                <span className="block text-xs text-muted">{testimonial.relation}</span>
                <span className="block text-xs font-medium text-teal-600">{testimonial.facility}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
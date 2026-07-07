"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircleHeart } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section id="reviews" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Patient Stories"
          icon={MessageCircleHeart}
          title="Trusted by families & care teams"
          description="Real feedback from patients, caregivers, and hospital discharge coordinators across Greater Boston."
        />

        <div className="section-stack grid gap-4 md:grid-cols-3 md:gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-compact relative rounded-2xl border border-border bg-surface"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="absolute right-4 top-4 h-7 w-7 text-teal-500/20" aria-hidden />
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-teal-500/25">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.author}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div
                    className="flex gap-0.5"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <cite className="not-italic">
                    <span className="block text-sm font-bold text-navy-900" itemProp="author">
                      {testimonial.author}
                    </span>
                  </cite>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy-800" itemProp="reviewBody">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3 border-t border-border pt-3">
                <span className="block text-xs text-muted">{testimonial.relation}</span>
                <span className="block text-xs font-medium text-teal-600">
                  {testimonial.facility}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { BookingForm } from "./BookingForm";

export function CTA() {
  return (
    <section id="book" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start section-grid lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
              Book a Ride
            </span>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Schedule your transport in minutes
            </h2>
            <p className="mt-4 text-lg text-muted">
              Fill out the form and our dispatch team will call to confirm within
              30 minutes. For same-day urgent requests, call us directly.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-teal-500/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">Call dispatch 24/7</p>
                  <p className="text-lg font-bold text-navy-900">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition hover:border-emerald-500/40 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">WhatsApp dispatch</p>
                  <p className="text-lg font-bold text-navy-900">{COMPANY.whatsappLabel}</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-teal-500/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">Email scheduling</p>
                  <p className="text-lg font-bold text-navy-900">{COMPANY.email}</p>
                </div>
              </a>

              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-teal-500/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">Visit our office</p>
                  <p className="text-lg font-bold text-navy-900">
                    {COMPANY.address.full}
                  </p>
                </div>
              </a>
            </div>

            <Link
              href="/how-to-book"
              className="mt-6 inline-block text-sm font-semibold text-teal-600 hover:text-teal-500"
            >
              New to NEMT? Read our step-by-step booking guide →
            </Link>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
}
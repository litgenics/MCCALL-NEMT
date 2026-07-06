"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Clock, MapPin, Activity } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-32 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300"
          >
            <Shield className="h-4 w-4" />
            Massachusetts Licensed NEMT Provider
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Safe, reliable medical transport{" "}
            <span className="text-gradient">when you need it most</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
          >
            {COMPANY.tagline}. Wheelchair vans, stretcher transport, and
            ambulatory rides — door-to-door across Dorchester and Greater Boston.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 text-base font-semibold text-navy-950 transition hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Book a Ride
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Dispatch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-400" />
              {COMPANY.hours}
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-teal-400" />
              {COMPANY.address.neighborhood}, {COMPANY.address.city}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal-400" />
                <span className="text-sm font-medium text-teal-300">
                  Dispatch Active
                </span>
              </div>
              <Activity className="h-5 w-5 text-teal-400/60" />
            </div>

            <div className="space-y-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <span className="text-sm text-white/50">{stat.label}</span>
                  <span className="text-lg font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-teal-500/20 bg-teal-500/10 p-5">
              <p className="text-sm font-medium text-teal-200">Need a ride today?</p>
              <p className="mt-1 text-xs text-white/50">
                Same-day scheduling available based on fleet availability.
              </p>
              <a
                href="#book"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 py-3 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
              >
                Request Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-2 lg:hidden"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
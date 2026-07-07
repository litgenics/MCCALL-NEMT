"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Clock, MapPin } from "lucide-react";
import { COMPANY, STATS } from "@/lib/constants";
import { HERO_AMBULANCE_IMAGE } from "@/lib/visuals";
import { Logo } from "./Logo";
import { PortraitVideo } from "./PortraitVideo";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-[88vh] overflow-hidden pt-16 sm:min-h-[85vh]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_AMBULANCE_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="hero-photo-overlay absolute inset-0" />
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-24 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1fr_auto] lg:gap-8 lg:px-8 lg:py-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Logo variant="hero" linked={false} priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3.5 py-1 text-sm text-teal-300"
          >
            <Shield className="h-4 w-4" />
            Massachusetts Licensed NEMT Provider
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-[3.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Safe, reliable medical transport{" "}
            <span className="text-gradient">when you need it most</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {COMPANY.tagline}. Wheelchair vans, stretcher transport, and
            ambulatory rides — door-to-door across Dorchester and Greater Boston.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:max-w-2xl"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur-sm"
              >
                <div className="text-lg font-bold text-white sm:text-xl">{stat.value}</div>
                <div className="mt-0.5 text-[10px] leading-tight text-white/50 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-navy-950 transition hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Book a Ride
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Dispatch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-teal-400" />
              {COMPANY.hours}
            </span>
            <span className="hidden h-3.5 w-px bg-white/20 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-teal-400" />
              {COMPANY.address.neighborhood}, {COMPANY.address.city}
            </span>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PortraitVideo variant="hero" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
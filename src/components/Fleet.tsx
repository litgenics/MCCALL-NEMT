"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Truck } from "lucide-react";
import { FLEET } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Fleet() {
  return (
    <section className="section-py bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Fleet"
          icon={Truck}
          title="The right vehicle for every patient"
          description="Every unit is maintained to Massachusetts ambulance standards, ADA accessible, and staffed by certified crews."
          dark
        />

        <div className="section-stack grid gap-5 lg:grid-cols-3 lg:gap-6">
          {FLEET.map((vehicle, i) => (
            <motion.article
              key={vehicle.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} — ADA-compliant NEMT vehicle, Dorchester MA medical transport fleet`}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">{vehicle.name}</h3>
                  <p className="text-sm text-teal-300">{vehicle.capacity}</p>
                </div>
              </div>
              <ul className="space-y-1.5 p-4 sm:p-5">
                {vehicle.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <Check className="h-3.5 w-3.5 shrink-0 text-teal-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
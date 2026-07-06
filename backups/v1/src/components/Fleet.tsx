"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FLEET } from "@/lib/constants";

export function Fleet() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
            Our Fleet
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The right vehicle for every patient
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Every unit is maintained to Massachusetts ambulance standards, ADA
            accessible, and staffed by certified crews.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {FLEET.map((vehicle, i) => (
            <motion.article
              key={vehicle.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                  <p className="text-sm text-teal-300">{vehicle.capacity}</p>
                </div>
              </div>
              <ul className="space-y-2 p-6">
                {vehicle.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                    <Check className="h-4 w-4 shrink-0 text-teal-400" />
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
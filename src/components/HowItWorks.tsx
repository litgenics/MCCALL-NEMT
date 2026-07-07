"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Simple Process
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book to doorstep in four steps
          </h2>
          <p className="mt-4 text-lg text-muted">
            No complicated portals. Call, click, or have your care team schedule —
            we handle the rest.
          </p>
        </div>

        <div className="relative section-stack">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-teal-500 via-teal-300 to-transparent lg:left-1/2 lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`inline-flex flex-col ${
                      i % 2 === 0 ? "lg:items-end" : "lg:items-start"
                    }`}
                  >
                    <span className="text-sm font-bold text-teal-600">
                      Step {item.step}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-muted">{item.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-2xl font-bold text-white shadow-lg shadow-teal-500/30">
                    {item.step}
                  </div>
                </div>

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
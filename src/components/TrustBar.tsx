"use client";

import { motion } from "framer-motion";
import { BadgeCheck, HeartPulse, Lock, Accessibility, FileCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const ICONS = [BadgeCheck, HeartPulse, Lock, Accessibility, FileCheck];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 text-sm font-medium text-muted"
              >
                <Icon className="h-4 w-4 shrink-0 text-teal-500" />
                {badge}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  icon?: LucideIcon;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={alignClass}
    >
      <div
        className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${
          dark ? "text-teal-400" : "text-teal-600"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
        {eyebrow}
      </div>
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-navy-900"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base sm:text-lg ${dark ? "text-white/50" : "text-muted"}`}>
          {description}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-12 rounded-full bg-teal-500/60 ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden
      />
    </motion.div>
  );
}
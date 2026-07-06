"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { TEAM } from "@/lib/seo-content";

export function TeamSection() {
  return (
    <section id="our-team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Our Team
          </span>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Credentialed professionals you can trust
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every McCall crew member is background-checked, CPR-certified, and
            trained in ADA passenger assistance before their first patient contact.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 text-lg font-bold text-white ring-2 ring-teal-500/30"
                aria-hidden
              >
                {member.initials}
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-navy-900" itemProp="name">
                {member.name}
              </h3>
              <p className="text-center text-sm font-medium text-teal-600" itemProp="jobTitle">
                {member.role}
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-muted" itemProp="description">
                {member.bio}
              </p>
              <ul className="mt-4 space-y-1.5">
                {member.credentials.map((cred) => (
                  <li key={cred} className="flex items-center gap-2 text-xs text-navy-800">
                    <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-teal-500" aria-hidden />
                    {cred}
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
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Users } from "lucide-react";
import { TEAM } from "@/lib/seo-content";
import { SectionHeader } from "./SectionHeader";

export function TeamSection() {
  return (
    <section id="our-team" className="section-py bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Team"
          icon={Users}
          title="Credentialed professionals you can trust"
          description="Every McCall crew member is background-checked, CPR-certified, and trained in ADA passenger assistance before their first patient contact."
        />

        <div className="section-stack grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role} at McCall Ambulance`}
                  fill
                  loading="lazy"
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
              </div>
              <div className="card-compact">
                <h3 className="text-base font-bold text-navy-900" itemProp="name">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-teal-600" itemProp="jobTitle">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted" itemProp="description">
                  {member.bio}
                </p>
                <ul className="mt-3 space-y-1">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="flex items-center gap-1.5 text-xs text-navy-800">
                      <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-teal-500" aria-hidden />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
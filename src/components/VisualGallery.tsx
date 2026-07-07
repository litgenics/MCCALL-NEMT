"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CREW_GALLERY } from "@/lib/visuals";

export function VisualGallery() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
      {CREW_GALLERY.map((item, i) => (
        <motion.figure
          key={item.alt}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            loading="lazy"
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-2 py-2 text-[10px] font-medium text-white/80 sm:text-xs">
            {item.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
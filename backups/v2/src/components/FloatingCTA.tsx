"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-400 hover:shadow-xl sm:hidden"
      aria-label="Book a ride"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
}
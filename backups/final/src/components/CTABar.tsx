import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function CTABar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}
    >
      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
      >
        <Calendar className="h-4 w-4" aria-hidden />
        Book a Ride Now
      </Link>
      <a
        href={COMPANY.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call {COMPANY.phone}
      </a>
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {COMPANY.whatsappLabel}
      </a>
    </div>
  );
}
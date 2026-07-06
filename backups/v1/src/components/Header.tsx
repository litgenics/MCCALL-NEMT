"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Ambulance } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header({ variant = "hero" }: { variant?: "hero" | "solid" }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const solid = variant === "solid" || scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "glass-dark shadow-lg shadow-navy-950/20" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/20 ring-1 ring-teal-400/30 transition group-hover:bg-teal-500/30">
            <Ambulance className="h-5 w-5 text-teal-400" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-white">
              {COMPANY.shortName}
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-teal-300/80">
              Ambulance Service
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          {isHome && (
            <a
              href="#book"
              className="rounded-lg px-3 py-2 text-sm font-medium text-teal-300 transition hover:bg-white/10 hover:text-teal-200"
            >
              Book a Ride
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-navy-950 transition hover:bg-teal-400 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 ring-1 ring-white/20 transition hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass-dark border-t border-white/10 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition hover:bg-white/10 hover:text-white",
                  pathname === link.href ? "text-teal-300" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={isHome ? "#book" : "/contact"}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-teal-500 px-4 py-3 text-base font-semibold text-navy-950"
            >
              <Phone className="h-4 w-4" />
              Book a Ride
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
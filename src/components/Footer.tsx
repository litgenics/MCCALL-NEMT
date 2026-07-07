import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Logo } from "@/components/Logo";
import { SERVICE_DETAILS, LOCAL_AREAS, RESOURCES } from "@/lib/seo-content";

const FOOTER_LINKS = {
  Services: SERVICE_DETAILS.map((s) => ({
    label: s.h1.replace(" & ", " / ").slice(0, 32),
    href: `/services/${s.slug}`,
  })),
  Areas: LOCAL_AREAS.slice(0, 4).map((a) => ({
    label: a.city,
    href: `/areas/${a.slug}`,
  })),
  Resources: RESOURCES.map((r) => ({
    label: r.h1.length > 40 ? r.h1.slice(0, 38) + "…" : r.h1,
    href: `/resources/${r.slug}`,
  })),
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/#our-team" },
    { label: "For Facilities", href: "/facilities" },
    { label: "How to Book", href: "/how-to-book" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-5 text-sm leading-relaxed">
              Licensed non-emergency medical transportation serving Greater Boston
              from our Dorchester headquarters. MassHealth accepted.
            </p>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-400 transition hover:text-teal-300"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Follow on Facebook
            </a>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition hover:text-teal-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 text-sm transition hover:text-teal-400"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition hover:text-teal-400"
                >
                  {COMPANY.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 text-sm transition hover:text-teal-400"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-sm transition hover:text-teal-400"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {COMPANY.address.full}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-teal-400 transition hover:text-teal-300"
                >
                  Book a ride online →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs">
            &copy; {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            For emergencies, call 911. This site provides non-emergency medical
            transport information only.
          </p>
        </div>
      </div>
    </footer>
  );
}
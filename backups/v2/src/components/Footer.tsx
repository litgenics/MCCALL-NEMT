import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Logo } from "@/components/Logo";

const FOOTER_LINKS = {
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Wheelchair Transport", href: "/services#wheelchair" },
    { label: "Stretcher Transport", href: "/services#stretcher" },
    { label: "Dialysis Rides", href: "/services#dialysis" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "For Facilities", href: "/facilities" },
    { label: "Service Area", href: "/#coverage" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="footer" />
            <p className="mt-5 text-sm leading-relaxed">
              Licensed non-emergency medical transportation serving Greater Boston
              from our Dorchester headquarters.
            </p>
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-400 transition hover:text-teal-300"
            >
              <Facebook className="h-4 w-4" />
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
                  <li key={link.label}>
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
                  <Phone className="h-4 w-4 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center gap-2 text-sm transition hover:text-teal-400"
                >
                  <Mail className="h-4 w-4 shrink-0" />
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
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
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
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <SiteShell headerVariant="solid">
      <main className="flex min-h-[70vh] items-center justify-center px-4 py-32">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            404
          </p>
          <h1
            className="mt-3 text-4xl font-bold text-navy-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Page not found
          </h1>
          <p className="mt-4 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
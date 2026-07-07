"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import {
  COVERAGE_STYLES,
  getTransportNote,
  INSURANCE_PROVIDERS,
  TRANSPORT_OPTIONS,
  type InsuranceProvider,
  type TransportType,
} from "@/lib/insurance-checker";
import { cn } from "@/lib/utils";

export function InsuranceChecker() {
  const [providerId, setProviderId] = useState("");
  const [service, setService] = useState<TransportType | "">("");
  const [result, setResult] = useState<InsuranceProvider | null>(null);
  const [submittedService, setSubmittedService] = useState<TransportType | "">("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const insurance = INSURANCE_PROVIDERS.find((p) => p.id === providerId);
    if (!insurance || !service) return;
    setResult(insurance);
    setSubmittedService(service);
  };

  const styles = result ? COVERAGE_STYLES[result.coverage] : null;
  const transportLabel =
    TRANSPORT_OPTIONS.find((t) => t.value === submittedService)?.label ?? "";

  return (
    <div id="insurance-checker" className="mt-6 border-t border-border pt-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600">
          <ClipboardCheck className="h-5 w-5" />
        </div>
        <div>
          <h3
            className="text-lg font-bold text-navy-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Check if your insurance covers NEMT
          </h3>
          <p className="mt-1 text-sm text-muted">Instant Insurance Coverage Guide</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted">
        General guidance based on publicly available information. Final coverage
        depends on your specific plan and medical necessity.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="insurance-provider" className="mb-2 block text-sm font-semibold text-navy-900">
            Insurance provider
          </label>
          <select
            id="insurance-provider"
            value={providerId}
            onChange={(e) => setProviderId(e.target.value)}
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          >
            <option value="">Select your insurance</option>
            {INSURANCE_PROVIDERS.map((ins) => (
              <option key={ins.id} value={ins.id}>
                {ins.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="transport-type" className="mb-2 block text-sm font-semibold text-navy-900">
            Type of transport needed
          </label>
          <select
            id="transport-type"
            value={service}
            onChange={(e) => setService(e.target.value as TransportType | "")}
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-navy-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          >
            <option value="">Select transport type</option>
            {TRANSPORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-500 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
        >
          Check my coverage
        </button>
      </form>

      <AnimatePresence mode="wait">
        {result && styles && submittedService && (
          <motion.div
            key={result.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={cn("mt-6 rounded-2xl border p-5", styles.box)}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", styles.badge)}>
                {styles.label}
              </span>
              {transportLabel && (
                <span className="text-xs text-muted">{transportLabel}</span>
              )}
            </div>

            <h4 className="text-base font-bold text-navy-900">
              Result for {result.name}
            </h4>
            <p className="mt-2 text-sm text-navy-800">{result.message}</p>
            <p className="mt-3 text-sm font-semibold text-teal-800">{result.action}</p>
            <p className="mt-3 text-sm text-muted">
              {getTransportNote(submittedService)}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="flex-1 rounded-xl bg-teal-500 py-3 text-center text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
              >
                Book this ride
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-teal-600 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50"
              >
                <Phone className="h-4 w-4" />
                Call dispatch: {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-4 text-xs text-muted">
        This is a general guide only. Coverage can vary by specific plan, medical
        necessity, and prior authorization requirements. Always verify with your
        insurance or call McCall directly.
      </p>
    </div>
  );
}
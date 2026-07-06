"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  User,
  MapPinned,
  Calendar,
  Accessibility,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MOBILITY_OPTIONS = [
  { value: "ambulatory", label: "Ambulatory (can walk with assistance)" },
  { value: "wheelchair", label: "Wheelchair" },
  { value: "stretcher", label: "Stretcher / Gurney" },
  { value: "bariatric", label: "Bariatric" },
] as const;

const STEPS = [
  { id: 1, label: "Patient", icon: User },
  { id: 2, label: "Trip Details", icon: MapPinned },
  { id: 3, label: "Schedule", icon: Calendar },
  { id: 4, label: "Mobility", icon: Accessibility },
] as const;

type FormData = {
  patientName: string;
  phone: string;
  email: string;
  pickupAddress: string;
  dropoffAddress: string;
  pickupDate: string;
  pickupTime: string;
  returnTrip: boolean;
  mobility: string;
  insurance: string;
  notes: string;
};

const INITIAL: FormData = {
  patientName: "",
  phone: "",
  email: "",
  pickupAddress: "",
  dropoffAddress: "",
  pickupDate: "",
  pickupTime: "",
  returnTrip: false,
  mobility: "",
  insurance: "",
  notes: "",
};

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (s === 1) {
      if (!form.patientName.trim()) newErrors.patientName = "Required";
      if (!form.phone.trim()) newErrors.phone = "Required";
    }
    if (s === 2) {
      if (!form.pickupAddress.trim()) newErrors.pickupAddress = "Required";
      if (!form.dropoffAddress.trim()) newErrors.dropoffAddress = "Required";
    }
    if (s === 3) {
      if (!form.pickupDate) newErrors.pickupDate = "Required";
      if (!form.pickupTime) newErrors.pickupTime = "Required";
    }
    if (s === 4) {
      if (!form.mobility) newErrors.mobility = "Please select mobility level";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-12 text-center"
      >
        <CheckCircle2 className="mx-auto h-16 w-16 text-teal-500" />
        <h3 className="mt-6 text-2xl font-bold text-navy-900">Request received!</h3>
        <p className="mt-3 text-muted">
          Our dispatch team will call you at <strong>{form.phone}</strong> within
          30 minutes to confirm your ride details.
        </p>
        <p className="mt-2 text-sm text-muted">
          Need it sooner? Call{" "}
          <a href={COMPANY.phoneHref} className="font-semibold text-teal-600">
            {COMPANY.phone}
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setForm(INITIAL);
          }}
          className="mt-8 text-sm font-semibold text-teal-600 hover:text-teal-500"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        {STEPS.map((s) => (
          <div key={s.id} className="flex flex-1 flex-col items-center">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition",
                step >= s.id
                  ? "bg-teal-500 text-white"
                  : "bg-surface text-muted ring-1 ring-border"
              )}
            >
              <s.icon className="h-4 w-4" />
            </div>
            <span
              className={cn(
                "mt-2 hidden text-xs font-medium sm:block",
                step >= s.id ? "text-teal-600" : "text-muted"
              )}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-navy-900">Patient information</h3>
              <Field
                label="Patient full name"
                value={form.patientName}
                onChange={(v) => update("patientName", v)}
                error={errors.patientName}
                required
              />
              <Field
                label="Contact phone"
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
                placeholder="(617) 555-0100"
                required
              />
              <Field
                label="Email (optional)"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                placeholder="for confirmation"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-navy-900">Trip details</h3>
              <Field
                label="Pickup address"
                value={form.pickupAddress}
                onChange={(v) => update("pickupAddress", v)}
                error={errors.pickupAddress}
                placeholder="Street, city, zip"
                required
              />
              <Field
                label="Destination address"
                value={form.dropoffAddress}
                onChange={(v) => update("dropoffAddress", v)}
                error={errors.dropoffAddress}
                placeholder="Hospital, clinic, or home"
                required
              />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-navy-900">Schedule</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Pickup date"
                  type="date"
                  value={form.pickupDate}
                  onChange={(v) => update("pickupDate", v)}
                  error={errors.pickupDate}
                  required
                />
                <Field
                  label="Pickup time"
                  type="time"
                  value={form.pickupTime}
                  onChange={(v) => update("pickupTime", v)}
                  error={errors.pickupTime}
                  required
                />
              </div>
              <label className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.returnTrip}
                  onChange={(e) => update("returnTrip", e.target.checked)}
                  className="h-4 w-4 rounded border-border text-teal-500 focus:ring-teal-500"
                />
                <span className="text-sm font-medium text-navy-800">
                  I need a return trip
                </span>
              </label>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-navy-900">Mobility &amp; insurance</h3>
              <div>
                <label className="mb-2 block text-sm font-medium text-navy-800">
                  Mobility level <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {MOBILITY_OPTIONS.map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition",
                        form.mobility === opt.value
                          ? "border-teal-500 bg-teal-500/5"
                          : "border-border hover:border-teal-500/50"
                      )}
                    >
                      <input
                        type="radio"
                        name="mobility"
                        value={opt.value}
                        checked={form.mobility === opt.value}
                        onChange={(e) => update("mobility", e.target.value)}
                        className="text-teal-500 focus:ring-teal-500"
                      />
                      <span className="text-sm text-navy-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.mobility && (
                  <p className="mt-1 text-xs text-red-500">{errors.mobility}</p>
                )}
              </div>
              <Field
                label="Insurance / MassHealth ID (optional)"
                value={form.insurance}
                onChange={(v) => update("insurance", v)}
                placeholder="We'll verify coverage when we call"
              />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-800">
                  Special instructions
                </label>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  placeholder="Oxygen, stairs, weight, language preference..."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={back}
              className="rounded-full px-6 py-2.5 text-sm font-semibold text-muted transition hover:text-navy-900"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <Send className="h-4 w-4" />
              Submit Request
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-xl border bg-surface px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-teal-500/20",
          error ? "border-red-400 focus:border-red-400" : "border-border focus:border-teal-500"
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
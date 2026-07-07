export type CoverageLevel = "high" | "medium" | "low";

export type TransportType =
  | "wheelchair"
  | "stretcher"
  | "ambulatory"
  | "dialysis";

export const TRANSPORT_OPTIONS: { value: TransportType; label: string }[] = [
  { value: "wheelchair", label: "Wheelchair Van" },
  { value: "stretcher", label: "Stretcher / Gurney" },
  { value: "ambulatory", label: "Ambulatory / Assisted" },
  { value: "dialysis", label: "Dialysis or Recurring Trips" },
];

export type InsuranceProvider = {
  id: string;
  name: string;
  coverage: CoverageLevel;
  message: string;
  action: string;
};

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  {
    id: "masshealth",
    name: "MassHealth (Medicaid)",
    coverage: "high",
    message:
      "MassHealth generally covers non-emergency medical transportation for eligible members (Standard, CommonHealth, CarePlus) when they cannot use public or private transportation.",
    action:
      "We are a licensed MassHealth provider. A PT-1 form from your doctor is often required. Call us to coordinate.",
  },
  {
    id: "medicare-original",
    name: "Medicare (Original)",
    coverage: "low",
    message:
      "Original Medicare has very limited coverage for routine NEMT. It may cover ambulance transport only if medically necessary with a doctor's order (e.g., certain dialysis cases).",
    action:
      "Routine wheelchair or stretcher transport is usually not covered. Check if you have a Medicare Advantage plan instead.",
  },
  {
    id: "medicare-advantage",
    name: "Medicare Advantage",
    coverage: "medium",
    message:
      "Many Medicare Advantage plans offer a limited number of NEMT rides per year as a supplemental benefit.",
    action:
      "Coverage varies by plan. We recommend calling your plan or McCall dispatch to check your specific benefits.",
  },
  {
    id: "bcbs",
    name: "Blue Cross Blue Shield of Massachusetts",
    coverage: "medium",
    message:
      "Non-emergent ambulance transport is covered only when strict medical necessity criteria are met. Routine NEMT coverage varies by plan.",
    action: "Prior authorization is often required. Contact us and we can help verify.",
  },
  {
    id: "tufts",
    name: "Tufts Health Plan / Harvard Pilgrim (Point32Health)",
    coverage: "medium",
    message:
      "Some plans (especially Tufts Health One Care) include transportation benefits. Coverage depends on your specific plan.",
    action: "We work with Point32Health plans. Call dispatch for assistance with verification.",
  },
  {
    id: "fallon",
    name: "Fallon Health",
    coverage: "medium",
    message:
      "Fallon covers non-emergency transportation when specific medical necessity criteria are met.",
    action: "We can help coordinate with Fallon Health plans.",
  },
  {
    id: "bmc",
    name: "BMC HealthNet Plan",
    coverage: "high",
    message:
      "BMC HealthNet generally follows MassHealth transportation benefits and has good coverage for NEMT.",
    action: "We work with BMC HealthNet. Contact us to arrange transport.",
  },
  {
    id: "other",
    name: "Other / Private Insurance",
    coverage: "low",
    message: "Coverage for NEMT under private insurance is highly variable and often limited.",
    action: "We offer competitive private pay rates. Call us for a quote.",
  },
];

const TRANSPORT_NOTES: Record<TransportType, string> = {
  wheelchair:
    "Wheelchair van transport is commonly covered when medically necessary and pre-authorized.",
  stretcher:
    "Stretcher transport typically requires documented medical necessity and prior authorization.",
  ambulatory:
    "Ambulatory rides may be covered when the patient cannot safely use other transportation.",
  dialysis:
    "Recurring dialysis transport is often eligible under Medicaid and some Medicare Advantage plans.",
};

export function getTransportNote(type: TransportType) {
  return TRANSPORT_NOTES[type];
}

export const COVERAGE_STYLES: Record<
  CoverageLevel,
  { box: string; badge: string; label: string }
> = {
  high: {
    box: "border-teal-200 bg-teal-50",
    badge: "bg-teal-100 text-teal-800",
    label: "Likely covered",
  },
  medium: {
    box: "border-amber-200 bg-amber-50",
    badge: "bg-amber-100 text-amber-900",
    label: "May be covered",
  },
  low: {
    box: "border-red-200 bg-red-50",
    badge: "bg-red-100 text-red-800",
    label: "Limited coverage",
  },
};
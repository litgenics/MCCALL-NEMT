export const COMPANY = {
  name: "McCall Ambulance Service",
  shortName: "McCall",
  tagline: "Compassionate non-emergency medical transport across Greater Boston",
  legalName: "McCall Transportation LLC",
  address: {
    street: "100 Gibson Street",
    neighborhood: "Fields Corner",
    city: "Dorchester",
    state: "MA",
    zip: "02122",
    full: "100 Gibson Street, Dorchester, MA 02122",
  },
  coordinates: {
    lat: 42.2986947,
    lng: -71.0558524,
  },
  phone: "(617) 825-6225",
  phoneHref: "tel:+16178256225",
  whatsapp: "https://wa.me/16178256225",
  whatsappLabel: "Chat on WhatsApp",
  email: "dispatch@mccalltrans.com",
  siteUrl: "https://mccalltrans.com",
  hours: "24/7 Dispatch — 365 Days a Year",
  facebook: "https://www.facebook.com/mccalltrans/",
  mapsUrl:
    "https://www.google.com/maps/place/McCall+Ambulance+Service/@42.2985883,-71.0556027,17z",
  established: "Serving Boston families for over a decade",
  logo: {
    full: "/images/mccall-logo.png",
    header: "/images/mccall-logo-header.png",
    footer: "/images/mccall-logo-footer.png",
    og: "/images/og-image.jpg",
  },
} as const;

export const SERVICES = [
  {
    id: "wheelchair",
    title: "Wheelchair Transport",
    description:
      "ADA-compliant wheelchair vans with secure tie-downs, hydraulic lifts, and trained attendants for safe door-to-door service.",
    icon: "wheelchair",
    features: ["Hydraulic lifts", "Bariatric capacity", "Two-person assist"],
  },
  {
    id: "stretcher",
    title: "Stretcher & Gurney",
    description:
      "Licensed ambulance stretcher transport for patients who cannot sit upright — hospital discharges, inter-facility transfers, and bed-confined rides.",
    icon: "stretcher",
    features: ["BLS-certified crews", "O₂ on board", "Hospital coordination"],
  },
  {
    id: "ambulatory",
    title: "Ambulatory Rides",
    description:
      "Assisted walking transport for patients who need a steady hand getting to appointments, therapy, or outpatient procedures.",
    icon: "ambulatory",
    features: ["Door-through-door", "Appointment wait", "Return trips"],
  },
  {
    id: "dialysis",
    title: "Dialysis & Recurring",
    description:
      "Reliable recurring transport for dialysis, chemotherapy, and physical therapy — same driver familiarity, on-time every session.",
    icon: "dialysis",
    features: ["Standing orders", "Insurance billing", "SMS reminders"],
  },
  {
    id: "discharge",
    title: "Hospital Discharge",
    description:
      "Coordinated pickup from Boston-area hospitals and skilled nursing facilities with real-time ETA updates for care teams.",
    icon: "discharge",
    features: ["Facility partnerships", "Discharge paperwork", "Family notifications"],
  },
  {
    id: "specialty",
    title: "Specialty & Events",
    description:
      "Bariatric transport, pediatric medical rides, and coordinated multi-passenger moves for care facilities and group homes.",
    icon: "specialty",
    features: ["Custom equipment", "Care plan review", "Facility contracts"],
  },
] as const;

export const STATS = [
  { value: "24/7", label: "Dispatch availability" },
  { value: "15 min", label: "Average response time" },
  { value: "50+", label: "Boston-area facilities served" },
  { value: "4.8★", label: "Patient satisfaction" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Request a ride",
    description:
      "Call dispatch, submit our online form, or have your care coordinator book on your behalf. Same-day and advance scheduling available.",
  },
  {
    step: 2,
    title: "We confirm details",
    description:
      "Our team verifies pickup location, mobility needs, insurance or MassHealth coverage, and any special equipment requirements.",
  },
  {
    step: 3,
    title: "Safe transport",
    description:
      "A certified EMT or trained attendant arrives on time, assists door-to-door, and ensures a comfortable ride to your destination.",
  },
  {
    step: 4,
    title: "Return & follow-up",
    description:
      "Need a return trip? We schedule it before you leave. Recurring patients get priority booking and familiar faces every visit.",
  },
] as const;

export const SERVICE_AREAS = [
  "Dorchester",
  "Roxbury",
  "Mattapan",
  "South Boston",
  "Jamaica Plain",
  "Hyde Park",
  "Roslindale",
  "Downtown Boston",
  "Cambridge",
  "Somerville",
  "Brookline",
  "Quincy",
  "Chelsea",
  "Everett",
  "Revere",
  "Lynn",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They've been taking my mother to dialysis three times a week for two years. Always on time, always gentle with her. We trust McCall completely.",
    author: "Maria Rodriguez",
    relation: "Family caregiver, Dorchester",
    rating: 5,
    initials: "MR",
    facility: "DaVita Dialysis — Fields Corner",
  },
  {
    quote:
      "As a discharge planner, I need reliable NEMT partners. McCall's communication is excellent — ETAs, confirmations, and billing are seamless.",
    author: "James Thompson",
    relation: "Discharge Coordinator, Boston Medical Center",
    rating: 5,
    initials: "JT",
    facility: "Boston Medical Center",
  },
  {
    quote:
      "After my hip surgery I needed stretcher transport home. The crew was professional, the ride was smooth, and they handled insurance without hassle.",
    author: "Robert Kim",
    relation: "Patient, South Boston",
    rating: 5,
    initials: "RK",
    facility: "Stretcher discharge transport",
  },
] as const;

export const FAQS = [
  {
    question: "What is non-emergency medical transport (NEMT)?",
    answer:
      "NEMT provides safe transportation for patients who need medical assistance getting to appointments, dialysis, therapy, or home from a facility — but do not require emergency ambulance services. McCall is a licensed Massachusetts ambulance provider specializing in scheduled and non-urgent medical rides.",
  },
  {
    question: "Does insurance cover my ride?",
    answer:
      "Many rides are covered by MassHealth (Medicaid), Medicare Advantage plans, and private insurers when medically necessary. Our dispatch team verifies your coverage before your trip and handles billing directly with your plan whenever possible.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 24 hours ahead for routine appointments. Same-day requests are accommodated based on fleet availability — call dispatch for urgent non-emergency needs. Recurring dialysis and therapy rides can be set up as standing orders.",
  },
  {
    question: "What mobility levels do you accommodate?",
    answer:
      "We transport ambulatory patients, wheelchair users (manual and power chairs), stretcher/gurney patients, and bariatric individuals. Let us know your mobility needs when booking so we dispatch the right vehicle and crew.",
  },
  {
    question: "Do you provide return trips?",
    answer:
      "Yes. Return trips can be scheduled at the time of booking or confirmed by calling dispatch when your appointment ends. For recurring treatments like dialysis, we set up round-trip schedules in advance.",
  },
  {
    question: "Is this for emergencies?",
    answer:
      "No — for life-threatening emergencies, always call 911. McCall provides non-emergency medical transportation. If you're unsure, our dispatch team can help determine the right level of care.",
  },
] as const;

export const TRUST_BADGES = [
  "Massachusetts Licensed Ambulance Service",
  "EMT-Certified Crews",
  "HIPAA Compliant",
  "ADA Accessible Fleet",
  "MassHealth Approved Provider",
] as const;

export const FLEET = [
  {
    name: "Wheelchair Van",
    capacity: "1 wheelchair + 1 attendant",
    features: ["Hydraulic lift", "ADA tie-downs", "Climate controlled"],
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80",
  },
  {
    name: "BLS Ambulance",
    capacity: "1 stretcher + 2 crew",
    features: ["Full medical equipment", "O₂ delivery", "Cardiac monitor ready"],
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8f0?w=800&q=80",
  },
  {
    name: "Bariatric Unit",
    capacity: "Up to 650 lb capacity",
    features: ["Wider stretcher", "Reinforced lift", "Two-person crew"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
] as const;

export const INSURANCE_PLANS = [
  "MassHealth (Medicaid)",
  "Medicare Advantage",
  "Tufts Health Plan",
  "Blue Cross Blue Shield",
  "Harvard Pilgrim",
  "Boston Medical Center HealthNet",
  "Facility Direct Billing",
  "Private Pay",
] as const;

export const FACILITY_BENEFITS = [
  {
    title: "Dedicated dispatch line",
    description:
      "Care coordinators get a direct line to our dispatch team — no hold music, no call centers overseas.",
  },
  {
    title: "Real-time ETAs",
    description:
      "Live vehicle tracking and SMS updates so discharge planners and families know exactly when to expect arrival.",
  },
  {
    title: "Streamlined billing",
    description:
      "We handle prior authorizations, MassHealth verification, and facility invoicing so your staff stays focused on patients.",
  },
  {
    title: "Standing orders",
    description:
      "Set up recurring transport for dialysis, wound care, and outpatient programs — one setup, reliable rides every week.",
  },
] as const;

export const ABOUT_STORY = {
  headline: "Rooted in Dorchester, trusted across Boston",
  paragraphs: [
    "McCall Ambulance Service was built on a simple belief: every patient deserves dignified, reliable transportation — whether they're heading to dialysis for the hundredth time or coming home from surgery.",
    "From our headquarters on Gibson Street in Fields Corner, we've grown into one of Greater Boston's most dependable NEMT providers. Our crews live in the communities we serve. They know the hospitals, the back roads, and the families who count on us.",
    "We're not a national franchise or a ride-share app with a medical sticker. We're your neighbors — licensed, insured, and committed to showing up on time, every time.",
  ],
  values: [
    { title: "Dignity", description: "Every patient treated with respect, regardless of mobility or circumstance." },
    { title: "Reliability", description: "On-time performance isn't a metric — it's a promise to families and care teams." },
    { title: "Community", description: "We hire locally, serve locally, and invest in the neighborhoods we call home." },
    { title: "Safety", description: "EMT-certified crews, maintained fleet, and rigorous patient handling protocols." },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/areas/dorchester", label: "Areas" },
  { href: "/resources/what-is-nemt", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_ANCHORS = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
] as const;
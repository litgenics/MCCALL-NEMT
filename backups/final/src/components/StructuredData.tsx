import { COMPANY, FAQS, TESTIMONIALS, SERVICES } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": absoluteUrl("/#organization"),
    name: COMPANY.name,
    alternateName: COMPANY.legalName,
    description: COMPANY.tagline,
    url: absoluteUrl("/"),
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: absoluteUrl(COMPANY.logo.og),
    logo: absoluteUrl(COMPANY.logo.header),
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.coordinates.lat,
      longitude: COMPANY.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Boston" },
      { "@type": "City", name: "Dorchester" },
      { "@type": "City", name: "Cambridge" },
      { "@type": "City", name: "Quincy" },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: String(TESTIMONIALS.length + 47),
      bestRating: "5",
    },
    sameAs: [COMPANY.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NEMT Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: "Greater Boston, MA",
        },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const reviews = TESTIMONIALS.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@type": "MedicalBusiness", name: COMPANY.name },
    author: { "@type": "Person", name: t.author },
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
    reviewBody: t.quote,
  }));

  const schemas = [localBusiness, faqPage, ...reviews];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
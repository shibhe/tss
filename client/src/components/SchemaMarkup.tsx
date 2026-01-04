import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tivane Software Solutions",
    url: "https://tivaness.co.za",
    logo: "https://tivaness.co.za/logo.png",
    description:
      "Transform your business with custom software development, API management, system integration, and AI automation services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 Silwer-Eike, Heuweloord",
      addressLocality: "Centurion",
      addressRegion: "Gauteng",
      addressCountry: "ZA"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-68-649-4265",
      contactType: "Customer Service",
      availableLanguage: ["English"]
    },
    email: "info@tivaness.co.za",
    foundingDate: "2023",
    areaServed: "ZA",
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// export function ServiceSchema({ services }) {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     itemListElement: services.map((service, index) => ({
//       "@type": "ListItem",
//       position: index + 1,
//       item: {
//         "@type": "Service",
//         name: service.title,
//         description: service.description,
//         provider: {
//           "@type": "Organization",
//           name: "Tivane Software Solutions"
//         }
//       }
//     }))
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   );
// }

// export function ReviewSchema({ testimonials }) {
//   const aggregateRating = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: "Tivane Software Solutions",
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "5",
//       reviewCount: testimonials.length,
//       bestRating: "5",
//       worstRating: "1"
//     },
//     review: testimonials.map((testimonial) => ({
//       "@type": "Review",
//       author: {
//         "@type": "Person",
//         name: testimonial.name
//       },
//       reviewRating: {
//         "@type": "Rating",
//         ratingValue: testimonial.rating,
//         bestRating: "5"
//       },
//       reviewBody: testimonial.text,
//       publisher: {
//         "@type": "Organization",
//         name: testimonial.company
//       }
//     }))
//   };

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
//     />
//   );
// }

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tivane Software Solutions",
    image: "https://tivaness.co.za/logo.png",
    "@id": "https://tivaness.co.za",
    url: "https://tivaness.co.za",
    telephone: "+27-68-649-4265",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 Silwer-Eike, Heuweloord",
      addressLocality: "Centurion",
      postalCode: "0157",
      addressCountry: "ZA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.8545,
      longitude: 28.2045
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00"
    },
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

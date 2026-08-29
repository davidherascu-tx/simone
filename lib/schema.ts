/**
 * Strukturierte Daten (JSON-LD) für Suchmaschinen.
 *
 * Alle Werte stammen aus `site` bzw. den Inhaltsdateien – es gibt hier keine
 * zweite Wahrheit, die auseinanderlaufen könnte. Prüfen lässt sich das Ergebnis
 * mit dem Rich Results Test von Google bzw. validator.schema.org.
 */
import { site } from "./site";

/** Feste IDs, damit die Entitäten aufeinander verweisen können. */
const businessId = `${site.url}/#einrichtungshaus`;
const websiteId = `${site.url}/#website`;

/** Das Unternehmen selbst – die wichtigste Entität für die lokale Suche. */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": businessId,
  name: site.name,
  alternateName: site.shortName,
  description: site.description,
  slogan: site.tagline,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  telephone: site.contact.phone,
  email: site.contact.email,
  foundingDate: String(site.foundedYear),
  vatID: site.legal.vatId,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.street,
    postalCode: site.contact.zip,
    addressLocality: site.contact.city,
    addressCountry: "DE",
  },
  founder: {
    "@type": "Person",
    name: site.contact.person,
    jobTitle: site.contact.role,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Berlin" },
    { "@type": "AdministrativeArea", name: "Brandenburg" },
  ],
  knowsAbout: [
    "Büroeinrichtung",
    "Objekteinrichtung",
    "Büroplanung",
    "Raumplanung",
    "Büromöbel",
    "Umzugsplanung",
    "Möbelleasing",
  ],
};

/** Die Website als Entität, verknüpft mit dem Unternehmen. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  inLanguage: "de-DE",
  publisher: { "@id": businessId },
};

/** Eine einzelne Leistung, angeboten vom Unternehmen. */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    provider: { "@id": businessId },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Berlin" },
      { "@type": "AdministrativeArea", name: "Brandenburg" },
    ],
  };
}

/** Brotkrumen-Navigation – hilft Google beim Aufbau der Suchergebnis-Pfade. */
export function breadcrumbSchema(crumbs: { href: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };
}

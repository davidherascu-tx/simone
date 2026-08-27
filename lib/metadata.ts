import type { Metadata } from "next";
import { site } from "./site";

/**
 * Baut die Metadaten einer Seite.
 *
 * Wichtig: Sobald eine Seite ein eigenes `openGraph`-Objekt setzt, ersetzt es
 * das des Root-Layouts vollständig – die gemeinsamen Felder werden deshalb hier
 * an einer Stelle gepflegt.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  /** Ohne Angabe greift der Standardtitel aus dem Root-Layout. */
  title?: string;
  description: string;
  /** Pfad mit führendem Slash, z. B. "/leistungen". */
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const socialTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} – ${site.tagline}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: site.name,
      url: `${site.url}${path === "/" ? "" : path}`,
      title: socialTitle,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

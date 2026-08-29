import type { MetadataRoute } from "next";
import { leistungen } from "@/lib/leistungen";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bewusst ein fester Wert statt `new Date()`: Sonst meldet jeder Deploy
  // sämtliche Seiten als geändert, und die Angabe verliert für Suchmaschinen
  // ihren Wert. Bei inhaltlichen Änderungen `contentUpdated` in site.ts pflegen.
  const lastModified = new Date(site.contentUpdated);

  const statisch: MetadataRoute.Sitemap = [
    { url: site.url, priority: 1, changeFrequency: "monthly" },
    {
      url: `${site.url}/leistungen`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${site.url}/hersteller`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${site.url}/referenzen`,
      priority: 0.7,
      changeFrequency: "yearly",
    },
    { url: `${site.url}/kontakt`, priority: 0.9, changeFrequency: "yearly" },
  ];

  const leistungsseiten: MetadataRoute.Sitemap = leistungen.map((leistung) => ({
    url: `${site.url}/leistungen/${leistung.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...statisch, ...leistungsseiten].map((eintrag) => ({
    ...eintrag,
    lastModified,
  }));
}

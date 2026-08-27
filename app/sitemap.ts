import type { MetadataRoute } from "next";
import { leistungen } from "@/lib/leistungen";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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

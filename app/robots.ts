import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Bewusst kein `disallow` für /impressum und /datenschutz: Beide Seiten
      // tragen bereits ein `noindex`. Wer sie zusätzlich für Crawler sperrt,
      // verhindert genau das – Google kann die Seite dann nicht lesen, sieht
      // das `noindex` nie und nimmt sie bei externen Verlinkungen trotzdem in
      // den Index auf. In der Search Console erscheint das als Warnung
      // „Indexiert, obwohl durch robots.txt blockiert“.
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Vorschaubild für WhatsApp, LinkedIn, Facebook & Co.
 *
 * Wird zur Bauzeit einmal erzeugt und danach statisch ausgeliefert. Bewusst
 * ohne Foto: Text bleibt in jeder Vorschaugröße lesbar, und es entsteht keine
 * Abhängigkeit zu einer Bilddatei, die sich später ändern könnte.
 */
export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#003c58",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8fc4de",
          }}
        >
          Büro- und Objekteinrichtung
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Innovative Büroeinrichtung.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#8fc4de",
            }}
          >
            Individuelle Planung.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(255,255,255,0.22)",
            paddingTop: "32px",
            fontSize: 30,
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex" }}>{site.name}</div>
          <div style={{ display: "flex", color: "#8fc4de" }}>
            {site.contact.city} · Berlin · Brandenburg
          </div>
        </div>
      </div>
    ),
    size,
  );
}

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { Eyebrow } from "@/components/ui";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { href: string; label: string };

const tones = {
  light: {
    wrapper: "border-b border-line bg-surface",
    crumb: "text-muted hover:text-accent",
    slash: "text-line-strong",
    title: "text-ink",
    lead: "text-ink-soft",
  },
  sand: {
    wrapper: "border-b border-line bg-sand",
    crumb: "text-muted hover:text-accent",
    slash: "text-line-strong",
    title: "text-ink",
    lead: "text-ink-soft",
  },
  dark: {
    wrapper: "bg-accent-dark",
    crumb: "text-white/50 hover:text-white",
    slash: "text-white/25",
    title: "text-white",
    lead: "text-white/70",
  },
} as const;

/**
 * Kopfbereich einer Unterseite: Text links, optionales Bild rechts.
 * Ohne Bild läuft der Text über die volle Breite.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  imageFit = "cover",
  tone = "light",
  breadcrumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  tone?: keyof typeof tones;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  const hasImage = Boolean(image);
  const styles = tones[tone];
  const twoColumn = hasImage || Boolean(aside);

  return (
    <div className={styles.wrapper}>
      {breadcrumbs?.length ? (
        <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      ) : null}

      <div
        className={`mx-auto grid w-full max-w-[88rem] items-center gap-12 px-6 pt-14 pb-16 sm:px-8 lg:gap-16 lg:px-12 lg:pt-20 lg:pb-24 ${
          twoColumn ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : ""
        }`}
      >
        <div className={twoColumn ? "" : "max-w-3xl"}>
          {breadcrumbs?.length ? (
            <nav aria-label="Brotkrumennavigation" className="mb-8">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className={styles.slash}>
                        /
                      </span>
                    ) : null}
                    <Link
                      href={crumb.href}
                      className={`transition-colors ${styles.crumb}`}
                    >
                      {crumb.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? (
            <Eyebrow tone={tone === "dark" ? "light" : "accent"}>
              {eyebrow}
            </Eyebrow>
          ) : null}

          <h1
            className={`mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem] ${styles.title}`}
          >
            {title}
          </h1>

          {lead ? (
            <div
              className={`mt-7 max-w-2xl text-lg leading-relaxed ${styles.lead}`}
            >
              {lead}
            </div>
          ) : null}

          {children ? <div className="mt-10">{children}</div> : null}
        </div>

        {hasImage ? (
          <div
            className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-media lg:aspect-[5/4] ${
              imageFit === "contain" ? "border border-line bg-white p-4" : "bg-sand"
            }`}
          >
            <Image
              src={image as string}
              alt={imageAlt ?? ""}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={
                imageFit === "contain" ? "object-contain" : "object-cover"
              }
            />
          </div>
        ) : null}

        {!hasImage && aside ? <div>{aside}</div> : null}
      </div>
    </div>
  );
}

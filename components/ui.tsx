import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Layout                                                             */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}) {
  const max =
    width === "narrow"
      ? "max-w-3xl"
      : width === "wide"
        ? "max-w-[88rem]"
        : "max-w-6xl";

  return (
    <div className={`mx-auto w-full ${max} px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Typografie                                                         */
/* ------------------------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "accent",
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "muted" | "light";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-white/60"
      : tone === "muted"
        ? "text-muted"
        : "text-accent";

  return (
    <p
      className={`text-[0.7rem] font-medium tracking-[0.22em] uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow tone={isLight ? "light" : "accent"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={`mt-5 text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <div
          className={`mt-6 text-lg leading-relaxed ${
            isLight ? "text-white/70" : "text-ink-soft"
          }`}
        >
          {lead}
        </div>
      ) : null}
    </div>
  );
}

/** Dünne Trennlinie im Stil einer Zeichnungsvorlage. */
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

/* ------------------------------------------------------------------ */
/*  Buttons & Links                                                    */
/* ------------------------------------------------------------------ */

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200";

const buttonVariants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink hover:bg-white/85",
  outlineLight:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Textlink mit Pfeil, der beim Hover nach rechts wandert. */
export function ArrowLink({
  href,
  children,
  tone = "accent",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "light" | "ink";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-white hover:text-white"
      : tone === "ink"
        ? "text-ink hover:text-accent"
        : "text-accent hover:text-accent-dark";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors ${color} ${className}`}
    >
      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-current">
        {children}
      </span>
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 8h13M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.5 8.5 6 12l7.5-8"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="square"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Listen                                                             */
/* ------------------------------------------------------------------ */

/** Aufzählung mit Häkchen – für Vorteile und Leistungsumfänge. */
export function CheckList({
  items,
  className = "",
  columns = 1,
}: {
  items: string[];
  className?: string;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`grid gap-x-10 gap-y-4 ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-3.5 text-ink-soft">
          <Check className="mt-1.5 h-3.5 w-3.5 shrink-0 text-accent" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

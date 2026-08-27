import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  ArrowLink,
  ArrowRight,
  CheckList,
  Container,
  Section,
} from "@/components/ui";
import {
  leistungBySlug,
  leistungen,
  type Leistung,
  type LeistungBlock,
} from "@/lib/leistungen";
import { buildMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return leistungen.map((leistung) => ({ slug: leistung.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const leistung = leistungBySlug(slug);

  if (!leistung) return {};

  return buildMetadata({
    title: leistung.title,
    description: leistung.teaser,
    path: `/leistungen/${leistung.slug}`,
    image: leistung.image,
  });
}

function Block({ block }: { block: LeistungBlock }) {
  if (block.kind === "text") {
    return (
      <div>
        {block.title ? (
          <h2 className="mb-5 text-2xl font-semibold text-ink">
            {block.title}
          </h2>
        ) : null}
        <div className="space-y-5">
          {block.items.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "list") {
    return (
      <div>
        {block.title ? (
          <h2 className="mb-6 text-2xl font-semibold text-ink">
            {block.title}
          </h2>
        ) : null}
        {block.intro ? (
          <p className="mb-6 leading-relaxed text-ink-soft">{block.intro}</p>
        ) : null}
        <CheckList items={block.items} />
        {block.outro ? (
          <p className="mt-6 leading-relaxed text-ink-soft">{block.outro}</p>
        ) : null}
      </div>
    );
  }

  return (
    <aside className="rounded-xl border-l-2 border-accent bg-accent-soft p-7 lg:p-9">
      <h2 className="text-lg font-semibold text-ink">{block.title}</h2>
      <div className="mt-4 space-y-4">
        {block.items.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-ink-soft">
            {paragraph}
          </p>
        ))}
      </div>
      {block.link ? (
        <div className="mt-6">
          <ArrowLink href={block.link.href}>{block.link.label}</ArrowLink>
        </div>
      ) : null}
    </aside>
  );
}

function SiblingLink({
  leistung,
  direction,
}: {
  leistung: Leistung;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/leistungen/${leistung.slug}`}
      className={`group flex flex-1 flex-col gap-2 rounded-xl border border-line bg-surface p-7 shadow-card transition-colors hover:border-accent ${
        isNext ? "sm:items-end sm:text-right" : ""
      }`}
    >
      <span className="text-[0.7rem] font-medium tracking-[0.22em] text-muted uppercase">
        {isNext ? "Nächste Leistung" : "Vorherige Leistung"}
      </span>
      <span className="flex items-center gap-3 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
        {!isNext ? (
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
        ) : null}
        {leistung.nav}
        {isNext ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        ) : null}
      </span>
    </Link>
  );
}

export default async function LeistungPage({ params }: Params) {
  const { slug } = await params;
  const leistung = leistungBySlug(slug);

  if (!leistung) notFound();

  const index = leistungen.findIndex((item) => item.slug === leistung.slug);
  const prev = index > 0 ? leistungen[index - 1] : undefined;
  const next =
    index < leistungen.length - 1 ? leistungen[index + 1] : undefined;

  return (
    <>
      <PageHero
        eyebrow={leistung.eyebrow}
        title={leistung.title}
        lead={leistung.teaser}
        image={leistung.image}
        imageAlt={leistung.imageAlt}
        imageFit={leistung.imageFit}
        breadcrumbs={[
          { href: "/", label: "Startseite" },
          { href: "/leistungen", label: "Leistungen" },
          { href: `/leistungen/${leistung.slug}`, label: leistung.nav },
        ]}
      />

      <Section>
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20">
            {/* Sprungnavigation innerhalb der Leistungen */}
            <nav aria-label="Weitere Leistungen" className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-[0.7rem] font-medium tracking-[0.22em] text-muted uppercase">
                Alle Leistungen
              </p>
              <ul className="mt-5 space-y-px">
                {leistungen.map((item) => {
                  const current = item.slug === leistung.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/leistungen/${item.slug}`}
                        aria-current={current ? "page" : undefined}
                        className={`block border-l-2 py-2.5 pl-4 text-sm transition-colors ${
                          current
                            ? "border-accent font-medium text-accent"
                            : "border-line text-ink-soft hover:border-line-strong hover:text-ink"
                        }`}
                      >
                        {item.nav}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="max-w-3xl space-y-14">
              {leistung.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
          </div>

          {(prev || next) && (
            <div className="mt-20 flex flex-col gap-4 border-t border-line pt-14 sm:flex-row">
              {prev ? <SiblingLink leistung={prev} direction="prev" /> : null}
              {next ? <SiblingLink leistung={next} direction="next" /> : null}
            </div>
          )}
        </Container>
      </Section>

      <CtaBand
        headline={leistung.cta.headline}
        label={leistung.cta.label}
        href={`/kontakt?thema=${leistung.slug}`}
      />
    </>
  );
}

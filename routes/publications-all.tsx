import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import bgPublications from "@/assets/bg-publications.jpg";
import { publications, publicationTopics } from "@/lib/lab-data";

export const Route = createFileRoute("/publications/all")({
  head: () => ({
    meta: [
      { title: "All Publications — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "The complete list of peer-reviewed publications from the DDOmics Lab, grouped by research theme.",
      },
      {
        property: "og:title",
        content: "All Publications — DDOmics Lab, NCCS Pune",
      },
      {
        property: "og:description",
        content: "Complete publication list from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: AllPublicationsPage,
});

function AllPublicationsPage() {
  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    [],
  );
  const [year, setYear] = useState<"all" | number>("all");

  const filtered = useMemo(
    () =>
      year === "all"
        ? publications
        : publications.filter((p) => p.year === year),
    [year],
  );

  return (
    <>
      <PageHero
        image={bgPublications}
        height="short"
        eyebrow="Publications / All"
        title={
          <>
            All <span className="silver-text">publications</span>
          </>
        }
        lede="The complete list, grouped by research theme. Each entry links out to the publisher via DOI."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="mb-12 flex flex-wrap items-end justify-end gap-4">
            <label className="flex items-center gap-3 text-sm">
              <span className="eyebrow text-muted-foreground">Year</span>
              <select
                value={String(year)}
                onChange={(e) =>
                  setYear(
                    e.target.value === "all" ? "all" : Number(e.target.value),
                  )
                }
                className="border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-primary focus:border-primary focus:outline-none"
              >
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </Reveal>

          {publicationTopics.map((topic) => {
            const items = filtered.filter((p) => p.topic === topic);
            if (items.length === 0) return null;
            return (
              <section key={topic} className="mb-16">
                <Reveal>
                  <h2 className="display-title text-2xl text-primary">
                    {topic}
                  </h2>
                </Reveal>
                <ul className="mt-6 divide-y divide-border border-t border-border">
                  {items.map((p, i) => (
                    <Reveal
                      as="li"
                      key={p.title}
                      delay={i * 50}
                      className="py-6"
                    >
                      <p className="leading-relaxed">
                        <span className="text-muted-foreground">
                          {p.authors}
                        </span>{" "}
                        ({p.year}).{" "}
                        <span className="font-medium">{p.title}</span>{" "}
                        <em className="text-muted-foreground">{p.venue}</em>.
                      </p>
                      {p.doi && (
                        <a
                          href={`https://doi.org/${p.doi}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block font-mono text-xs text-primary underline-offset-4 hover:underline"
                        >
                          https://doi.org/{p.doi}
                        </a>
                      )}
                    </Reveal>
                  ))}
                </ul>
              </section>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-muted-foreground">
              No publications listed for {String(year)}.
            </p>
          )}

          <Reveal delay={140} className="mt-8">
            <Link
              to="/publications"
              className="eyebrow sheen inline-block border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
            >
              ← Back to Publications
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

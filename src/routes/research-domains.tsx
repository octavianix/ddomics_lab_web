import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import bgResearch from "@/assets/bg-research.jpg";
import { researchTracks } from "@/lib/lab-data";

export const Route = createFileRoute("/research/domains")({
  head: () => ({
    meta: [
      { title: "Research Domains — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Five active research tracks: the Indian Human Microbiome Initiative, mother & infant microbiome, SARS-CoV-2 surveillance, gluten spectrum disorders and the gut–brain axis.",
      },
      {
        property: "og:title",
        content: "Research Domains — DDOmics Lab, NCCS Pune",
      },
      {
        property: "og:description",
        content:
          "Microbiome research tracks spanning population cohorts, early life, and disease.",
      },
    ],
  }),
  component: ResearchDomainsPage,
});

function ResearchDomainsPage() {
  return (
    <>
      <PageHero
        image={bgResearch}
        focal="left"
        height="short"
        eyebrow="Research / Domains"
        title={
          <>
            Mapping <span className="silver-text">microbial communities</span>{" "}
            across populations, life stages and disease
          </>
        }
        lede="Five tracks currently running in the lab, from population-scale cohorts to disease-focused multi-omics studies."
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {researchTracks.map((t, i) => (
          <Reveal
            as="section"
            key={t.code}
            className="grid grid-cols-1 gap-8 border-b border-border py-10 lg:grid-cols-12 lg:py-14"
          >
            <div className="lg:col-span-4">
              <div className="art-tile mb-6 aspect-[4/3] w-full overflow-hidden border border-border">
                <img
                  src={t.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")} / {t.code}
              </span>
              <h2
                id={t.code.replace(/[^a-z0-9]/gi, "").toLowerCase()}
                className="display-title mt-4 text-2xl lg:text-3xl"
              >
                {t.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="measure text-lg leading-relaxed">{t.summary}</p>

              {t.video && (
                <div className="mt-6 max-w-xl">
                  <YouTubeFacade
                    videoId={t.video.youtubeId}
                    title={t.video.title}
                  />
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-4">
                {t.externalLink && (
                  <a
                    href={t.externalLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow sheen border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {t.externalLink.label} ↗
                  </a>
                )}
                <Link
                  to="/research/$trackSlug"
                  params={{ trackSlug: t.slug }}
                  className="eyebrow sheen border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <Reveal>
          <Link
            to="/research"
            className="eyebrow sheen inline-block border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
          >
            ← Back to Research
          </Link>
        </Reveal>
      </div>
    </>
  );
}

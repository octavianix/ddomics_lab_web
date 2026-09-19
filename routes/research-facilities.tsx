import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import bgResearch from "@/assets/bg-research.jpg";
import { facilities } from "@/lib/lab-data";

export const Route = createFileRoute("/research/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Instruments and facilities in the DDOmics Lab: an anaerobic workstation for culturing and isolating gut anaerobes, and an in-house DNA sequencing facility spanning Sanger, Ion Torrent and Illumina platforms.",
      },
      { property: "og:title", content: "Facilities — DDOmics Lab, NCCS Pune" },
      {
        property: "og:description",
        content:
          "The instruments and facilities behind the lab's wet-lab and sequencing work.",
      },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <PageHero
        image={bgResearch}
        focal="left"
        height="short"
        eyebrow="Research / Facilities"
        title={
          <>
            Instruments <span className="silver-text">&amp; facilities</span>
          </>
        }
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                {f.images.length > 1 ? (
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {f.images.map((src) => (
                      <div
                        key={src}
                        className="art-tile aspect-[4/3] w-full overflow-hidden border border-border"
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="art-tile mb-6 aspect-[4/3] w-full overflow-hidden border border-border">
                    <img
                      src={f.images[0]}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <h2 className="display-title text-xl lg:text-2xl">
                  {f.title}
                </h2>
                <p className="measure mt-3 leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
                {f.link && (
                  <a
                    href={f.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-blue-500 underline decoration-blue-500/40 underline-offset-4 transition-colors hover:text-blue-400"
                  >
                    Read more →
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-20">
            <Link
              to="/research"
              className="eyebrow sheen inline-block border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
            >
              ← Back to Research
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

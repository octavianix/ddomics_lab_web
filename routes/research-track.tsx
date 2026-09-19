import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { researchTracks } from "@/lib/lab-data";

export const Route = createFileRoute("/research/$trackSlug")({
  loader: ({ params }) => {
    const track = researchTracks.find((t) => t.slug === params.trackSlug);
    if (!track) throw notFound();
    return track;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — DDOmics Lab, NCCS Pune`
          : "Research — DDOmics Lab",
      },
      {
        name: "description",
        content:
          loaderData?.summary ?? "A research track at DDOmics Lab, NCCS Pune.",
      },
    ],
  }),
  component: ResearchTrackPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow mb-4 text-muted-foreground">Not found</p>
      <h1 className="display-title text-3xl">
        This research track isn't listed
      </h1>
      <Link
        to="/research"
        className="eyebrow sheen mt-8 inline-block border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Back to Research
      </Link>
    </div>
  ),
});

function ResearchTrackPage() {
  const track = Route.useLoaderData();

  return (
    <>
      <PageHero
        image={track.image}
        focal="left"
        height="short"
        eyebrow={`Research / ${track.code}`}
        title={track.title}
        lede={track.summary}
      />

      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="measure leading-relaxed whitespace-pre-line text-muted-foreground">
            {track.detail}
          </p>
        </Reveal>

        {track.video && (
          <Reveal className="mt-14">
            <h2 className="display-title mb-6 text-2xl">Watch</h2>
            <YouTubeFacade
              videoId={track.video.youtubeId}
              title={track.video.title}
            />
          </Reveal>
        )}

        {track.externalLink && (
          <Reveal delay={80} className="mt-10">
            <a
              href={track.externalLink.href}
              target="_blank"
              rel="noreferrer"
              className="eyebrow sheen inline-block border border-primary px-6 py-3 tracking-[0.12em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {track.externalLink.label} ↗
            </a>
          </Reveal>
        )}

        <Reveal delay={140} className="mt-14">
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

import { Link } from "@tanstack/react-router";
import { researchTracks } from "@/lib/lab-data";

/** Infinite sliding ribbon of research domains — full-bleed image on top,
 * title + a short summary line + a "Read More" button in a padded panel
 * below, each card linking straight to its dedicated research page. Mirrors
 * ImageMarquee's motion so it reads as the same pattern used for the
 * lab-life photo ribbon. Not capped at a fixed count — however many tracks
 * exist in researchTracks, they all appear here. */
export function DomainsMarquee() {
  const items = [...researchTracks, ...researchTracks];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="domains-marquee-track gap-[20px]">
        {items.map((t, i) => (
          <Link
            key={`${t.slug}-${i}`}
            to="/research/$trackSlug"
            params={{ trackSlug: t.slug }}
            className="lift-card sheen group flex h-[647.219px] w-[377.828px] shrink-0 flex-col overflow-hidden border border-border bg-card"
          >
            <div className="art-tile aspect-[3/2] w-full shrink-0 overflow-hidden">
              <img
                src={t.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="display-title text-xl leading-snug transition-colors group-hover:text-primary">
                {t.title}
              </h3>
              <p className="mt-4 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.summary}
              </p>
              <span className="eyebrow sheen mt-6 inline-block w-fit border border-ink bg-ink px-5 py-2.5 tracking-[0.1em] text-ink-foreground uppercase transition-colors group-hover:bg-primary group-hover:border-primary">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

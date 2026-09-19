import { useState } from "react";

/**
 * Lightweight click-to-play YouTube embed: shows the thumbnail + a play
 * button first (no iframe cost on page load), and only mounts the real
 * YouTube iframe once the visitor clicks, so it plays right there on the
 * page instead of sending them to YouTube.
 */
export function YouTubeFacade({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`art-tile relative aspect-video w-full overflow-hidden border border-border bg-ink ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group relative block h-full w-full"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 translate-x-0.5 fill-current"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

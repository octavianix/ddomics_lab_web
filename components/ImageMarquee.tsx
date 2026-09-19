import { galleryPhotos } from "@/lib/lab-data";

/** Infinite sliding ribbon of candid lab-life photos, mirroring the keyword Marquee. */
export function ImageMarquee() {
  const items = [...galleryPhotos, ...galleryPhotos];

  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-8">
      <div className="image-marquee-track gap-6">
        {items.map((src, i) => (
          <span
            key={`${src}-${i}`}
            className="lift-card sheen block h-56 w-80 shrink-0 overflow-hidden border border-silver/20 sm:h-64 sm:w-96"
          >
            <img
              src={src}
              alt="DDOmics Lab — team moments"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}

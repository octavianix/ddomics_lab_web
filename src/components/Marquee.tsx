import { marqueeWords } from "@/lib/lab-data";

/** Infinite metallic keyword ribbon. */
export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="relative overflow-hidden border-y border-border bg-ink py-5 text-ink-foreground">
      <div className="marquee-track gap-10">
        {items.map((w, i) => (
          <span key={`${w}-${i}`} className="flex shrink-0 items-center gap-10">
            <span className="display-title text-xl whitespace-nowrap opacity-70 sm:text-2xl">
              {w}
            </span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-primary"
            />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}

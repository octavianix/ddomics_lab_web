import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type Focal = "left" | "center" | "right";

export function PageHero({
  image,
  eyebrow,
  title,
  lede,
  children,
  focal = "center",
  align = "left",
  height = "tall",
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  focal?: Focal;
  align?: "left" | "center";
  height?: "tall" | "short";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        setOffset(Math.max(-60, Math.min(60, -rect.top * 0.12)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative -mt-24 flex min-h-[32vh] items-end overflow-hidden bg-deep text-deep-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 -bottom-16 bg-cover opacity-70 will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: `${focal} center`,
          transform: `translate3d(0, ${offset}px, 0) scale(1.04)`,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,var(--deep)_6%,color-mix(in_oklch,var(--deep)_72%,transparent)_48%,color-mix(in_oklch,var(--deep)_88%,transparent)_100%)]"
      />

      <div
        className={`relative mx-auto w-full max-w-7xl px-6 pt-44 pb-16 lg:px-10 lg:pt-52 lg:pb-24 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <Reveal>
          <p className="eyebrow mb-5 opacity-60">{eyebrow}</p>
          <h1
            className={`display-title text-4xl font-bold sm:text-5xl lg:text-[60.2048px] ${
              align === "center" ? "mx-auto max-w-4xl" : "max-w-4xl"
            }`}
          >
            {title}
          </h1>
          {lede && (
            <p
              className={`measure mt-8 leading-relaxed opacity-70 ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {lede}
            </p>
          )}
          {children}
        </Reveal>
        <span
          aria-hidden="true"
          className="mt-12 block h-px w-full bg-[linear-gradient(90deg,transparent,color-mix(in_oklch,var(--silver)_70%,transparent),transparent)]"
        />
      </div>
    </section>
  );
}

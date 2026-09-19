import { useEffect, useState } from "react";

/**
 * Floating "Explore" affordance shown on every page (mounted once in the
 * root layout). Many visitors don't realise the hero is followed by more
 * content, so this jumps straight past the fold to <main id="main-content">
 * instead of relying on them to discover it by scrolling.
 *
 * Hides itself once the visitor has scrolled past the first screen, since
 * at that point they've already found the content it points to.
 */
export function ExploreButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY < window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const main = document.getElementById("main-content");
    if (!main) return;
    // Skip past the current hero section to whatever follows it, so the
    // jump always lands on "more content" rather than back at the top.
    const heroHeight =
      (main.firstElementChild as HTMLElement | null)?.offsetHeight ?? 0;
    window.scrollTo({ top: heroHeight - 96, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Jump to main content"
      data-visible={visible}
      className="explore-button eyebrow sheen fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 border border-silver/50 bg-background/80 px-5 py-2.5 text-xs tracking-[0.14em] text-foreground uppercase backdrop-blur-md transition-all duration-500 hover:border-primary hover:text-primary data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-6 data-[visible=false]:opacity-0"
    >
      Explore
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 animate-bounce"
      >
        <path
          d="M12 4v14m0 0l-6-6m6 6l6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("ddomics-theme") as Theme | null;
    const initial: Theme =
      stored ??
      (document.documentElement.classList.contains("dark") ? "dark" : "light");
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("ddomics-theme", theme);
  }, [theme, mounted]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group relative h-9 w-16 shrink-0 rounded-full border border-silver/40 bg-card/60 transition-colors hover:border-silver ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute top-1 h-7 w-7 rounded-full bg-silver/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary"
        style={{ left: isDark ? "calc(100% - 2rem)" : "0.25rem" }}
      />
      <span className="pointer-events-none relative flex h-full w-full items-center justify-between px-[9px] text-foreground/70">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
}

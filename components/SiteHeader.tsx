import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { lab, navMenu, type NavMenuItem } from "@/lib/lab-data";
import { ThemeToggle } from "@/components/ThemeToggle";
import labLogo from "@/assets/lab-logo-mark.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 text-foreground backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-deep-foreground"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-24 items-center justify-between gap-6">
          {/* Logo slot — the lab logo is used only here, once, sitewide. */}
          <Link to="/" className="group flex items-center gap-3">
            <span
              data-logo-slot
              className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-silver/50 transition-all duration-500 group-hover:ring-primary"
            >
              <img
                src={labLogo}
                alt={`${lab.name} logo`}
                className="h-full w-full object-contain p-1"
              />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[11px] font-semibold tracking-[0.28em] opacity-60">
                THE
              </span>
              <span className="block font-display text-3xl font-bold tracking-tight text-current sm:text-4xl">
                {lab.name}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navMenu.map((item) => (
              <DesktopNavItem key={item.to} item={item} />
            ))}
            <Link
              to="/join"
              className="eyebrow sheen ml-4 border border-primary px-5 py-2 text-sm tracking-[0.1em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Join the Lab
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="flex w-8 flex-col gap-1.5"
            >
              <span
                className={`h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[1.5px] bg-current transition-all duration-300 ${
                  open
                    ? "-translate-y-[6.5px] w-full -rotate-45"
                    : "w-2/3 self-end"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="flex animate-fade-in flex-col gap-1 border-t border-border bg-background px-6 pb-6 lg:hidden">
          {navMenu.map((item) => (
            <div key={item.to} className="border-b border-border last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="nav-item block flex-1 py-3 text-foreground/85"
                >
                  {item.label}
                </Link>
                {item.menu && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={mobileSubmenu === item.label}
                    onClick={() =>
                      setMobileSubmenu((v) =>
                        v === item.label ? null : item.label,
                      )
                    }
                    className="p-3 text-foreground/60"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`h-4 w-4 fill-current transition-transform duration-300 ${
                        mobileSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M5 7l5 5 5-5H5z" />
                    </svg>
                  </button>
                )}
              </div>
              {item.menu && mobileSubmenu === item.label && (
                <div className="flex flex-col gap-1 pb-3 pl-4">
                  {item.menu.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      {...(sub.hash ? { hash: sub.hash } : {})}
                      onClick={() => {
                        setOpen(false);
                        setMobileSubmenu(null);
                      }}
                      className="nav-item py-2 text-sm text-foreground/70"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/join"
            onClick={() => setOpen(false)}
            className="nav-item block border-b border-border py-3 text-foreground/85 last:border-0"
          >
            Join the Lab
          </Link>
        </nav>
      )}
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavMenuItem }) {
  const [hovered, setHovered] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = () => {
    clearCloseTimer();
    setHovered(true);
  };

  // Small delay before closing so moving the mouse from the label down into
  // the dropdown doesn't accidentally close it.
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setHovered(false), 120);
  };

  useEffect(() => clearCloseTimer, []);

  if (!item.menu) {
    return (
      <Link
        to={item.to}
        activeOptions={{ exact: item.to === "/" }}
        className="link-underline nav-item px-0 py-[2.17px] opacity-80 transition-opacity hover:opacity-100 data-[status=active]:opacity-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocus={open}
      onBlur={scheduleClose}
    >
      <Link
        to={item.to}
        className="link-underline nav-item flex items-center gap-1.5 px-0 py-[2.17px] opacity-80 transition-opacity hover:opacity-100 data-[status=active]:opacity-100"
        aria-haspopup="true"
        aria-expanded={hovered}
      >
        {item.label}
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-3 w-3 fill-current transition-transform duration-300 ${
            hovered ? "rotate-180" : ""
          }`}
        >
          <path d="M5 7l5 5 5-5H5z" />
        </svg>
      </Link>

      <div
        className={`absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-3 transition-all duration-300 ease-out ${
          hovered
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="sheen border border-border bg-background/95 py-2 text-foreground shadow-xl backdrop-blur-md">
          {item.menu.map((sub) => (
            <Link
              key={sub.label}
              to={sub.to}
              {...(sub.hash ? { hash: sub.hash } : {})}
              onClick={() => setHovered(false)}
              className="nav-item block px-5 py-3 opacity-80 transition-all duration-200 hover:bg-primary/10 hover:pl-6 hover:opacity-100"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

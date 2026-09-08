import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/Logo";
import { IconArrow, IconClose } from "@/components/site/Icons";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const light = overHero && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,padding] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          light
            ? "border-b border-transparent bg-transparent py-5 text-ivory"
            : "border-b border-border/70 bg-ivory/95 py-3 text-charcoal backdrop-blur-sm",
        )}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
          <Logo tone={light ? "light" : "dark"} />

          <nav aria-label="Primary" className="hidden justify-center gap-9 lg:flex">
            {nav.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "label-xs link-underline py-1 opacity-80 transition-opacity duration-500 hover:opacity-100",
                    active && "link-underline-active opacity-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-4 sm:gap-6">
            <Link
              to="/book"
              className={cn(
                "hidden border px-6 py-3 label-xs transition-colors duration-500 sm:inline-flex",
                light
                  ? "border-ivory/50 text-ivory hover:bg-ivory hover:text-ink"
                  : "border-charcoal/40 text-charcoal hover:bg-ink hover:text-ivory",
              )}
            >
              Book Your Stay
            </Link>
            <span className="label-xs hidden opacity-70 sm:inline">EN</span>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-8 w-8 flex-col items-end justify-center gap-[6px]"
            >
              <span className="h-px w-7 bg-current" />
              <span className="h-px w-5 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink text-ivory transition-[opacity,visibility] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="mx-auto flex h-full max-w-[1600px] flex-col px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between">
            <Logo tone="light" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border border-ivory/25 transition-colors duration-500 hover:border-ivory"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          <nav aria-label="Full" className="flex flex-1 flex-col justify-center gap-1 sm:gap-2">
            {[...nav, { label: "Beach Club", to: "/beach-club" as const }].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-baseline gap-5 py-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="label-xs w-8 text-ivory/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="display-md text-ivory transition-colors duration-500 group-hover:text-champagne">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ivory/15 pt-6">
            <p className="label-xs text-ivory/50">
              {`Puerto Cabello · Venezuela`}
            </p>
            <Link to="/book" className="arrow-link text-ivory">
              Book Your Stay <IconArrow className="h-3 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { hotel } from "@/lib/content";

const columns = [
  {
    label: "The House",
    links: [
      { label: "The Hotel", to: "/the-hotel" as const },
      { label: "Rooms", to: "/rooms" as const },
      { label: "Restaurant", to: "/restaurant" as const },
    ],
  },
  {
    label: "Discover",
    links: [
      { label: "Experiences", to: "/experiences" as const },
      { label: "Beach Club", to: "/beach-club" as const },
      { label: "Gallery", to: "/gallery" as const },
    ],
  },
  {
    label: "Plan",
    links: [
      { label: "Book Your Stay", to: "/book" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bone">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.6fr))]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-7 label-xs text-muted-foreground">
              {hotel.city}
              <br />
              {hotel.country}
            </p>
            <p className="mt-7 font-display text-2xl leading-snug text-charcoal">
              {hotel.statement}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.label} aria-label={col.label}>
              <p className="label-xs text-muted-foreground">{col.label}</p>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="link-underline text-sm font-light text-charcoal">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-xs text-muted-foreground">
            © {new Date().getFullYear()} Casa Guipuzcoana · Hotel Boutique
          </p>
          <div className="flex flex-wrap items-center gap-7">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="label-xs link-underline text-charcoal"
            >
              Instagram
            </a>
            <span className="label-xs text-muted-foreground">EN / ES</span>
            <span className="label-xs text-muted-foreground">Privacy</span>
            <span className="label-xs text-muted-foreground">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

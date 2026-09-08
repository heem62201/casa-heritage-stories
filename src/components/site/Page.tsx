import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { IconArrow } from "@/components/site/Icons";
import type { Photo } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Page({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav overHero={overHero} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  photo: Photo;
}) {
  return (
    <section className="relative flex min-h-[76vh] items-end overflow-hidden bg-ink">
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/50" />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-40 sm:px-8 sm:pb-24">
        <Reveal>
          <p className="label-xs text-ivory/60">{eyebrow}</p>
          <h1 className="display-lg mt-6 max-w-4xl text-ivory">{title}</h1>
          {intro && <p className="body-lg mt-7 max-w-xl text-ivory/75">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("label-xs", light ? "text-ivory/55" : "text-muted-foreground")}>{eyebrow}</p>
      )}
      <h2 className={cn("display-md mt-5", light ? "text-ivory" : "text-charcoal")}>{title}</h2>
      {intro && (
        <p className={cn("body-lg mt-6", light ? "text-ivory/70" : "text-muted-foreground")}>{intro}</p>
      )}
    </Reveal>
  );
}

export function FinalCta({ photo }: { photo: Photo }) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img src={photo.src} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative mx-auto max-w-[1600px] px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <p className="label-xs text-ivory/55">Reservations</p>
          <h2 className="display-lg mx-auto mt-6 max-w-3xl text-ivory">
            Stay in the house that keeps the city's history.
          </h2>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-5">
            <Link to="/book" className="btn-solid">
              Book Your Stay
            </Link>
            <Link to="/contact" className="arrow-link text-ivory">
              Contact the hotel <IconArrow className="h-3 w-6" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

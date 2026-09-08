import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Page, SectionHeading, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { BookingBar } from "@/components/site/BookingBar";
import { VideoModal } from "@/components/site/VideoModal";
import { IconArrow, IconPlay, highlightIcons } from "@/components/site/Icons";
import { film, img } from "@/lib/media";
import { highlights, hotel, rooms } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Guipuzcoana — Boutique Hotel in Puerto Cabello" },
      {
        name: "description",
        content:
          "A five-star boutique hotel inside a historic colonial house in Puerto Cabello, Venezuela: rooms, restaurant, beach club and personalised service.",
      },
      { property: "og:title", content: "Casa Guipuzcoana — Boutique Hotel in Puerto Cabello" },
      {
        property: "og:description",
        content: "History, architecture and hospitality in the colonial quarter of Puerto Cabello.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Casa Guipuzcoana Hotel Boutique",
          description: hotel.story,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Puerto Cabello",
            addressCountry: "VE",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [filmOpen, setFilmOpen] = useState(false);

  return (
    <Page overHero>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-ink">
        <img
          src={img.towerNight.src}
          alt={img.towerNight.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />

        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-10 pt-36 sm:px-8 sm:pb-14">
          <Reveal className="max-w-3xl">
            <p className="label-xs text-ivory/60">
              {hotel.city} · {hotel.country}
            </p>
            <h1 className="display-xl mt-7 text-ivory">History Lives Here</h1>
            <p className="body-lg mt-7 max-w-lg text-ivory/75">{hotel.tagline}</p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <Link to="/book" className="btn-solid">
                Book Your Stay
              </Link>
              <button
                type="button"
                onClick={() => setFilmOpen(true)}
                className="group flex items-center gap-4 text-ivory"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/40 transition-colors duration-500 group-hover:border-ivory">
                  <IconPlay className="h-3.5 w-3.5 translate-x-[1px]" />
                </span>
                <span className="label-xs">Watch the film</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-14">
            <BookingBar />
          </Reveal>
        </div>
      </section>

      <VideoModal
        open={filmOpen}
        onClose={() => setFilmOpen(false)}
        src={film.aerial.src}
        poster={film.aerial.poster}
        caption="Casa Guipuzcoana — Puerto Cabello"
      />

      {/* Story */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal variant="mask" className="order-2 lg:order-1">
            <div className="media-zoom aspect-[4/5] w-full">
              <img src={img.courtyard.src} alt={img.courtyard.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The House"
              title="A colonial house, still keeping guests."
              intro={hotel.story}
            />
            <Reveal delay={120} className="mt-10">
              <Link to="/the-hotel" className="arrow-link text-charcoal">
                Discover the hotel <IconArrow className="h-3 w-6" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon];
            return (
              <Reveal
                key={h.title}
                delay={i * 70}
                className="flex flex-col items-start gap-6 bg-cream px-8 py-14"
              >
                <Icon className="h-9 w-9 text-cocoa" />
                <p className="font-display text-xl leading-snug text-charcoal">{h.title}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Rooms rail */}
      <section className="py-24 sm:py-36">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Accommodation" title="Rooms & Suites" className="max-w-xl" />
            <Reveal>
              <Link to="/rooms" className="arrow-link text-charcoal">
                All rooms <IconArrow className="h-3 w-6" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="rail mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8">
          {rooms.map((room, i) => (
            <Reveal
              key={room.slug}
              delay={i * 80}
              className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw]"
            >
              <Link to="/rooms" className="group block">
                <div className="media-zoom aspect-[3/4]">
                  <img src={room.photo.src} alt={room.photo.alt} className="h-full w-full object-cover" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-5">
                  <h3 className="font-display text-2xl text-charcoal">{room.name}</h3>
                  <span className="label-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm font-light text-muted-foreground">{room.descriptor}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Restaurant */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 py-24 sm:px-8 sm:py-36 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Dining"
              title="Restaurant at 1730"
              intro="Dinner served inside the house — beneath the beams, beside the colonnade, in rooms shaped by three centuries of Puerto Cabello."
            />
            <Reveal delay={120} className="mt-10">
              <Link to="/restaurant" className="arrow-link text-ivory">
                The restaurant <IconArrow className="h-3 w-6" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="mask">
            <div className="media-zoom aspect-[4/3]">
              <img
                src={img.corridorArt.src}
                alt={img.corridorArt.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beach club */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal variant="mask">
            <div className="media-zoom aspect-[4/5]">
              <img src={img.beachClub.src} alt={img.beachClub.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Beyond the house"
              title="The Beach Club"
              intro="An exclusive stretch of shade, water and quiet reserved for guests of the hotel."
            />
            <Reveal delay={120} className="mt-10">
              <Link to="/beach-club" className="arrow-link text-charcoal">
                Beach Club <IconArrow className="h-3 w-6" />
              </Link>
            </Reveal>
            <Reveal delay={200} className="mt-14">
              <div className="media-zoom aspect-[16/10]">
                <img
                  src={img.poolUmbrella.src}
                  alt={img.poolUmbrella.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-border bg-bone py-24 sm:py-36">
        <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="display-md text-charcoal">“{hotel.statement}”</p>
        </Reveal>
      </section>

      <FinalCta photo={img.facadePalm} />
    </Page>
  );
}

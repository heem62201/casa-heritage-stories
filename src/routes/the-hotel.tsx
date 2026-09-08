import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageHero, SectionHeading, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { VideoModal } from "@/components/site/VideoModal";
import { IconPlay, highlightIcons } from "@/components/site/Icons";
import { film, img } from "@/lib/media";
import { highlights, hotel } from "@/lib/content";

export const Route = createFileRoute("/the-hotel")({
  head: () => ({
    meta: [
      { title: "The Hotel — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Inside Casa Guipuzcoana: a historic colonial house in Puerto Cabello kept as an intimate five-star boutique hotel.",
      },
      { property: "og:title", content: "The Hotel — Casa Guipuzcoana" },
      {
        property: "og:description",
        content: "Heritage architecture, courtyards and personalised service in Puerto Cabello.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/the-hotel" },
    ],
    links: [{ rel: "canonical", href: "/the-hotel" }],
  }),
  component: TheHotel,
});

function TheHotel() {
  const [open, setOpen] = useState(false);

  return (
    <Page>
      <PageHero
        eyebrow="The Hotel"
        title="A house of columns, shade and quiet."
        intro={hotel.story}
        photo={img.courtyardWide}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <SectionHeading
            eyebrow="Heritage"
            title="Architecture kept, not imitated."
            intro="Colonnades, timber galleries, tiled floors and tall shuttered doors — the building's original character remains the centre of the guest experience."
          />
          <Reveal variant="mask">
            <div className="media-zoom aspect-[16/11]">
              <img src={img.corridorArt.src} alt={img.corridorArt.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[img.courtyard, img.doors, img.facadePalm].map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80}>
              <div className="media-zoom aspect-[3/4]">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Film band */}
      <section className="relative overflow-hidden bg-ink">
        <img src={img.aerial.src} alt={img.aerial.alt} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-40">
          <Reveal>
            <p className="label-xs text-ivory/55">Film</p>
            <h2 className="display-md mt-5 max-w-2xl text-ivory">See the house from the air.</h2>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group mt-10 inline-flex items-center gap-4 text-ivory"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/40 transition-colors duration-500 group-hover:border-ivory">
                <IconPlay className="h-4 w-4 translate-x-[1px]" />
              </span>
              <span className="label-xs">Play film</span>
            </button>
          </Reveal>
        </div>
      </section>

      <VideoModal open={open} onClose={() => setOpen(false)} src={film.aerial.src} poster={film.aerial.poster} />

      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[h.icon];
            return (
              <Reveal key={h.title} delay={i * 70} className="flex flex-col items-start gap-6 bg-cream px-8 py-14">
                <Icon className="h-9 w-9 text-cocoa" />
                <p className="font-display text-xl leading-snug text-charcoal">{h.title}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <FinalCta photo={img.towerNight} />
    </Page>
  );
}

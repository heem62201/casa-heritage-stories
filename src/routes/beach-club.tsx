import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageHero, SectionHeading, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { VideoModal } from "@/components/site/VideoModal";
import { IconPlay } from "@/components/site/Icons";
import { film, img } from "@/lib/media";

export const Route = createFileRoute("/beach-club")({
  head: () => ({
    meta: [
      { title: "Beach Club — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "The exclusive beach club and pool of Casa Guipuzcoana, reserved for guests of the hotel in Puerto Cabello.",
      },
      { property: "og:title", content: "Beach Club — Casa Guipuzcoana" },
      { property: "og:description", content: "Water, shade and quiet beyond the historic house." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/beach-club" },
    ],
    links: [{ rel: "canonical", href: "/beach-club" }],
  }),
  component: BeachClub,
});

function BeachClub() {
  const [open, setOpen] = useState(false);

  return (
    <Page>
      <PageHero
        eyebrow="Beach Club"
        title="Shade, salt and still water."
        intro="An exclusive escape reserved for guests of the house. Access and hours are arranged with the hotel."
        photo={img.beachClub}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="The pool"
            title="In-water loungers under a wide sky."
            intro="Between the house and the coast, the pool terrace is kept quiet — parasols, sculptural loungers and long afternoons."
          />
          <Reveal variant="mask">
            <div className="media-zoom aspect-[4/3]">
              <img src={img.poolLoungers.src} alt={img.poolLoungers.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {[img.poolUmbrella, img.beachClub].map((photo, i) => (
            <Reveal key={photo.src} delay={i * 90}>
              <div className="media-zoom aspect-[4/3]">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <img
          src={img.poolUmbrella.src}
          alt={img.poolUmbrella.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-40">
          <Reveal>
            <p className="label-xs text-ivory/55">Film</p>
            <h2 className="display-md mt-5 text-ivory">Water and light</h2>
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

      <VideoModal open={open} onClose={() => setOpen(false)} src={film.pool.src} poster={film.pool.poster} />

      <FinalCta photo={img.beachClub} />
    </Page>
  );
}

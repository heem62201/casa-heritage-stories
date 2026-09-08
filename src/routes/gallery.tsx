import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageHero, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { VideoModal } from "@/components/site/VideoModal";
import { IconPlay } from "@/components/site/Icons";
import { film, img } from "@/lib/media";
import { galleryImages } from "@/lib/content";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Photographs and films of Casa Guipuzcoana: the clock tower, courtyards, rooms, pool and beach club in Puerto Cabello.",
      },
      { property: "og:title", content: "Gallery — Casa Guipuzcoana" },
      { property: "og:description", content: "A visual record of the house and its surroundings." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const films = [film.rooms, film.aerial, film.pool, film.facade];

function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState<(typeof films)[number] | null>(null);

  return (
    <Page>
      <PageHero eyebrow="Gallery" title="The house, in pictures." photo={img.courtyard} />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {galleryImages.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 70} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="media-zoom block w-full text-left"
                aria-label={`Open image ${i + 1}: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full object-cover" />
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="display-md text-charcoal">Films</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {films.map((f, i) => (
              <Reveal key={f.src} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setPlaying(f)}
                  className="group relative block w-full text-left"
                  aria-label={`Play film: ${f.label}`}
                >
                  <div className="media-zoom aspect-[3/4]">
                    <img src={f.poster} alt="" className="h-full w-full object-cover" />
                  </div>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/60 bg-ink/30 text-ivory backdrop-blur-[2px] transition-colors duration-500 group-hover:border-ivory">
                      <IconPlay className="h-4 w-4 translate-x-[1px]" />
                    </span>
                  </span>
                  <span className="label-xs mt-5 block text-charcoal">{f.label}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox images={galleryImages} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
      <VideoModal
        open={playing !== null}
        onClose={() => setPlaying(null)}
        src={playing?.src ?? ""}
        poster={playing?.poster ?? ""}
        caption={playing?.label ?? ""}
      />

      <FinalCta photo={img.aerial} />
    </Page>
  );
}

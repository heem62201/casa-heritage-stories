import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { IconArrow } from "@/components/site/Icons";
import { img } from "@/lib/media";
import { rooms } from "@/lib/content";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Rooms and suites inside a historic colonial house in Puerto Cabello, each shaped by the architecture around it.",
      },
      { property: "og:title", content: "Rooms & Suites — Casa Guipuzcoana" },
      {
        property: "og:description",
        content: "Colonial rooms, courtyard views and suites at Casa Guipuzcoana.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

function Rooms() {
  return (
    <Page>
      <PageHero
        eyebrow="Accommodation"
        title="Rooms & Suites"
        intro="A small number of rooms within the house. Detailed rates and availability are confirmed directly with the hotel."
        photo={img.roomBed}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="space-y-24 sm:space-y-32">
          {rooms.map((room, i) => (
            <article
              key={room.slug}
              className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
            >
              <Reveal variant="mask" className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <div className="media-zoom aspect-[4/3]">
                  <img src={room.photo.src} alt={room.photo.alt} className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={100} className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <p className="label-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display-md mt-5 text-charcoal">{room.name}</h2>
                <p className="body-lg mt-5 text-muted-foreground">{room.descriptor}</p>
                <p className="mt-7 text-sm font-light text-muted-foreground">{room.note}</p>
                <div className="mt-9 flex flex-wrap items-center gap-7">
                  <Link to="/book" className="btn-dark">
                    Enquire to book
                  </Link>
                  <Link to="/contact" className="arrow-link text-charcoal">
                    Ask about this room <IconArrow className="h-3 w-6" />
                  </Link>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <FinalCta photo={img.robeDetail} />
    </Page>
  );
}

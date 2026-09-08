import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, SectionHeading, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { IconArrow } from "@/components/site/Icons";
import { img } from "@/lib/media";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant at 1730 — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Restaurant at 1730 — dining inside the historic rooms of Casa Guipuzcoana in Puerto Cabello, Venezuela.",
      },
      { property: "og:title", content: "Restaurant at 1730 — Casa Guipuzcoana" },
      { property: "og:description", content: "Dining within a colonial house in Puerto Cabello." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/restaurant" },
    ],
    links: [{ rel: "canonical", href: "/restaurant" }],
  }),
  component: Restaurant,
});

function Restaurant() {
  return (
    <Page>
      <PageHero
        eyebrow="Dining"
        title="Restaurant at 1730"
        intro="A dining room set within the house itself. Menus, hours and reservations are confirmed directly with the hotel."
        photo={img.courtyard}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="The room"
            title="Dinner beneath three centuries of beams."
            intro="Tables are set between the colonnade and the courtyard, where the light changes from late afternoon into evening."
          />
          <Reveal variant="mask">
            <div className="media-zoom aspect-[4/3]">
              <img src={img.corridorArt.src} alt={img.corridorArt.alt} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[img.courtyardWide, img.doors, img.robeDetail].map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80}>
              <div className="media-zoom aspect-[3/4]">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-border pt-10">
          <p className="body-lg max-w-2xl text-muted-foreground">
            Menus and opening hours are published by the hotel. To reserve a table, please contact
            the house directly.
          </p>
          <Link to="/contact" className="arrow-link mt-8 inline-flex text-charcoal">
            Reserve a table <IconArrow className="h-3 w-6" />
          </Link>
        </Reveal>
      </section>

      <FinalCta photo={img.courtyard} />
    </Page>
  );
}

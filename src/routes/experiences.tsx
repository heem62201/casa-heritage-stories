import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero, FinalCta } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { IconArrow } from "@/components/site/Icons";
import { img } from "@/lib/media";
import { experiences } from "@/lib/content";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "The historic house, the restaurant, the beach club and the colonial quarter of Puerto Cabello — experiences at Casa Guipuzcoana.",
      },
      { property: "og:title", content: "Experiences — Casa Guipuzcoana" },
      { property: "og:description", content: "What to see and do as a guest of the house." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <Page>
      <PageHero
        eyebrow="Experiences"
        title="The house, the water, the city."
        photo={img.aerial}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-x-6 gap-y-16 sm:grid-cols-2">
          {experiences.map((exp, i) => (
            <Reveal key={exp.slug} delay={(i % 2) * 90} className={i % 2 === 1 ? "sm:mt-20" : undefined}>
              <article>
                <div className="media-zoom aspect-[4/5]">
                  <img src={exp.photo.src} alt={exp.photo.alt} className="h-full w-full object-cover" />
                </div>
                <h2 className="display-md mt-8 text-charcoal">{exp.name}</h2>
                <p className="body-lg mt-4 max-w-md text-muted-foreground">{exp.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 border-t border-border pt-10">
          <Link to="/beach-club" className="arrow-link text-charcoal">
            Visit the Beach Club <IconArrow className="h-3 w-6" />
          </Link>
        </Reveal>
      </section>

      <FinalCta photo={img.poolUmbrella} />
    </Page>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { BookingBar, type BookingValues } from "@/components/site/BookingBar";
import { IconArrow } from "@/components/site/Icons";
import { img } from "@/lib/media";
import { hotel } from "@/lib/content";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Request dates at Casa Guipuzcoana Hotel Boutique in Puerto Cabello. Rates and availability are confirmed directly by the hotel.",
      },
      { property: "og:title", content: "Book Your Stay — Casa Guipuzcoana" },
      { property: "og:description", content: "Send your dates and the house will reply." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/book" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});

function Book() {
  const [request, setRequest] = useState<BookingValues | null>(null);

  return (
    <Page>
      <section className="relative min-h-screen overflow-hidden bg-ink">
        <img
          src={img.towerNight.src}
          alt={img.towerNight.alt}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-28 pt-40 sm:px-8 sm:pb-40 sm:pt-48">
          <Reveal>
            <p className="label-xs text-ivory/55">Reservations</p>
            <h1 className="display-lg mt-6 max-w-3xl text-ivory">Book Your Stay</h1>
            <p className="body-lg mt-7 max-w-xl text-ivory/75">
              Choose your dates and the hotel will confirm rooms, rates and availability directly.
              No availability is shown here until the booking system is connected.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-14">
            <BookingBar withRoom onSubmitted={setRequest} />
          </Reveal>

          {request && (
            <Reveal className="mt-12 border border-ivory/20 bg-ink/70 p-10 backdrop-blur-sm">
              <h2 className="display-md text-ivory">Your request</h2>
              <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Check in", request.checkIn || "—"],
                  ["Check out", request.checkOut || "—"],
                  ["Guests", request.guests],
                  ["Room", request.room ?? "Any room"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="label-xs text-ivory/50">{k}</dt>
                    <dd className="mt-2 font-display text-xl text-ivory">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-9 max-w-xl text-sm font-light leading-relaxed text-ivory/70">
                Send these dates to {hotel.name} and the house will reply with rooms and rates. Once
                a booking engine is connected, this request will pass straight through to it.
              </p>
              <a href="/contact" className="arrow-link mt-8 inline-flex text-ivory">
                Send this request <IconArrow className="h-3 w-6" />
              </a>
            </Reveal>
          )}
        </div>
      </section>
    </Page>
  );
}

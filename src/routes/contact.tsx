import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page, PageHero } from "@/components/site/Page";
import { Reveal } from "@/components/site/Reveal";
import { IconArrow } from "@/components/site/Icons";
import { img } from "@/lib/media";
import { hotel } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Casa Guipuzcoana" },
      {
        name: "description",
        content:
          "Contact Casa Guipuzcoana Hotel Boutique in Puerto Cabello, Venezuela, for reservations, dining and beach club enquiries.",
      },
      { property: "og:title", content: "Contact — Casa Guipuzcoana" },
      { property: "og:description", content: "Write to the house for reservations and enquiries." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Page>
      <PageHero
        eyebrow="Contact"
        title="Write to the house."
        intro="Send an enquiry and the hotel will reply with details, rates and availability."
        photo={img.doors}
      />

      <section className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-24">
          <Reveal>
            <p className="label-xs text-muted-foreground">The hotel</p>
            <p className="mt-6 font-display text-3xl leading-snug text-charcoal">
              {hotel.name}
              <br />
              <span className="text-taupe">{hotel.kind}</span>
            </p>
            <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
              {hotel.city}
              <br />
              {hotel.country}
            </p>
            <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
              Street address, telephone and email are supplied by the hotel and will appear here
              once confirmed.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="border border-border bg-cream p-10">
                <h2 className="display-md text-charcoal">Thank you.</h2>
                <p className="body-lg mt-5 text-muted-foreground">
                  Your enquiry has been prepared. Once the hotel's inbox is connected, messages sent
                  from this form will arrive there directly.
                </p>
                <button type="button" onClick={() => setSent(false)} className="arrow-link mt-8 text-charcoal">
                  Send another <IconArrow className="h-3 w-6" />
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
                <Field label="First name" name="firstName" />
                <Field label="Last name" name="lastName" />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Telephone" name="phone" type="tel" required={false} className="sm:col-span-2" />
                <label className="sm:col-span-2 block">
                  <span className="label-xs text-muted-foreground">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-3 w-full border-b border-border bg-transparent pb-3 font-light text-charcoal outline-none transition-colors duration-500 focus:border-cocoa"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-dark">
                    Send enquiry
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Page>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string | undefined;
}) {
  return (
    <label className={className}>
      <span className="label-xs text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-light text-charcoal outline-none transition-colors duration-500 focus:border-cocoa"
      />
    </label>
  );
}

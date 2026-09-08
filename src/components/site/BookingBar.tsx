import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { IconArrow } from "@/components/site/Icons";
import { cn } from "@/lib/utils";

type BookingBarProps = {
  tone?: "dark" | "light";
  className?: string;
  onSubmitted?: (values: BookingValues) => void;
  withRoom?: boolean;
};

export type BookingValues = {
  checkIn: string;
  checkOut: string;
  guests: string;
  room?: string;
};

const guestOptions = ["1 adult", "2 adults", "2 adults, 1 child", "3 adults", "4 adults"];

/**
 * Front-end booking interface. No availability is claimed or invented —
 * submitting hands the request to the enquiry flow, ready to be wired to a
 * booking engine later.
 */
export function BookingBar({ tone = "dark", className, onSubmitted, withRoom = false }: BookingBarProps) {
  const navigate = useNavigate();
  const [values, setValues] = useState<BookingValues>({
    checkIn: "",
    checkOut: "",
    guests: "2 adults",
    ...(withRoom ? { room: "Any room" } : {}),
  });

  const dark = tone === "dark";

  const set = (key: keyof BookingValues) => (v: string) => setValues((p) => ({ ...p, [key]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmitted) {
      onSubmitted(values);
      return;
    }
    void navigate({ to: "/book" });
  };

  const fieldClass = cn(
    "w-full bg-transparent pt-1 font-display text-lg outline-none placeholder:text-current/50",
    dark ? "text-ivory [color-scheme:dark]" : "text-charcoal",
  );

  return (
    <form
      onSubmit={submit}
      className={cn(
        "grid w-full gap-px",
        dark ? "bg-ivory/15 text-ivory" : "bg-border text-charcoal",
        "sm:grid-cols-2",
        withRoom ? "lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]" : "lg:grid-cols-[repeat(3,minmax(0,1fr))_auto]",
        className,
      )}
    >
      <Field label="Check in" dark={dark}>
        <input
          type="date"
          required
          aria-label="Check in date"
          value={values.checkIn}
          onChange={(e) => set("checkIn")(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field label="Check out" dark={dark}>
        <input
          type="date"
          required
          aria-label="Check out date"
          value={values.checkOut}
          onChange={(e) => set("checkOut")(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field label="Guests" dark={dark}>
        <select
          aria-label="Guests"
          value={values.guests}
          onChange={(e) => set("guests")(e.target.value)}
          className={cn(fieldClass, "appearance-none")}
        >
          {guestOptions.map((g) => (
            <option key={g} value={g} className="bg-ivory text-charcoal">
              {g}
            </option>
          ))}
        </select>
      </Field>

      {withRoom && (
        <Field label="Room" dark={dark}>
          <select
            aria-label="Room"
            value={values.room}
            onChange={(e) => set("room")(e.target.value)}
            className={cn(fieldClass, "appearance-none")}
          >
            {["Any room", "Colonial Room", "Courtyard Room", "Casa Suite", "Garden Room"].map((r) => (
              <option key={r} value={r} className="bg-ivory text-charcoal">
                {r}
              </option>
            ))}
          </select>
        </Field>
      )}

      <button
        type="submit"
        className="group flex items-center justify-center gap-4 bg-champagne px-8 py-6 label-xs text-ink transition-colors duration-500 hover:bg-cocoa hover:text-ivory sm:col-span-2 lg:col-span-1"
      >
        Check Availability
        <IconArrow className="h-3 w-6 transition-transform duration-700 group-hover:translate-x-1.5" />
      </button>
    </form>
  );
}

function Field({
  label,
  dark,
  children,
}: {
  label: string;
  dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block px-7 py-6", dark ? "bg-ink/85 backdrop-blur-sm" : "bg-ivory")}>
      <span className={cn("label-xs", dark ? "text-ivory/55" : "text-muted-foreground")}>{label}</span>
      {children}
    </label>
  );
}

import { Link } from "@tanstack/react-router";
import { logo } from "@/lib/media";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link to="/" aria-label="Casa Guipuzcoana — home" className={cn("block shrink-0", className)}>
      <img
        src={tone === "light" ? logo.light : logo.dark}
        alt="Casa Guipuzcoana Hotel Boutique"
        className="h-9 w-auto sm:h-11"
        width={220}
        height={110}
      />
    </Link>
  );
}

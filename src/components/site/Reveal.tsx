import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string | undefined;
  delay?: number | undefined;
  variant?: "fade" | "mask" | undefined;
  as?: ElementType | undefined;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // already within (or above) the viewport on mount — show immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -2% 0px" },
    );
    observer.observe(node);

    // safety net: never leave content permanently hidden
    const timer = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(variant === "mask" ? "reveal-mask" : "reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

import { useCallback, useEffect } from "react";
import { IconClose } from "@/components/site/Icons";
import type { Photo } from "@/lib/media";

type LightboxProps = {
  images: Photo[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const total = images.length;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % total);
  }, [index, onIndexChange, total]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, onIndexChange, total]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, next, prev, onClose]);

  if (index === null) return null;
  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image"
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 animate-in fade-in duration-500"
    >
      <div className="flex items-center justify-between px-5 py-5 text-ivory sm:px-10">
        <span className="label-xs text-ivory/60">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-colors duration-500 hover:border-ivory"
        >
          <IconClose className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-6 sm:px-16">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[74vh] w-auto max-w-full object-contain animate-in fade-in duration-700"
        />
      </div>

      <div className="flex items-center justify-center gap-10 pb-10 text-ivory">
        <button type="button" onClick={prev} className="label-xs link-underline" aria-label="Previous image">
          Prev
        </button>
        <span className="h-6 w-px bg-ivory/25" aria-hidden="true" />
        <button type="button" onClick={next} className="label-xs link-underline" aria-label="Next image">
          Next
        </button>
      </div>
    </div>
  );
}

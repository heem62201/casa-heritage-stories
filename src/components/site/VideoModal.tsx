import { useEffect, useRef, useState } from "react";
import { IconClose, IconPause, IconPlay } from "@/components/site/Icons";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  caption?: string;
};

export function VideoModal({ open, onClose, src, poster, caption }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const v = videoRef.current;
    void v?.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      v?.pause();
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hotel film"
      className="fixed inset-0 z-[100] flex flex-col bg-ink/97 animate-in fade-in duration-500"
    >
      <div className="flex items-center justify-between px-5 py-5 text-ivory sm:px-10">
        <span className="label-xs text-ivory/60">{caption ?? "Casa Guipuzcoana — Film"}</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close film"
          className="flex h-11 w-11 items-center justify-center border border-ivory/25 text-ivory transition-colors duration-500 hover:border-ivory"
        >
          <IconClose className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 pb-4 sm:px-10 sm:pb-10">
        <div className="relative max-h-full w-full max-w-5xl">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            controls
            className="max-h-[76vh] w-full bg-black object-contain"
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause film" : "Play film"}
            className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-full border border-ivory/30 bg-ink/50 text-ivory backdrop-blur-[2px] transition-colors duration-500 hover:border-ivory"
          >
            {playing ? <IconPause className="h-4 w-4" /> : <IconPlay className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

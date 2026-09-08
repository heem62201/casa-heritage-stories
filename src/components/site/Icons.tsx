type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 40 40",
};

export function IconStar({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 6l3.6 8.2 8.9.8-6.7 5.9 2 8.7L20 25l-7.8 4.6 2-8.7-6.7-5.9 8.9-.8z" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 32h28M8 32V16l12-8 12 8v16M15 32v-8h10v8M15 19h3M22 19h3" />
    </svg>
  );
}

export function IconDining({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 7v11a3 3 0 01-3 3h0a3 3 0 01-3-3V7M11 7v14M11 21v12M28 7c-2.5 1.5-3.5 4-3.5 7.5S26 20 28 20.5V33" />
    </svg>
  );
}

export function IconWave({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 24c2.8 0 2.8-3 5.7-3s2.8 3 5.7 3 2.8-3 5.6-3 2.9 3 5.7 3 2.9-3 5.7-3M6 31c2.8 0 2.8-3 5.7-3s2.8 3 5.7 3 2.8-3 5.6-3 2.9 3 5.7 3 2.9-3 5.7-3M20 9v8M20 9c-3 0-5 2-5 4M20 9c3 0 5 2 5 4" />
    </svg>
  );
}

export function IconService({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 20a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM9 33c1.6-5.6 5.8-8.5 11-8.5S29.4 27.4 31 33" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 12"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      className={className}
      aria-hidden="true"
    >
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}

export function IconPlay({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5l12 7-12 7z" />
    </svg>
  );
}

export function IconPause({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className={className} aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

export const highlightIcons = {
  star: IconStar,
  building: IconBuilding,
  dining: IconDining,
  wave: IconWave,
  service: IconService,
};

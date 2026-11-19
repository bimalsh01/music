/** Inline stroke icons from the prototype. All decorative: the parent carries the label. */
type P = { size?: number; className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LogoMark({ size = 19 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.4}>
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M12 17l3.5-5.5" />
    </svg>
  );
}

export function ArrowRight({ size = 18 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.4}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight({ size = 18 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ChevronDown({ size = 16, className }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2} className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft({ size = 20 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight({ size = 20 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function Speaker({ size = 19 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M11 5L6 9H3v6h3l5 4z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export function Mic({ size = 20 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function StopSquare({ size = 18 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="6" width="12" height="12" rx="3" />
    </svg>
  );
}

export function PlayTriangle({ size = 22 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10-6.5a1 1 0 0 0 0-1.72l-10-6.5A1 1 0 0 0 8 5.5z" />
    </svg>
  );
}

export function GlobeIcon({ size = 16 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
    </svg>
  );
}

export function GuitarIcon({ size = 18 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M13.5 10.5L20 4" />
      <path d="M18.5 2.5l3 3" />
      <path d="M10.6 8.7c-1.4-.6-3.1-.3-4.2.8-.7.7-.9 1.6-.9 2.4-1 .1-1.9.5-2.6 1.2-1.6 1.6-1.3 4.5.7 6.5s4.9 2.3 6.5.7c.7-.7 1.1-1.6 1.2-2.6.8 0 1.7-.2 2.4-.9 1.1-1.1 1.4-2.8.8-4.2" />
      <circle cx="9.5" cy="14.5" r="1.4" />
    </svg>
  );
}

export function BoltIcon({ size = 18 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
    </svg>
  );
}

/** Bottom tab bar: tuner gauge. */
export function TunerIcon({ size = 22 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M3.5 17a8.5 8.5 0 0 1 17 0" />
      <path d="M12 17l3.5-5.5" />
      <path d="M12 8.5V7M6 11.5l-1-1M18 11.5l1-1" />
    </svg>
  );
}

/** Bottom tab bar: metronome. */
export function MetronomeIcon({ size = 22 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M9.5 3h5l4 18h-13l4-18z" />
      <path d="M12 16l4.5-9" />
      <path d="M7 16h10" />
    </svg>
  );
}

/** Bottom tab bar: chord diagram. */
export function ChordsIcon({ size = 22 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M5 8h14M5 13h14M9.7 3v18M14.3 3v18" />
      <circle cx="9.7" cy="10.5" r="1.3" fill="currentColor" />
      <circle cx="14.3" cy="15.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

/** Settings (sliders). */
export function SlidersIcon({ size = 20 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
      <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="8" cy="17" r="2" />
    </svg>
  );
}

export function CloseIcon({ size = 20 }: P) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={2.2}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

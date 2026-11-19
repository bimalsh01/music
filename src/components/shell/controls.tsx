"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "./icons";

/** Pill-shaped segmented control on an inset track (time signatures, subdivision, naming…). */
export function Segmented<T extends string | number>({
  label,
  items,
  value,
  onChange,
  selected = "accent",
  className = "flex flex-wrap gap-0.5",
  itemClassName = "h-10 min-w-12 px-2.5 text-sm font-bold",
}: {
  label: string;
  items: readonly { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  /** Colour of the selected pill: accent green or white. */
  selected?: "accent" | "white";
  className?: string;
  itemClassName?: string;
}) {
  const on = selected === "white" ? "bg-pill text-on-pill" : "bg-accent text-on-accent";
  return (
    <div role="group" aria-label={label} className={`rounded-full bg-inset p-1 ${className}`}>
      {items.map((it) => (
        <button
          key={String(it.id)}
          type="button"
          aria-pressed={it.id === value}
          onClick={() => onChange(it.id)}
          className={`cursor-pointer rounded-full border-none tabular ${itemClassName} ${
            it.id === value ? on : "bg-transparent text-ink"
          }`}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

/** The one primary action per screen: green with a glow, white while active. */
export function PrimaryButton({
  active = false,
  onClick,
  children,
  className = "",
  ariaLabel,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex h-[60px] cursor-pointer items-center justify-center gap-2.5 rounded-full border-none text-[17px] font-bold ${
        active ? "bg-pill text-on-pill shadow-none" : "bg-accent text-on-accent shadow-glow"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/** "More / Less" disclosure button. */
export function MoreToggle({
  open,
  onToggle,
  more,
  less,
  controls,
  className = "px-3.5",
}: {
  open: boolean;
  onToggle: () => void;
  more: string;
  less: string;
  controls: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      className={`flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full border-none bg-transparent text-sm font-semibold text-muted ${className}`}
    >
      {open ? less : more}
      <ChevronDown className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

/** On/off switch: 48×28 track inside a 60×44 touch target. */
export function Switch({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[15px] font-medium">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="flex h-11 w-[60px] cursor-pointer items-center justify-center border-none bg-transparent p-0"
      >
        <span
          className={`box-border flex h-7 w-12 items-center rounded-full p-[3px] transition-colors duration-150 ${
            checked ? "justify-end bg-accent" : "justify-start bg-raised"
          }`}
        >
          <span className={`size-[22px] rounded-full ${checked ? "bg-bg" : "bg-ink"}`} />
        </span>
      </button>
    </div>
  );
}

/** Round icon button on the inset colour (−/+, arrows, speaker). */
export function RoundButton({
  label,
  onClick,
  children,
  className = "size-14",
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`flex flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink ${className}`}
    >
      {children}
    </button>
  );
}

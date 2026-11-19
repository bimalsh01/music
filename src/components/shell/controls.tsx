"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ChevronDown, CloseIcon, SlidersIcon } from "./icons";

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
      className={`flex h-[60px] cursor-pointer items-center justify-center gap-2.5 rounded-full border-none text-[17px] font-bold [&>svg]:flex-none ${
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

/** Phones only: round button that opens a tool's settings sheet (replaces "More" there). */
export function SettingsButton({ label, onClick, className = "" }: { label: string; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-haspopup="dialog"
      onClick={onClick}
      className={`flex size-11 flex-none cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink min-[860px]:hidden ${className}`}
    >
      <SlidersIcon />
    </button>
  );
}

/**
 * Phones only: a panel that slides up from the bottom over a dimmed page, for settings that would
 * otherwise push the one-screen layout down. Closes on the backdrop, the × button or Escape.
 */
export function BottomSheet({
  open,
  title,
  closeLabel,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const back = document.activeElement as HTMLElement | null;
    panel.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      back?.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center min-[860px]:hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-black/55" onClick={onClose} />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="relative box-border flex max-h-[85dvh] w-full max-w-[520px] animate-[sheet-in_180ms_ease-out] flex-col gap-4 overflow-y-auto rounded-t-[28px] bg-surface px-6 pt-3 pb-[calc(24px+var(--safe-b))] outline-none"
      >
        <span aria-hidden="true" className="mx-auto h-1 w-10 flex-none rounded-full bg-raised" />
        <div className="flex items-center justify-between">
          <h2 className="m-0 font-display text-xl font-bold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border-none bg-inset text-ink"
          >
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

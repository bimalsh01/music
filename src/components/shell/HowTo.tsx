import Link from "next/link";
import { ArrowRight } from "./icons";

/** "How to use" steps + the single "Next: …" link, shared by every tool page. */
export function HowTo({ title, steps, nextLabel, nextHref }: { title: string; steps: string[]; nextLabel: string; nextHref: string }) {
  return (
    <section className="flex flex-col gap-[34px]">
      <h2 className="m-0 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em]">{title}</h2>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[34px] p-0">
        {steps.map((s, i) => (
          <li key={i} className="flex flex-col gap-3.5 text-[15px] leading-[1.6] text-muted">
            <span aria-hidden="true" className="font-display text-[40px] leading-none font-extrabold text-accent-text">
              {String(i + 1).padStart(2, "0")}
            </span>
            {s}
          </li>
        ))}
      </ol>
      <Link
        href={nextHref}
        className="flex min-h-[60px] items-center gap-[18px] self-start font-display text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em] text-ink no-underline"
      >
        {nextLabel}
        <span className="flex size-[52px] items-center justify-center rounded-full bg-accent text-on-accent">
          <ArrowRight size={22} />
        </span>
      </Link>
    </section>
  );
}

/** Page frame below the header: 1200 max width, 24 px gutters, 80 px between sections. */
export function PageMain({ children, top = "pt-[var(--hero-pt)]" }: { children: React.ReactNode; top?: string }) {
  return (
    <main className={`mx-auto box-border flex w-full max-w-[1200px] flex-col gap-20 px-6 pb-28 ${top}`}>{children}</main>
  );
}

export function PageTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`m-0 min-w-0 font-display text-[24px] leading-tight ${className} font-extrabold tracking-[-0.03em] min-[860px]:text-[clamp(2.75rem,min(6vw,8svh),5rem)] min-[860px]:leading-none min-[860px]:tracking-[-0.035em]`}>
      {children}
    </h1>
  );
}

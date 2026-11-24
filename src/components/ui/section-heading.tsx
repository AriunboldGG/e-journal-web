import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

const tones = {
  green: "bg-cloth text-white",
  red: "bg-pen text-white",
  ink: "bg-text text-white",
  paper: "bg-surface text-text border-text",
} as const;

/**
 * A notebook divider tab. Sits on the right edge of the section
 * (the section needs `relative`), the way index tabs stick out of a page.
 */
export function DividerTab({
  children,
  tone = "green",
  top = "7rem",
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  top?: string;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ top }}
      className={cn(
        "tab-edge absolute right-0 z-10 hidden rounded-l-md border-2 border-r-0 border-transparent px-1.5 py-4 text-xs font-bold tracking-wide shadow-[0_6px_12px_-8px_rgba(8,61,38,0.6)] sm:block",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}

/** Kept for places that still want a plain label chip. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="hand text-2xl leading-none text-pen">{children}</span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "green",
  tabTop,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: keyof typeof tones;
  tabTop?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <>
          <DividerTab tone={tone} top={tabTop}>
            {eyebrow}
          </DividerTab>
          {/* The same words stay readable on small screens, where the edge tab is hidden */}
          <Reveal className="sm:hidden">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        </>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-4xl md:text-5xl",
            align === "center" ? "max-w-3xl" : "max-w-3xl"
          )}
        >
          {title}
        </h2>
        <span
          aria-hidden="true"
          className={cn(
            "mt-4 block h-[7px] w-28 border-y-2 border-pen",
            align === "center" && "mx-auto"
          )}
        />
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl",
            align === "center" ? "max-w-3xl" : "max-w-2xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-balance text-base leading-relaxed text-text-secondary sm:text-lg",
              align === "center" ? "max-w-2xl" : "max-w-xl"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

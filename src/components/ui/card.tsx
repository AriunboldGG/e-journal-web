import { cn } from "@/lib/utils";

/** A loose paper slip. Square corners; the page is paper, not a pill. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "sheet-plain relative rounded-sm border border-border p-6 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  className,
}: {
  icon: React.ElementType;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-text/80 bg-surface text-cloth",
        className
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </div>
  );
}

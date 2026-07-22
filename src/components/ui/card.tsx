import { cn } from "@/lib/utils";

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
        "group relative rounded-3xl border border-border bg-surface p-6 shadow-[0_2px_8px_-4px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(22,155,98,0.18)] sm:p-8",
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
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(22,155,98,0.12),rgba(34,197,94,0.12))] text-primary transition-transform duration-300 group-hover:scale-110",
        className
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </div>
  );
}

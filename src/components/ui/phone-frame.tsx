import { cn } from "@/lib/utils";

export function PhoneFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[260px] shrink-0 rounded-[2.75rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] p-1.5 shadow-[0_30px_60px_-15px_rgba(16,24,40,0.35),0_10px_24px_-8px_rgba(16,24,40,0.2)]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-background">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1a1a1a]" />
        {children}
      </div>
    </div>
  );
}

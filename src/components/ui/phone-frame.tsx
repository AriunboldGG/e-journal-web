import { cn } from "@/lib/utils";

export function PhoneFrame({
  className,
  children,
  notch = true,
}: {
  className?: string;
  children: React.ReactNode;
  notch?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] shrink-0 rounded-[2.5rem] border-[6px] border-[#13251c] bg-[#13251c] p-1.5 shadow-[0_28px_40px_-18px_rgba(4,30,18,0.65),0_8px_14px_-8px_rgba(4,30,18,0.4)]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-background">
        {notch && (
          <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#13251c]" />
        )}
        {children}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function Logo({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Цахим дэвтэр лого"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#169B62" />
          <stop offset="1" stopColor="#22C55E" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#logo-gradient)" />
      <g stroke="#ffffff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="14.5" y1="16" x2="19.5" y2="16" />
        <line x1="14.5" y1="21" x2="19.5" y2="21" />
        <line x1="14.5" y1="26" x2="19.5" y2="26" />
        <line x1="14.5" y1="31" x2="19.5" y2="31" />
        <path d="M20 12h9a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2h-13.5a3.5 3.5 0 0 1-3.5-3.5v-16A3.5 3.5 0 0 1 15.5 12z" />
        <line x1="20" y1="12" x2="20" y2="35" />
        <path d="M28.5 12v6.5l-2.25-2-2.25 2V12" />
        <line x1="22" y1="27" x2="27.5" y2="27" />
        <line x1="22" y1="30.5" x2="26" y2="30.5" />
      </g>
    </svg>
  );
}

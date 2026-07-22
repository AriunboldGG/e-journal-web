import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-[linear-gradient(135deg,#169b62,#22c55e)] text-white shadow-[0_8px_24px_-8px_rgba(22,155,98,0.55)] hover:shadow-[0_12px_32px_-8px_rgba(22,155,98,0.7)] hover:-translate-y-0.5",
    secondary:
      "bg-surface text-text border border-border hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]",
    ghost: "text-text hover:bg-black/[0.04]",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

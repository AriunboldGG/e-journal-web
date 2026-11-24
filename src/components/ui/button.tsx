import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "paper";
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
    "group relative inline-flex whitespace-nowrap items-center justify-center gap-2 rounded-md border-2 font-semibold transition-all duration-300 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pen focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    // on paper: green book-cloth label
    primary:
      "border-cloth-deep bg-cloth text-white shadow-[0_10px_18px_-10px_rgba(8,61,38,0.7)] hover:-translate-y-0.5 hover:bg-cloth-deep",
    // on paper: outlined in ink
    secondary:
      "border-text bg-surface text-text hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_18px_-12px_rgba(15,33,24,0.45)]",
    ghost: "border-transparent text-text hover:border-border hover:bg-white/60",
    // on the green cover: a paper label
    paper:
      "border-white/80 bg-surface text-cloth-deep hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_20px_-12px_rgba(0,0,0,0.55)]",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(base, sizes[size], variants[variant], className)}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

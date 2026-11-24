import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/launcher-icon.jpg"
      alt="Цахим дэвтэр лого"
      width={size}
      height={size}
      className={cn("shrink-0 rounded-md border-2 border-text object-cover", className)}
      priority
    />
  );
}

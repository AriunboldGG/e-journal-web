import Image from "next/image";
import { PhoneFrame } from "@/components/ui/phone-frame";

/** A real app screenshot inside the phone frame (the screenshot carries its own status bar). */
export function AppShot({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <PhoneFrame notch={false} className={className ?? "w-[260px]"}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 260px, 170px"
        className="object-cover object-top"
        priority={priority}
      />
    </PhoneFrame>
  );
}

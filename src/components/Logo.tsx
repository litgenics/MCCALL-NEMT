import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SIZES = {
  header: { src: COMPANY.logo.header, width: 168, height: 44, className: "h-9 w-auto sm:h-11" },
  footer: { src: COMPANY.logo.footer, width: 220, height: 56, className: "h-12 w-auto sm:h-14" },
  hero: { src: COMPANY.logo.footer, width: 280, height: 72, className: "h-14 w-auto sm:h-16 md:h-[4.5rem]" },
  about: { src: COMPANY.logo.footer, width: 360, height: 100, className: "h-16 w-auto sm:h-20" },
} as const;

type LogoVariant = keyof typeof SIZES;

export function Logo({
  variant = "header",
  linked = true,
  className,
  priority = false,
}: {
  variant?: LogoVariant;
  linked?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const { src, width, height, className: sizeClass } = SIZES[variant];

  const image = (
    <Image
      src={src}
      alt={COMPANY.name}
      width={width}
      height={height}
      priority={priority}
      className={cn(
        sizeClass,
        "object-contain object-left drop-shadow-sm",
        variant === "hero" && "drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]",
        className
      )}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="inline-flex shrink-0 transition opacity-95 hover:opacity-100">
      {image}
    </Link>
  );
}
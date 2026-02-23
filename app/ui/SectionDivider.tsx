"use client";

import { cn } from "@/lib/cn";

export type DividerVariant = "line" | "wave" | "gradient";

type SectionDividerProps = {
  variant?: DividerVariant;
  /** Kolor wypełnienia (wave) lub końca fade (gradient). Domyślnie czarny. */
  fill?: string;
  /** Odwróć kształt (np. fala na dole sekcji — curve u dołu). */
  flip?: boolean;
  className?: string;
};

/**
 * Separator między sekcjami. 3 style do przeplatania:
 * - line: subtelna linia
 * - wave: SVG fala
 * - gradient: diagonalny fade
 */
export function SectionDivider({
  variant = "line",
  fill = "#000",
  flip = false,
  className,
}: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div
        className={cn(
          "h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent",
          className
        )}
        aria-hidden
      />
    );
  }

  if (variant === "wave") {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden flex-shrink-0",
          flip && "rotate-180",
          className
        )}
        style={{ height: "64px", minHeight: "64px" }}
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            fill={fill}
            d="M0,64 L0,32 C360,0 1080,64 1440,32 L1440,64 Z"
          />
        </svg>
      </div>
    );
  }

  /* gradient: diagonal fade w dół */
  return (
    <div
      className={cn("relative w-full overflow-hidden flex-shrink-0", className)}
      style={{ height: "48px", minHeight: "48px" }}
      aria-hidden
    >
      <div
        className="h-full w-full opacity-100"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${fill} 100%)`,
        }}
      />
    </div>
  );
}

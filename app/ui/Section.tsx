"use client";

import { cn } from "@/lib/cn";
import { SectionDivider, DividerVariant } from "./SectionDivider";

export type SectionSkin = "neutral" | "gradient" | "pattern" | "light";

type SectionProps = {
  id?: string;
  /** Tło sekcji — przeplataj z innymi sekcjami */
  skin?: SectionSkin;
  /** Separator nad tą sekcją (między poprzednią a tą) */
  dividerAbove?: DividerVariant;
  /** Separator pod sekcją (ta sama fala co u góry — flip) */
  dividerBelow?: DividerVariant;
  /** Dla wave/gradient: kolor wypełnienia (domyślnie #000, dla light sekcji #fff) */
  dividerFill?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Globalny wrapper sekcji: max-width, padding, tło (skin), opcjonalny separator.
 * Zawartość w .section-inner. Nie zmienia treści — tylko wrapper i oddech.
 */
export function Section({
  id,
  skin = "neutral",
  dividerAbove,
  dividerBelow,
  dividerFill,
  children,
  className,
}: SectionProps) {
  const fill = dividerFill ?? (skin === "light" ? "#fff" : "#000");
  return (
    <>
      {dividerAbove && (
        <SectionDivider variant={dividerAbove} fill={fill} />
      )}
      <section
        id={id}
        className={cn(
          "section",
          `section-skin-${skin}`,
          "relative",
          className
        )}
      >
        <div className="section-inner">{children}</div>
      </section>
      {dividerBelow && (
        <SectionDivider variant={dividerBelow} fill={fill} flip />
      )}
    </>
  );
}

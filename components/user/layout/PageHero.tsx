"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ArrowRight, ChevronRight, Check} from "lucide-react";

import {cn} from "@/lib/cn";
import ParticlesHero from "../../../app/ui/ParticlesHero";
import {GlowButton} from "../../../app/ui/GlowButton";
import {easeOut} from "../../../app/ui/EasyOut";

type Crumb = {label: string; href?: string};
type Cta = {label: string; href: string};

type Background = {
  imageSrc?: string;
  imageAlt?: string;
  particles?: boolean;
};

type RightCard =
  | {variant: "none"}
  | {
      variant: "start";
      kicker?: string;
      title?: string;
      desc?: string | string[];
      badge?: string;
      infoTitle?: string;
      infoBadge?: string;
      infoDesc?: string;
      link?: Cta;
    }
  | {variant: "custom"; node: React.ReactNode};

export default function PageHero({
  eyebrow = "LKSW DAN",
  title,
  desc,
  crumbs,

  primaryCta,
  secondaryCta,

  accent = "red",
  align = "left",

  size = "default",
  background = {imageSrc: "/team.jpg", imageAlt: "LKSW DAN", particles: true},

  highlights,
  rightCard = {variant: "none"},
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  crumbs?: Crumb[];

  primaryCta?: Cta;
  secondaryCta?: Cta;

  accent?: "red" | "gold";
  align?: "left" | "center";

  size?: "default" | "home";
  background?: Background;

  highlights?: string[];
  rightCard?: RightCard;
}) {
  const accentGlow =
    accent === "red"
      ? "bg-[radial-gradient(circle_at_30%_30%,rgba(255,40,40,0.22),transparent_55%)]"
      : "bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,90,0.18),transparent_55%)]";

  const accentLine =
    accent === "red"
      ? "from-red-500/35 via-red-500/0 to-transparent"
      : "from-amber-300/35 via-amber-300/0 to-transparent";

  const topPad = "pt-28";
  const bottomPad = size === "home" ? "pb-20 sm:pb-24" : "pb-14 sm:pb-16";

  const hasRight = rightCard.variant !== "none";

  return (
    <header
      className={cn("relative isolate overflow-hidden", topPad, bottomPad)}
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* BACKGROUND IMAGE (Next/Image) */}
        {background.imageSrc ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={background.imageSrc}
              alt={background.imageAlt ?? "LKSW DAN"}
              fill
              priority={size === "home"}
              sizes="100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        ) : null}

        {/* PARTICLES */}
        {background.particles ? (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <ParticlesHero
              className={cn(size === "home" ? "opacity-90" : "opacity-60")}
            />
          </div>
        ) : null}

        {/* GLOW */}
        <div className={cn("absolute inset-0 z-20 opacity-90", accentGlow)} />

        {/* RADIALS */}
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_60%)]" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />

        {/* GRID */}
        <div className="absolute inset-0 z-20 opacity-20 [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs (podstrony) */}
        {size !== "home" && crumbs?.length ? (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/55">
            {crumbs.map((c, idx) => {
              const node = c.href ? (
                <Link
                  key={idx}
                  href={c.href}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 text-white/75"
                >
                  {c.label}
                </span>
              );

              return (
                <React.Fragment key={idx}>
                  {node}
                  {idx < crumbs.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        ) : null}

        <div
          className={cn(
            "grid gap-10 lg:items-end",
            "lg:grid-cols-12",
            align === "center" && "text-center"
          )}
        >
          {/* ================= LEFT ================= */}
          <div
            className={cn(
              hasRight ? "lg:col-span-7" : "lg:col-span-8",
              align === "center" && "lg:col-start-3"
            )}
          >
            <motion.div
              initial={{opacity: 0, y: 16}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.7, ease: easeOut}}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur",
                align === "center" && "mx-auto"
              )}
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,40,40,0.55)]" />
              <span>{eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.85, delay: 0.05, ease: easeOut}}
              className={cn(
                "mt-6 text-balance font-black tracking-tight",
                size === "home"
                  ? "text-5xl sm:text-6xl lg:text-7xl"
                  : "text-4xl sm:text-5xl lg:text-6xl"
              )}
            >
              <span className="text-white">{title}</span>
            </motion.h1>

            {desc ? (
              <motion.p
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.75, delay: 0.14, ease: easeOut}}
                className={cn(
                  "mt-5 max-w-3xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg",
                  align === "center" && "mx-auto"
                )}
              >
                {desc}
              </motion.p>
            ) : null}

            {primaryCta || secondaryCta ? (
              <motion.div
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.75, delay: 0.22, ease: easeOut}}
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                  align === "center" && "justify-center"
                )}
              >
                {primaryCta ? (
                  <GlowButton variant="primary" href={primaryCta.href}>
                    {primaryCta.label}
                  </GlowButton>
                ) : null}

                {secondaryCta ? (
                  <GlowButton variant="secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </GlowButton>
                ) : null}

                {highlights?.length ? (
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60 sm:mt-0 sm:ml-3">
                    {highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4" /> {h}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ) : null}
          </div>

          {/* ================= RIGHT (CARD) ================= */}
          {hasRight ? (
            <div className="lg:col-span-5">
              <motion.div
                initial={{opacity: 0, y: 18}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.85, delay: 0.12, ease: easeOut}}
                className="relative"
              >
                {/* glow behind */}
                <div className="absolute -inset-10 -z-10 opacity-60 blur-3xl">
                  <div
                    className={cn(
                      "absolute inset-0",
                      accent === "red"
                        ? "bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.25),rgba(0,0,0,0)_55%)]"
                        : "bg-[radial-gradient(circle_at_40%_30%,rgba(255,215,90,0.18),rgba(0,0,0,0)_55%)]"
                    )}
                  />
                </div>

                {rightCard.variant === "custom" ? (
                  rightCard.node
                ) : (
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
                    {/* delikatny wash jak na screenie */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-70",
                        accentLine
                      )}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]" />

                    <div className="relative">
                      <div className="text-xs tracking-[0.22em] text-white/60">
                        {rightCard.variant === "start"
                          ? rightCard.kicker ?? "SZYBKI SKRÓT"
                          : "SZYBKI SKRÓT"}
                      </div>

                      <div className="mt-2 text-lg font-black text-white">
                        {rightCard.variant === "start"
                          ? rightCard.title ?? "Minimalizm. Maksymalny efekt."
                          : "Minimalizm. Maksymalny efekt."}
                      </div>

                      {rightCard.variant === "start" &&
                      Array.isArray(rightCard.desc) ? (
                        /* ===== LISTA ===== */
                        <ul className="mt-4 grid gap-3 text-sm text-white/75">
                          {rightCard.desc.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-[11px] font-bold text-white/80">
                                –
                              </span>

                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        /* ===== TEKST ===== */
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {rightCard.variant === "start"
                            ? rightCard.desc ??
                              "Spójny system szkolenia, grupy poziomami, możliwość startów w różnych formułach."
                            : null}
                        </p>
                      )}

                      <Link
                        href={
                          rightCard.variant === "start"
                            ? rightCard.link?.href ?? "/trainings#zapisy"
                            : "/trainings#zapisy"
                        }
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
                      >
                        {rightCard.variant === "start"
                          ? rightCard.link?.label ?? "Zapisz się"
                          : "Zapisz się"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          ) : null}
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black" />
      {size === "home" ? (
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-black" />
      ) : null}
    </header>
  );
}

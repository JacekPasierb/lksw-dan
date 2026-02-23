"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TentTree,
  Snowflake,
  Trophy,
  Sparkles,
  PartyPopper,
  Megaphone,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { easeOut } from "../../../../app/ui/EasyOut";

type Item = {
  title: string;
  desc: string;
  icon: React.ElementType;
  tag: string;
};

const ITEMS: Item[] = [
  {
    title: "Obozy letnie i zimowe",
    desc: "Zgrupowania, które robią progres: technika, motoryka i integracja poza salą.",
    icon: TentTree,
    tag: "OBÓZ",
  },
  {
    title: "Zawody w Polsce i za granicą",
    desc: "Starty, medale i realne przygotowanie — sportowy wynik to efekt systemu.",
    icon: Trophy,
    tag: "SPORT",
  },
  {
    title: "Pikniki i zakończenie sezonu",
    desc: "Klub to ludzie. Budujemy atmosferę, która trzyma poziom i daje energię.",
    icon: PartyPopper,
    tag: "SPOŁECZNOŚĆ",
  },
  {
    title: "Seminaria z mistrzami",
    desc: "Regularne szkolenia z topowymi instruktorami — wiedza i standard światowy.",
    icon: Sparkles,
    tag: "SEMINARIA",
  },
  {
    title: "Pokazy na wydarzeniach lokalnych",
    desc: "Reprezentujemy klub i promujemy sport — charakter, dyscyplina, kultura walki.",
    icon: Megaphone,
    tag: "EVENTY",
  },
];

/** Rytm 8/12px: gap-3=12, gap-6=24, gap-8=32 */
const CARD_VARIANTS = ["tall", "default", "tall", "default", "default"] as const;

export default function ClubLifeSection() {
  return (
    <>
      {/* ========== TŁO — głębia, premium ========== */}
      <div className="absolute inset-0 -z-20 bg-[#0a0a0a]" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-90"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 20% 20%, rgba(255,255,255,0.06) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 80% 80%, rgba(220,38,38,0.08) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 60%)",
        }}
      />
      {/* Subtelna tekstura / grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Miękkie blury — głębia (w viewport, bez overflow) */}
      <div
        className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full opacity-30 blur-[100px]"
        style={{ top: "10%", left: "5%", background: "rgba(255,255,255,0.06)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-10 h-64 w-64 rounded-full opacity-25 blur-[100px]"
        style={{ bottom: "10%", right: "5%", background: "rgba(220,38,38,0.08)" }}
        aria-hidden
      />
      {/* Separator górny — gradient mask */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-black/40 to-transparent"
        aria-hidden
      />
      {/* Separator dolny */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden
      />

      {/* ========== LAYOUT: lewa (hero) + prawa (karty) ========== */}
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
        {/* ========== LEWA — hero statement / narracja ========== */}
        <div className="lg:col-span-5 lg:pr-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur"
          >
            <span
              className="inline-flex h-2 w-2 rounded-full bg-red-500"
              style={{ boxShadow: "0 0 12px rgba(220,38,38,0.6)" }}
              aria-hidden
            />
            ŻYCIE KLUBU
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.06, ease: easeOut }}
            className="mt-6 text-balance text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-[1.2]"
          >
            <span className="bg-gradient-to-b from-white to-white/85 bg-clip-text text-transparent">
              Trening to dopiero początek. My żyjemy sportem cały rok.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.12, ease: easeOut}}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-relaxed"
          >
            Obozy, starty, seminaria i wydarzenia — budujemy formę w praktyce,
            a przy okazji tworzymy społeczność, która ciągnie w górę.
          </motion.p>

          {/* Meta — status card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-white">
                Stały rytm sezonu
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white/65">
                AKTYWNIE
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Trenujesz w tygodniu → wyjeżdżasz na starty / obóz → wracasz
              mocniejszy. To działa, bo jest konsekwencja.
            </p>
          </motion.div>
        </div>

        {/* ========== PRAWA — karty (zróżnicowane, stagger) ========== */}
        <div className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {ITEMS.map((it, i) => {
              const Icon = it.icon;
              const variant = CARD_VARIANTS[i] ?? "default";
              const isAccent = i === 1 || i === 3; // lekki akcent czerwony/amber na ikonie
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 + i * 0.06,
                    ease: easeOut,
                  }}
                  className="group"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-white/10",
                      "bg-gradient-to-b from-white/[0.07] to-white/[0.02]",
                      "p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]",
                      "focus-within:border-white/25 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500/40 focus-within:ring-offset-2 focus-within:ring-offset-[#0a0a0a]",
                      variant === "tall" && "min-h-[180px] sm:min-h-[200px]",
                      variant === "default" && "min-h-[160px]"
                    )}
                    tabIndex={0}
                    role="article"
                    aria-labelledby={`club-life-${i}-title`}
                  >
                    {/* Hover glow */}
                    <div
                      className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(circle at 40% 30%, rgba(220,38,38,0.15), transparent 55%)",
                        }}
                      />
                    </div>
                    {/* Tło — lekki shift przy hover */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                      }}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                          {it.tag}
                        </p>
                        <h3
                          id={`club-life-${i}-title`}
                          className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl"
                        >
                          {it.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {it.desc}
                        </p>
                      </div>
                      {/* Ikona — gradient bg, delikatny glow */}
                      <div
                        className={cn(
                          "grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-colors duration-300",
                          "bg-white/5 group-hover:bg-white/10",
                          isAccent
                            ? "border-red-500/20 shadow-[0_0_20px_-4px_rgba(220,38,38,0.25)]"
                            : "border-white/10"
                        )}
                        aria-hidden
                      >
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-colors duration-300",
                            isAccent ? "text-red-400/90" : "text-white/85"
                          )}
                        />
                      </div>
                    </div>

                    <div
                      className="relative mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                      aria-hidden
                    />
                    <div className="relative mt-4 flex items-center justify-between text-xs text-white/50">
                      <span>LKSW DAN</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Snowflake className="h-3.5 w-3.5" aria-hidden />
                        sezon cały rok
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

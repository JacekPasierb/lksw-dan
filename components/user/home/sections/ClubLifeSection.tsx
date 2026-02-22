"use client";

import React from "react";
import {motion} from "framer-motion";
import {
  TentTree,
  Snowflake,
  Trophy,
  Sparkles,
  PartyPopper,
  Megaphone,
} from "lucide-react";

import {cn} from "@/lib/cn";
import {easeOut} from "../../../../app/ui/EasyOut";

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

export default function ClubLifeSection() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* background wash */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: copy + CTA */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.65, ease: easeOut}}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(255,40,40,0.55)]" />
              ŻYCIE KLUBU
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.75, delay: 0.05, ease: easeOut}}
              className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Trening to dopiero początek. My żyjemy sportem cały rok.
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.12, ease: easeOut}}
              className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Obozy, starty, seminaria i wydarzenia — budujemy formę w praktyce,
              a przy okazji tworzymy społeczność, która ciągnie w górę.
            </motion.p>

            {/* small “status” card */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-white">
                  Stały rytm sezonu
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/65">
                  AKTYWNIE
                </span>
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                Trenujesz w tygodniu → wyjeżdżasz na starty / obóz → wracasz
                mocniejszy. To działa, bo jest konsekwencja.
              </div>
            </div>
          </div>

          {/* RIGHT: cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {ITEMS.map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={it.title}
                    initial={{opacity: 0, y: 16}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.6, delay: i * 0.05, ease: easeOut}}
                    className="group"
                  >
                    <div
                      className={cn(
                        "relative h-full overflow-hidden rounded-3xl border border-white/10",
                        "bg-gradient-to-b from-white/[0.06] to-white/[0.03]",
                        "p-6 backdrop-blur transition",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
                        "hover:border-white/25 hover:bg-white/[0.06]"
                      )}
                    >
                      {/* glow */}
                      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.18),rgba(0,0,0,0)_60%)]" />
                      </div>

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[10px] tracking-[0.22em] text-white/55">
                            {it.tag}
                          </div>
                          <div className="mt-2 text-lg font-black tracking-tight text-white">
                            {it.title}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-white/70">
                            {it.desc}
                          </p>
                        </div>

                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5">
                          <Icon className="h-5 w-5 text-white/85" />
                        </div>
                      </div>

                      <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
                      <div className="mt-4 flex items-center justify-between text-xs text-white/55">
                        <span>LKSW DAN</span>
                        {/* mały akcent */}
                        <span className="inline-flex items-center gap-2">
                          <Snowflake className="h-3.5 w-3.5" />
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
      </div>
    </section>
  );
}

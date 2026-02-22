"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {Users, Trophy, ShieldCheck, Sparkles, ArrowRight} from "lucide-react";

import {cn} from "@/lib/cn";
import {easeOut} from "../../../../app/ui/EasyOut";

const CARDS = [
  {
    title: "Społeczność, która ciągnie w górę",
    desc: "Ekipa ludzi z ambicją — od początkujących po zawodników. Wspólny rozwój każdego dnia.",
    icon: Users,
    badge: "ATMOSFERA",
  },
  {
    title: "Sportowe wyniki i prestiż",
    desc: "Starty, medale i świadome przygotowanie pod zawody. Trening ma dawać realny efekt.",
    icon: Trophy,
    badge: "WYNIKI",
  },
  {
    title: "Dyscyplina = wolność",
    desc: "Budujesz charakter i formę, które zostają na lata. To działa także poza salą.",
    icon: ShieldCheck,
    badge: "CHARAKTER",
  },
  {
    title: "Najwyższa jakość szkolenia",
    desc: "Autorskie programy, doświadczeni instruktorzy i profesjonalna struktura treningu.",
    icon: Sparkles,
    badge: "SYSTEM",
  },
] as const;

export default function WhyDanSection() {
  return (
    <section id="dlaczego" className="relative py-14 sm:py-18">
      {/* background wash (pod hero) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_70%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{opacity: 0, y: 14}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.65, ease: easeOut}}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(255,40,40,0.55)]" />
              DLACZEGO DAN
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.75, delay: 0.05, ease: easeOut}}
              className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              To nie jest zwykły klub. To system, który buduje zawodników i
              charakter.
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.12, ease: easeOut}}
              className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Minimalizm w formie. Maksymalna jakość w treningu — plan, progres
              i atmosfera, którą czujesz od pierwszego wejścia.
            </motion.p>
          </div>

          {/* CTA (right) */}
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <motion.div
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.16, ease: easeOut}}
              className="flex flex-col gap-3 sm:flex-row lg:justify-end"
            >
              <Link
                href="/trainings#grafik"
                className={cn(
                  "group inline-flex items-center justify-center rounded-2xl border border-white/10",
                  "bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur",
                  "transition hover:border-white/25 hover:bg-white/10"
                )}
              >
                Sprawdź treningi
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/coaches"
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl border border-white/10",
                  "bg-black/40 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur",
                  "transition hover:border-white/25 hover:bg-white/[0.06]"
                )}
              >
                Poznaj trenerów
              </Link>
            </motion.div>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.6, delay: i * 0.06, ease: easeOut}}
                className="group h-full"
              >
                <div
                  className={cn(
                    "relative h-full overflow-hidden rounded-3xl border border-white/10",
                    "bg-gradient-to-b from-white/[0.06] to-white/[0.03]",
                    "p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
                    "transition-transform duration-300 group-hover:-translate-y-1"
                  )}
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.18),rgba(0,0,0,0)_55%)]" />
                  </div>

                  {/* top row */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/65">
                      {c.badge}
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <div className="text-lg font-extrabold tracking-tight text-white">
                      {c.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {c.desc}
                    </p>
                  </div>

                  {/* divider */}
                  <div className="relative mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

                  {/* micro footer */}
                  <div className="relative mt-4 text-xs tracking-wide text-white/55">
                    Standard LKSW DAN
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

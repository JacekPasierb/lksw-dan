"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {Baby, GraduationCap, Dumbbell, ArrowRight} from "lucide-react";

import {cn} from "@/lib/cn";
import {easeOut} from "../../../../app/ui/EasyOut";

const GROUPS = [
  {
    title: "Dzieci 6–10",
    icon: Baby,
    badge: "START",
    desc: "Koordynacja, sprawność, dyscyplina i dobra zabawa. Bezpieczne wejście w sporty walki.",
    bullets: [
      "Ruch + zabawa",
      "Podstawy techniki",
      "Budowanie pewności siebie",
    ],
    cta: {label: "Zobacz grupy", href: "/trainings#grafik"},
  },
  {
    title: "Młodzież",
    icon: GraduationCap,
    badge: "PROGRES",
    desc: "Technika, kondycja i charakter. Grupy poziomami + opcja przygotowania pod starty.",
    bullets: ["Grupy poziomami", "Praca nad formą", "Ścieżka sportowa"],
    cta: {label: "Sprawdź grafik", href: "/trainings#grafik"},
  },
  {
    title: "Dorośli",
    icon: Dumbbell,
    badge: "FORMA",
    desc: "Trening pod kondycję, sylwetkę i głowę. Rekreacyjnie lub ambitnie — zależnie od celu.",
    bullets: [
      "Kondycja i siła",
      "Redukcja stresu",
      "Technika i sparingi (opcjonalnie)",
    ],
    cta: {label: "Dołącz do grupy", href: "/trainings#grafik"},
  },
] as const;

export default function ForWhoSection() {
  return (
    <>
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.10),transparent_60%)]" />
      </div>

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
              DLA KOGO
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.75, delay: 0.05, ease: easeOut}}
              className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Treningi dla dzieci, młodzieży i dorosłych.
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.12, ease: easeOut}}
              className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Nieważne, czy zaczynasz od zera, czy trenujesz od lat — dobieramy
              grupę i poziom. Rodzice: bezpieczny start i jasne zasady od
              pierwszych zajęć.
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <motion.div
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.16, ease: easeOut}}
            >
              <Link
                href="/trainings#grafik"
                className={cn(
                  "group inline-flex items-center justify-center rounded-2xl border border-white/10",
                  "bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 backdrop-blur",
                  "transition hover:border-white/25 hover:bg-white/10"
                )}
              >
                Zobacz grafik treningów
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
          {GROUPS.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.16),rgba(0,0,0,0)_55%)]" />
                  </div>

                  {/* top */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-white/85" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] tracking-[0.18em] text-white/65">
                      {g.badge}
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <div className="text-lg font-extrabold tracking-tight text-white">
                      {g.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {g.desc}
                    </p>

                    <ul className="mt-4 grid gap-2 text-sm text-white/75">
                      {g.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-[11px] font-bold text-white/80">
                            –
                          </span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

                  <Link
                    href={g.cta.href}
                    className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
                  >
                    {g.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
      </div>
    </>
  );
}

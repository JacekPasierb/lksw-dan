"use client";

import {motion} from "framer-motion";
import {Calendar} from "lucide-react";

import {timeline} from "../data";
import {cn} from "@/lib/cn";
import {easeOut} from "../../../../app/ui/EasyOut";
import {SectionHeader} from "../../../../app/ui/SectionHeader";

export default function TimelineGrid() {
  return (
    <section id="historia" className="relative px-4">
      <div className="mb-12 max-w-3xl">
        <SectionHeader
          eyebrow="OŚ CZASU"
          title="Jak powstawał LKSW DAN"
          desc="Najważniejsze momenty, ludzie i wydarzenia, które zbudowały klub na przestrzeni lat."
        />
      </div>

      {/* oś */}
      <div className="relative">
        {/* linia na mobile (lewa) */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0 lg:hidden" />

        {/* linia na desktop (środek) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/15 to-white/0 lg:block" />

        <div className="grid gap-8">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: easeOut,
                }}
                className={cn(
                  "relative grid gap-4 lg:grid-cols-2 lg:items-center",
                  // desktop: naprzemiennie
                  isLeft ? "" : "lg:[&_.panel]:lg:col-start-2"
                )}
              >
                {/* DOT + łącznik */}
                <div className="pointer-events-none absolute left-4 top-6 lg:left-1/2 lg:-translate-x-1/2">
                  {/* dot */}
                  <div className="relative h-3.5 w-3.5 rounded-full bg-amber-300/90 shadow-[0_0_22px_rgba(255,215,90,0.55)]">
                    <div className="absolute -inset-2 rounded-full bg-amber-300/20 blur-md" />
                  </div>
                </div>

                {/* łącznik do panelu (mobile) */}
                <div className="pointer-events-none absolute left-4 top-6 h-px w-10 bg-gradient-to-r from-amber-300/40 to-transparent lg:hidden" />

                {/* łącznik do panelu (desktop) */}
                <div
                  className={cn(
                    "pointer-events-none absolute top-6 hidden h-px w-16 lg:block",
                    isLeft
                      ? "left-1/2 bg-gradient-to-l from-amber-300/40 to-transparent"
                      : "right-1/2 bg-gradient-to-r from-amber-300/40 to-transparent"
                  )}
                />

                {/* PANEL */}
                <div
                  className={cn(
                    "panel ml-12 lg:ml-0",
                    // desktop: odsunięcie od osi
                    isLeft ? "lg:pr-12" : "lg:pl-12"
                  )}
                >
                  <div
                    className={cn(
                      "group relative overflow-hidden rounded-2xl border border-white/10",
                      "bg-gradient-to-b from-white/[0.06] to-white/[0.03]",
                      "p-6 backdrop-blur transition",
                      "hover:border-white/25 hover:bg-white/[0.06]"
                    )}
                  >
                    {/* glow */}
                    <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,215,90,0.22),rgba(0,0,0,0)_60%)]" />
                    </div>

                    {/* YEAR */}
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/65">
                      <Calendar className="h-4 w-4" />
                      {item.year}
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-3 text-lg font-black tracking-tight text-white sm:text-xl">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* pusty “kolumnowy” placeholder żeby trzymać układ na desktop */}
                <div
                  className={cn(
                    "hidden lg:block",
                    isLeft ? "lg:col-start-2" : "lg:col-start-1"
                  )}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

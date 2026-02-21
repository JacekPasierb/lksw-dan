"use client";

import React from "react";
import {motion} from "framer-motion";
import { SectionHeader } from "../../../../app/ui/SectionHeader";
import { why } from "../data";
import { easeOut } from "../../../../app/ui/EasyOut";
import { Sparkles } from "lucide-react";


export default function WhySection() {
  return (
    <section id="dlaczego" className="relative py-10 sm:py-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Dlaczego DAN?
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            To nie jest zwykły klub. To system szkoleniowy, który buduje
            zawodników i charakter.
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Minimalizm w formie. Maksymalna jakość w treningu — plan, progres i
            atmosfera, którą czujesz od pierwszego wejścia.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <SectionHeader
          eyebrow="DLACZEGO DAN"
          title="To nie jest zwykły klub. To system szkoleniowy, który buduje zawodników i charakter."
          desc="Minimalizm w formie. Maksymalna jakość w treningu — plan, progres i atmosfera, którą czujesz od pierwszego wejścia."
        /> */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 items-stretch my-10">
          {why.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.25}}
              transition={{duration: 0.6, delay: i * 0.06, ease: easeOut}}
              className="group h-full"
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-red-500/15 blur-3xl" />
                  <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-amber-300/10 blur-3xl" />
                </div>

                {/* content */}
                <div className="relative flex flex-col flex-1 items-center justify-center">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
                    <c.icon className="h-5 w-5 text-white/85" />
                  </div>

                  <div className="mt-4 text-lg font-extrabold tracking-tight text-white text-center">
                    {c.title}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-white/70 text-center">
                    {c.desc}
                  </p>

                  {/* footer pinned to bottom */}
                  <div className="mt-auto pt-6 text-xs tracking-wide text-white/50">
                    Standard LKSW DAN
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

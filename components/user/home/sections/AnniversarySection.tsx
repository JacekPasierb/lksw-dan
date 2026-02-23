"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {Award, Calendar} from "lucide-react";

import {cn} from "@/lib/cn";
import {SectionHeader} from "../../../../app/ui/SectionHeader";
import {easeOut} from "../../../../app/ui/EasyOut";

export default function AnniversarySection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/30lecie.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/50 to-black/85"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,40,0.14),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="30 lat tradycji i doświadczenia"
          title="W 2024 roku LKSW DAN obchodził 30-lecie działalności."
        />

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8, ease: easeOut}}
          className={cn(
            "mt-10 rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          )}
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Calendar className="h-4 w-4" />
                Od 1994 roku
              </div>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-white">
                Trzy dekady rozwoju
              </h3>

              <p className="mt-4 leading-relaxed text-white/70">
                Przez 30 lat wychowaliśmy setki zawodników, trenerów i
                pasjonatów sportów walki.
              </p>

              <p className="mt-4 text-sm text-white/65">
                Jubileusz 2024 był dla nas potwierdzeniem, że obrany kierunek
                jest właściwy.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {label: "Lat działalności", value: "30+"},
                {label: "Rok założenia", value: "1994"},
                {label: "Wychowanków", value: "1000+"},
                {label: "Lider szkolenia", value: "Region"},
              ].map((x) => (
                <div
                  key={x.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <Award className="h-6 w-6 text-red-400" />
                  <div className="mt-3 text-2xl font-black text-white">
                    {x.value}
                  </div>
                  <div className="text-xs text-white/60">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

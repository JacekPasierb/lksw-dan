"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {Award, Calendar} from "lucide-react";

import {cn} from "@/lib/cn";
import { SectionHeader } from "../../../../app/ui/SectionHeader";
import { easeOut } from "../../../../app/ui/EasyOut";

export default function AnniversarySection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* FULL-WIDTH BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/30lecie.webp"
          alt="30-lecie LKSW DAN"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/70 to-black/90" />
      <div className="pointer-events-none absolute -inset-10 -z-10 opacity-80 blur-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,40,0.18),transparent_55%)]" />

      {/* optional top/bottom fade to blend with dark sections */}
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />

      {/* CONTENT WRAPPER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            "mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          )}
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* LEFT */}
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
                pasjonatów sportów walki. Budujemy charakter, dyscyplinę i
                pewność siebie — nie tylko na macie, ale i w życiu.
              </p>

              <p className="mt-4 text-sm text-white/65">
                Jubileusz 2024 był dla nas potwierdzeniem, że obrany kierunek
                jest właściwy — profesjonalizm, konsekwencja i pasja.
              </p>
            </div>

            {/* RIGHT */}
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

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight, Camera, Medal, Users} from "lucide-react";

import {cn} from "@/lib/cn";
import {easeOut} from "../../../../app/ui/EasyOut";

type Tile = {
  title: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  tag: string;
};

const TOP_TILES: Tile[] = [
  {
    title: "Zawody",
    desc: "Startujemy regularnie i budujemy pewność w warunkach sportowej presji.",
    icon: Camera,
    image: "/images/achievments/turnee.webp",
    tag: "WYJAZDY",
  },
  {
    title: "Medale",
    desc: "Efekt treningu ma być realny — przygotowanie, forma i wynik.",
    icon: Medal,
    image: "/images/achievments/medale.webp",
    tag: "OSIĄGNIĘCIA",
  },
  {
    title: "Ekipa",
    desc: "Społeczność, która ciągnie w górę. Trening to ludzie i atmosfera.",
    icon: Users,
    image: "/images/achievments/team.webp",
    tag: "KLUB",
  },
];

const GALLERY = [
  {src: "/images/achievments/wyjazd.webp", alt: "Zawody – wyjazd"},
  {src: "/images/achievments/medals.webp", alt: "Medale – podium"},
  {src: "/images/achievments/group.webp", alt: "Zdjęcie grupowe"},
  {src: "/images/achievments/zawody.webp", alt: "Turniej"},
] as const;

export default function AchievementsGallery() {
  return (
    <>
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,40,40,0.10),transparent_60%)]" />
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
              GALERIA / ACHIEVEMENTS
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.75, delay: 0.05, ease: easeOut}}
              className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Zawody, medale i ekipa — dowody, że ten system działa.
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.12, ease: easeOut}}
              className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Trenujemy konsekwentnie, wyjeżdżamy na turnieje i budujemy formę w
              praktyce. A przy okazji — po prostu dobrze się bawimy i trzymamy
              razem.
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
                Dołącz do treningów
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TOP_TILES.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.65, delay: i * 0.06, ease: easeOut}}
                className="group"
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl border border-white/10",
                    "bg-gradient-to-b from-white/[0.06] to-white/[0.03]",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  )}
                >
                  <div className="relative h-[240px] w-full sm:h-[260px]">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),rgba(255,255,255,0)_55%),radial-gradient(circle_at_70%_70%,rgba(255,40,40,0.14),rgba(0,0,0,0)_60%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/85" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[10px] tracking-[0.18em] text-white/70 backdrop-blur">
                      <span className="inline-flex h-2 w-2 rounded-full bg-white/30" />
                      {t.tag}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xl font-black tracking-tight text-white">
                            {t.title}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-white/75">
                            {t.desc}
                          </p>
                        </div>

                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                          <Icon className="h-5 w-5 text-white/85" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute -inset-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.20),rgba(0,0,0,0)_60%)]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>

      <div className="mt-10">
          <div className="text-xs tracking-[0.22em] text-white/60">
            WIĘCEJ ZDJĘĆ
          </div>

          <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{opacity: 0, y: 14}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.6, delay: i * 0.05, ease: easeOut}}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10",
                  "bg-white/[0.03] backdrop-blur"
                )}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75 opacity-75" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-sm font-semibold text-white/90">
                      {img.alt}
                    </div>
                    <div className="mt-1 text-xs text-white/60">LKSW DAN</div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,40,40,0.18),rgba(0,0,0,0)_60%)]" />
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </>
  );
}

"use client";

import React, {useMemo, useState} from "react";
import Link from "next/link";
import {MapPin, PhoneCall} from "lucide-react";
import {cn} from "@/lib/cn";
import {SectionHeader} from "../../../../app/ui/SectionHeader";
import Image from "next/image";

type Coach = {
  name: string;
  rank: string;
  discipline?: string;
  phone: string;
  photo?: string;
};

type ScheduleItem = {
  group: string;
  days: string;
  time: string;
};

type LocationSchedule = {
  key: "leczna" | "swidnik" | "milejow";
  label: string;
  season?: string;
  place: string;
  address: string;
  items: ScheduleItem[];
  coaches: Coach[];
};

const SCHEDULE: LocationSchedule[] = [
  {
    key: "leczna",
    label: "ŁĘCZNA",
    season: "Sezon 2024/25",
    place: "Zespół Szkół Górniczych",
    address: "ul. Bogdanowicza",
    coaches: [
      {
        name: "Emilia Szalak",
        rank: "I dan",
        discipline: "Kickboxing",
        phone: "733 222 537",
        photo: "/images/coaches/szalak.webp",
      },
    ],
    items: [
      {group: "Grupa młodsza", days: "Wt, Czw", time: "16:00 – 17:00"},
      {group: "Grupa średnia", days: "Wt, Czw", time: "17:00 – 18:00"},
      {group: "Grupa starsza", days: "Wt, Czw", time: "18:00 – 19:30"},
    ],
  },
  {
    key: "swidnik",
    label: "ŚWIDNIK",
    place: "Dojang Świdnik",
    address: "ul. Kardynała Stefana Wyszyńskiego 14, I piętro (nad RTV AGD)",
    coaches: [
      {
        name: "Piotr Bernat",
        rank: "VI dan",
        phone: "602 351 585",
        photo: "/images/coaches/bernat.webp",
      },
      {
        name: "Piotr Żołędź",
        rank: "II dan",
        phone: "609 571 274",
        photo: "/images/coaches/zoledz.webp",
      },
    ],
    items: [
      {group: "Grupa dziecięca A", days: "Wt, Czw", time: "16:30 – 17:15"},
      {group: "Grupa dziecięca B", days: "Wt, Czw", time: "17:15 – 18:15"},
      {group: "Grupa dziecięca C", days: "Wt, Czw", time: "18:15 – 19:15"},
      {group: "Grupa dziecięca D", days: "Wt, Czw", time: "19:15 – 20:30"},
      {group: "Młodzieżowa Kickboxing", days: "Pon, Śr", time: "17:00 – 18:30"},
      {
        group: "Zawodnicza starsza Kickboxing/Taekwon-do",
        days: "Pon, Śr, Pt",
        time: "18:30 – 20:00 (Pt także 17:30 – 19:30)",
      },
      {group: "Taekwon-do — klasyka", days: "Pt", time: "17:00 – 18:30"},
      {
        group: "Rekreacyjna dla dorosłych Masters",
        days: "Pon, Śr",
        time: "20:00 – 21:00",
      },
    ],
  },
  {
    key: "milejow",
    label: "MILEJÓW",
    place: "Szkoła Podstawowa w Milejowie",
    address: "Poniedziałki, środy",
    coaches: [
      {
        name: "Łukasz Staiński",
        rank: "I dan",
        phone: "787 612 765",
        photo: "/images/coaches/stainski.webp",
      },
    ],
    items: [
      {group: "Grupa młodsza", days: "Pon, Śr", time: "17:00 – 18:00"},
      {group: "Grupa starsza", days: "Pon, Śr", time: "17:30 – 19:00"},
    ],
  },
];

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative rounded-full border px-4 py-2 text-xs font-semibold transition backdrop-blur",
        active
          ? "border-white/25 bg-white text-black"
          : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10"
      )}
    >
      {children}
    </button>
  );
}

export default function ScheduleSection() {
  const [active, setActive] = useState<LocationSchedule["key"]>("leczna");

  const current = useMemo(
    () => SCHEDULE.find((x) => x.key === active) ?? SCHEDULE[0],
    [active]
  );

  return (
    <section id="grafik" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="GRAFIK"
              title="Wybierz lokalizację i sprawdź trening."
              desc="Aktualny plan tygodnia, grupy i godziny."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {SCHEDULE.map((x) => (
                <Chip
                  key={x.key}
                  active={x.key === active}
                  onClick={() => setActive(x.key)}
                >
                  {x.label}
                </Chip>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
              <div className="text-xs tracking-[0.22em] text-white/60">
                {current.season ?? "LOKALIZACJA"}
              </div>

              <div className="mt-3 text-xl font-black text-white">
                {current.place}
              </div>

              <div className="mt-2 flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                {current.address}
              </div>

              <div className="mt-6">
                <div className="text-xs tracking-[0.22em] text-white/60">
                  {current.coaches.length > 1
                    ? "INSTRUKTORZY PROWADZĄCY"
                    : "INSTRUKTOR PROWADZĄCY"}
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {current.coaches.map((c) => (
                    <div
                      key={c.name}
                      className="flex flex-col items-center rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur transition hover:border-white/25"
                    >
                      {/* PHOTO */}
                      <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/10">
                        {c.photo ? (
                          <Image
                            src={c.photo}
                            alt={c.name}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        ) : null}
                      </div>

                      {/* INFO POD ZDJĘCIEM */}
                      <div className="mt-4 text-center">
                        <div className="text-sm font-semibold text-white">
                          {c.name}
                        </div>
                        <div className="mt-1 text-xs text-white/60">
                          {c.rank}
                          {c.discipline ? ` · ${c.discipline}` : ""}
                        </div>
                      </div>

                      {/* PHONE */}
                      <a
                        href={`tel:${c.phone.replace(/\s+/g, "")}`}
                        className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 transition hover:border-white/25 hover:bg-white/10"
                      >
                        <PhoneCall className="mr-2 h-4 w-4" />
                        {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur">
              <div className="text-2xl font-black text-white">
                Grupy i godziny
              </div>

              <div className="mt-6 grid gap-3">
                {current.items.map((it) => (
                  <div
                    key={it.group}
                    className="flex flex-col rounded-2xl border border-white/10 bg-black/50 px-5 py-4 sm:flex-row sm:justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {it.group}
                      </div>
                      <div className="text-xs text-white/60">{it.days}</div>
                    </div>
                    <div className="text-sm font-semibold text-white/80">
                      {it.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

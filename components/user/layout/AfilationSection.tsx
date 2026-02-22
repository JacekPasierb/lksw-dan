"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {cn} from "@/lib/cn";
import {easeOut} from "../../../app/ui/EasyOut";

type Org = {
  name: string;
  logo: string;
};

const ORGANIZATIONS: Org[] = [
  {
    name: "Polski Związek Kickboxingu",
    logo: "/images/organizations/logo_pzkb.webp",
  },
  {
    name: "ITF Union",
    logo: "/images/organizations/logo_itf.webp",
  },
  {
    name: "LZS",
    logo: "/images/organizations/logo_lzs.webp",
  },
];

export default function AffiliationsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      {/* LIGHT BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,40,40,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,215,90,0.06),transparent_60%)]" />

      {/* TOP FADE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 blur-xl bg-gradient-to-b from-black to-transparent" />

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 blur-xlbg-gradient-to-t from-black to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* LOGOS STRIP */}
        <div className="py-10 grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ORGANIZATIONS.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: easeOut,
              }}
              className="group flex items-center justify-center"
            >
              <div className="relative h-20 w-40 sm:h-24 sm:w-48">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  sizes="200px"
                  className={cn(
                    "object-contain transition-all duration-500",

                    "group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

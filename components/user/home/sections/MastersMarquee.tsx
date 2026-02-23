"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { masters } from "../../history/data";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "../../../../app/ui/EasyOut";

const FEATURED_INTERVAL_MS = 6000;
const FEATURED_GROUP_SIZE = 4;

/** Parsuje "Name – specjalizacja" bez zmiany treści merytorycznej */
function parseMaster(raw: string): { name: string; specialization: string } {
  const sep = " – ";
  const i = raw.indexOf(sep);
  if (i === -1) return { name: raw.trim(), specialization: "" };
  return {
    name: raw.slice(0, i).trim(),
    specialization: raw.slice(i + sep.length).trim(),
  };
}

const parsedMasters = masters.map(parseMaster);

export default function MastersMarquee() {
  const totalGroups = Math.ceil(parsedMasters.length / FEATURED_GROUP_SIZE);
  const [groupIndex, setGroupIndex] = useState(0);
  const start = groupIndex * FEATURED_GROUP_SIZE;
  const featuredFour = parsedMasters.slice(start, start + FEATURED_GROUP_SIZE);

  // Rotacja grupy (po 4 mistrzów)
  useEffect(() => {
    const t = setInterval(() => {
      setGroupIndex((i) => (i + 1) % totalGroups);
    }, FEATURED_INTERVAL_MS);
    return () => clearInterval(t);
  }, [totalGroups]);

  return (
    <>
      {/* ========== TŁO — heritage, głębia ========== */}
      <div className="absolute inset-0 -z-20 bg-[#080808]" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-95"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(220,38,38,0.06) 0%, transparent 50%)",
        }}
      />
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      {/* Subtelny grain (CSS pattern) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Linia czasu: "Od 1996" */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden w-px -translate-y-1/2 lg:block"
        style={{ height: "60%", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
        aria-hidden
      />

      {/* ========== HEADER + "1996" jako element wizualny ========== */}
      <div className="relative">
        {/* Watermark / big number */}
        <div
          className="pointer-events-none absolute -top-4 left-1/2 -z-10 -translate-x-1/2 select-none font-black text-white/[0.04] sm:-top-6"
          style={{ fontSize: "clamp(6rem, 20vw, 14rem)", lineHeight: 1 }}
          aria-hidden
        >
          1996
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2",
            "text-xs tracking-[0.22em] text-white/70 backdrop-blur",
            "lg:absolute lg:left-0 lg:top-0"
          )}
        >
          <span
            className="inline-flex h-2 w-2 rounded-full bg-red-500"
            style={{ boxShadow: "0 0 12px rgba(220,38,38,0.6)" }}
            aria-hidden
          />
          SEMINARIA OD 1996
        </motion.div>

        <div className="mx-auto max-w-3xl text-left lg:pl-0 lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
            className="mt-6 text-balance text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl"
          >
            Wiedza od mistrzów światowego poziomu
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
            className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base"
          >
            Od maja 1996 roku w klubie odbywają się regularne szkolenia z
            zaproszonymi mistrzami i instruktorami z Polski i zagranicy. To
            fundament naszego systemu szkolenia i poziomu sportowego.
          </motion.p>
        </div>
      </div>

      {/* ========== GOŚĆ SPECJALNY — po 4 mistrzów naraz ========== */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
        className="mt-10"
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Wybrani mistrzowie i instruktorzy
          </p>
          <span className="text-[10px] uppercase tracking-wider text-white/40" aria-live="polite">
            {start + 1}–{Math.min(start + FEATURED_GROUP_SIZE, parsedMasters.length)} / {parsedMasters.length}
          </span>
        </div>
        <div
          className={cn(
            "relative min-h-[140px] overflow-hidden rounded-2xl border border-white/15",
            "bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur",
            "transition-colors duration-300",
            "hover:border-white/25 hover:shadow-[0_0_40px_-12px_rgba(220,38,38,0.2)]"
          )}
        >
          <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-red-500/5" aria-hidden />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="relative grid grid-cols-2 gap-3 px-5 py-5 sm:grid-cols-4 sm:gap-4 sm:px-6"
            >
              {featuredFour.map((master) => (
                <div
                  key={master.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <p className="font-semibold tracking-tight text-white">
                    {master.name}
                  </p>
                  {master.specialization ? (
                    <p className="mt-1 text-xs leading-snug text-white/65 line-clamp-2">
                      {master.specialization}
                    </p>
                  ) : null}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

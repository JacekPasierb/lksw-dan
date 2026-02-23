"use client";

import {cn} from "@/lib/cn";
import {masters} from "../../history/data";
import {motion} from "framer-motion";
import {easeOut} from "../../../../app/ui/EasyOut";

export default function MastersMarquee() {
  return (
    <>
      <div className="relative py-2">
          {/* LEFT badge (desktop left), on mobile stays above */}
          <motion.div
            initial={{opacity: 0, y: 14}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.65, ease: easeOut}}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2",
              "text-xs tracking-[0.22em] text-white/70 backdrop-blur",
              "lg:absolute lg:left-0 lg:top-0"
            )}
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(255,40,40,0.55)]" />
            SEMINARIA OD 1996
          </motion.div>

          {/* CENTER content */}
          <div className="mx-auto max-w-3xl text-left lg:text-center">
            <motion.h2
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.75, delay: 0.05, ease: easeOut}}
              className="mt-5 text-balance text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              Wiedza od mistrzów światowego poziomu
            </motion.h2>

            <motion.p
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.3}}
              transition={{duration: 0.7, delay: 0.12, ease: easeOut}}
              className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base"
            >
              Od maja 1996 roku w klubie odbywają się regularne szkolenia z
              zaproszonymi mistrzami i instruktorami z Polski i zagranicy. To
              fundament naszego systemu szkolenia i poziomu sportowego.
            </motion.p>
          </div>
      </div>

      <div className="relative mt-10 space-y-6">
        <MarqueeRow items={masters} direction="left" />
      </div>
    </>
  );
}

/* ================= ROW ================= */

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly string[];
  direction: "left" | "right";
}) {
  return (
    <div className="group relative overflow-hidden">
      <div
        className={cn(
          "flex w-max gap-4 py-2",
          "animate-marquee",
          direction === "right" && "animate-marquee-reverse",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <MasterPill key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

/* ================= PILL ================= */

function MasterPill({text}: {text: string}) {
  return (
    <div
      className={cn(
        "whitespace-nowrap px-5 py-2.5 text-sm font-medium text-white/80",
        "transition"
      )}
    >
      {text}
    </div>
  );
}

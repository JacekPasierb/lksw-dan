"use client";

import {cn} from "@/lib/cn";
import { masters } from "../../history/data";

export default function MastersMarquee() {
  return (
    <section className="relative my-14 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70 backdrop-blur">
            SEMINARIA OD 1996
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Wiedza od mistrzów światowego poziomu
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Od maja 1996 roku w klubie odbywają się regularne szkolenia z
            zaproszonymi mistrzami i instruktorami z Polski i zagranicy. To
            fundament naszego systemu szkolenia i poziomu sportowego.
          </p>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative space-y-6">
        <MarqueeRow items={masters} direction="left" />
      </div>
    </section>
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
        {/* podwajamy listę dla pętli */}
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
        "whitespace-nowrap  ",
        " px-5 py-2.5 text-sm font-medium text-white/80",
        " transition",
        
      )}
    >
      {text}
    </div>
  );
}

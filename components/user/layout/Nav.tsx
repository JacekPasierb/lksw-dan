"use client";

import {useEffect, useId, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X} from "lucide-react";
import MobileMenu from "./MenuMobile";

export default function Nav() {
  const menu = [
    ["Start", "/"],
    ["Dlaczego", "/#dlaczego"],
    ["Trenerzy", "/trainers"],
    ["Treningi", "/trainings"],
    ["Historia", "/historia"],
    ["Kontakt", "#kontakt"],
  ] as const;

  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <nav aria-label="Główna nawigacja" className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between gap-3">
            {/* LOGO */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src="/images/logo.webp"
                  alt="LKSW DAN logo"
                  width={32}
                  height={32}
                />
              </span>

              <div className="leading-tight">
                <div className="text-sm font-extrabold tracking-tight text-white">
                  DAN
                </div>
                <div className="text-[10px] tracking-[0.24em] text-white/55">
                  LKSW DAN · LUBLIN
                </div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-2 md:flex">
              {menu.map(([label, href]) => (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    scroll={!href.includes("#")}
                    className="
          relative inline-flex items-center rounded-full px-3 py-2
          text-xs font-semibold tracking-wide text-white/70
          transition-colors duration-200
          hover:text-white focus-visible:text-white
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25
          before:pointer-events-none before:absolute before:inset-0 before:rounded-full
          before:bg-white/0 before:transition before:duration-300
          group-hover:before:bg-white/5
          after:pointer-events-none after:absolute after:left-3 after:right-3 after:bottom-1.5
          after:h-px after:origin-left after:scale-x-0 after:rounded-full
          after:bg-gradient-to-r after:from-white/0 after:via-white/80 after:to-white/0
          after:transition-transform after:duration-300 after:ease-out
          group-hover:after:scale-x-100
        "
                  >
                    {/* mały „glow dot” */}
                    <span
                      className="
            mr-2 h-1.5 w-1.5 rounded-full bg-white/20
            opacity-0 transition duration-300
            group-hover:opacity-100 group-hover:bg-white/70
          "
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
              {/* HAMBURGER — tylko mobile */}
              <button
                type="button"
                className="inline-flex md:hidden items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/25 hover:bg-white/10"
                aria-label={open ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        open={open}
        panelId={panelId}
        menu={menu}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
}

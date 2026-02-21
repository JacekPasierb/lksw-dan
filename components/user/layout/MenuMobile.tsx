"use client";

import Link from "next/link";
import {Phone, X} from "lucide-react";
import {AnimatePresence, motion, type Variants} from "framer-motion";

type MenuItem = readonly [label: string, href: string];

type Props = {
  open: boolean;
  panelId: string;
  menu: readonly MenuItem[];
  onClose: () => void;
  phoneHref?: string;
  phoneLabel?: string;
};

export default function MobileMenu({
  open,
  panelId,
  menu,
  onClose,
  phoneHref = "tel:+48602351585",
  phoneLabel = "Zadzwoń teraz",
}: Props) {
  const overlayV: Variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.18}},
    exit: {opacity: 0, transition: {duration: 0.15}},
  };

  const drawerV: Variants = {
    hidden: {opacity: 0, y: -8, scale: 0.985, filter: "blur(6px)"},
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {duration: 0.22, ease: [0.2, 0.8, 0.2, 1]},
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.985,
      filter: "blur(6px)",
      transition: {duration: 0.16},
    },
  };

  const listV: Variants = {
    hidden: {},
    show: {transition: {staggerChildren: 0.06, delayChildren: 0.05}},
    exit: {transition: {staggerChildren: 0.03, staggerDirection: -1}},
  };

  const itemV: Variants = {
    hidden: {opacity: 0, x: -10, filter: "blur(6px)"},
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {duration: 0.22, ease: [0.2, 0.8, 0.2, 1]},
    },
    exit: {
      opacity: 0,
      x: -10,
      filter: "blur(6px)",
      transition: {duration: 0.12},
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {/* overlay */}
          <motion.button
            aria-label="Zamknij menu"
            className="absolute inset-0 bg-black/55"
            variants={overlayV}
            onClick={onClose}
          />

          {/* drawer */}
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            className="absolute left-0 right-0 top-0 mx-4 mt-4 rounded-3xl border border-white/10 bg-black/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-black/50"
            variants={drawerV}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-[0.22em] text-white/60">
                MENU
              </div>

              <button
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-white/25 hover:bg-white/10"
                aria-label="Zamknij menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.ul
              className="mt-3 grid gap-1"
              variants={listV}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {menu.map(([label, href]) => (
                <motion.li key={href} variants={itemV}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className="
  group relative block overflow-hidden rounded-2xl
  px-4 py-4 text-base font-semibold tracking-wide text-white/80
  transition-all duration-200
  hover:text-white active:text-white
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25

  before:pointer-events-none before:absolute before:inset-0
  before:bg-white/0 before:transition before:duration-300
  group-hover:before:bg-white/8
  active:before:bg-white/10

  after:pointer-events-none after:absolute after:left-4 after:right-4 after:bottom-2
  after:h-px after:origin-left after:scale-x-0 after:rounded-full
  after:bg-gradient-to-r after:from-white/0 after:via-white/90 after:to-white/0
  after:transition-transform after:duration-300
  group-hover:after:scale-x-100
  active:after:scale-x-100
"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <span
                        className="
      h-2 w-2 rounded-full bg-white/25
      opacity-0 transition duration-300
      group-hover:opacity-100 group-hover:bg-white/80
      group-active:opacity-100
    "
                        aria-hidden
                      />
                      {label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="mt-4" variants={itemV}>
              <a
                href={phoneHref}
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-4 text-base font-bold text-black transition hover:bg-white/90"
                aria-label="Zadzwoń: +48 602 351 585"
              >
                <Phone className="mr-2 h-5 w-5" />
                {phoneLabel}
              </a>
            </motion.div>

            <div className="mt-3 text-center text-[11px] text-white/45">
              LKSW DAN · Lublin
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

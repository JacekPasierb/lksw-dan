"use client";

import {useEffect, useState} from "react";
import {motion, useSpring} from "framer-motion";
import {ChevronsUp} from "lucide-react";
import {cn} from "@/lib/cn";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressSpring = useSpring(progress, {stiffness: 120, damping: 20});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = scrollTop / docHeight;

      setProgress(scrolled);
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const size = 60;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{opacity: 0, scale: 0.8}}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{duration: 0.3}}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
        className={cn(
          "group relative flex items-center justify-center",
          "h-[60px] w-[60px] rounded-full",
          "border border-white/15 bg-white/[0.04] backdrop-blur",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
          "transition-all duration-300",
          "hover:border-white/30 hover:bg-white/[0.08]"
        )}
      >
        {/* Progress ring */}
        <svg width={size} height={size} className="absolute inset-0 -rotate-90">
          <circle
            stroke="rgba(255,255,255,0.1)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            stroke="rgb(239 68 68)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset:
                circumference - progressSpring.get() * circumference,
            }}
          />
        </svg>

        {/* Inner icon */}
        <ChevronsUp className="relative z-10 h-5 w-5 text-white/80 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* subtle glow */}
        <div className="pointer-events-none absolute -inset-4 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,40,40,0.25),transparent_60%)]" />
      </button>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

type MotionAccentProps = {
  variant?: "ring" | "signal" | "sweep";
  className?: string;
};

export function MotionAccent({ variant = "ring", className = "" }: MotionAccentProps) {
  if (variant === "signal") {
    return (
      <div className={`pointer-events-none relative h-52 overflow-hidden border border-moss/12 bg-chalk/45 ${className}`}>
        <div className="absolute inset-0 grid-lines opacity-40" />
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="absolute left-6 right-6 h-px bg-gradient-to-r from-transparent via-oxide/70 to-transparent"
            initial={{ y: 26 + index * 54, opacity: 0.28 }}
            animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.22, 0.7, 0.22] }}
            transition={{ duration: 5.5 + index, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <motion.div
          className="absolute bottom-8 left-8 h-12 w-12 rounded-full border border-moss/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.65, 0.24, 0.65] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === "sweep") {
    return (
      <div className={`pointer-events-none relative h-44 overflow-hidden bg-moss ${className}`}>
        <div className="absolute inset-0 dark-grid-lines opacity-35" />
        <motion.div
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-mist/40 to-transparent"
          animate={{ x: ["-40%", "520%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-8 top-8 h-20 w-20 rounded-full border border-mist/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none relative h-56 overflow-hidden ${className}`}>
      <motion.div
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mist/55"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-oxide/45"
        animate={{ rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moss" />
    </div>
  );
}

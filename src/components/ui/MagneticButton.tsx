"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "dark" | "light";
};

export function MagneticButton({
  children,
  variant = "dark",
  className = "",
  ...props
}: MagneticButtonProps) {
  const styles =
    variant === "dark"
      ? "border-carbon bg-carbon text-chalk hover:bg-moss"
      : "border-chalk/35 bg-chalk text-carbon hover:bg-mist";

  return (
    <motion.a
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-300 ${styles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.7} />
    </motion.a>
  );
}

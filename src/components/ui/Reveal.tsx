"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { reveal } from "@/lib/animation";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

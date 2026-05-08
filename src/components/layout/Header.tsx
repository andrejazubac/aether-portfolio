"use client";

import { motion } from "framer-motion";
import { navigation, studio } from "@/data/studio";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 mix-blend-difference md:px-10"
    >
      <nav className="mx-auto flex max-w-[1560px] items-center justify-between text-chalk">
        <a href="#" className="group flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-chalk transition-transform duration-300 group-hover:scale-150" />
          <span className="text-sm font-medium">{studio.name}</span>
        </a>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-label text-chalk/75 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-chalk"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${studio.email}`}
          className="text-xs uppercase tracking-label text-chalk/80 transition-colors duration-300 hover:text-chalk"
        >
          Inquiry
        </a>
      </nav>
    </motion.header>
  );
}

"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { navigation, studio } from "@/data/studio";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, setLang, t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 mix-blend-difference md:px-10"
    >
      <nav className="mx-auto flex max-w-[1560px] items-center justify-between text-chalk">
        <a href={isHome ? "#" : "/"} className="group flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-chalk transition-transform duration-300 group-hover:scale-150" />
          <span className="text-sm font-medium">{studio.name}</span>
        </a>
        
        <div className="hidden items-center gap-7 text-xs uppercase tracking-label text-chalk/75 md:flex">
          {navigation.map((item) => {
            const isHash = item.href.startsWith("#");
            const href = isHash && !isHome ? `/${item.href}` : item.href;
            
            // Look up localized labels
            const labelKey = `nav.${item.label.toLowerCase()}`;
            const label = t(labelKey);

            return (
              <a
                key={item.href}
                href={href}
                className="transition-colors duration-300 hover:text-chalk"
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          {/* Global Language Toggle Switcher */}
          <div className="inline-flex rounded-full border border-chalk/18 bg-chalk/5 p-0.5 text-[9px] font-semibold tracking-wider uppercase text-chalk">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-all duration-300 ${
                lang === "en"
                  ? "bg-chalk text-carbon font-bold"
                  : "text-chalk/50 hover:text-chalk"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("sr")}
              className={`rounded-full px-2.5 py-1 transition-all duration-300 ${
                lang === "sr"
                  ? "bg-chalk text-carbon font-bold"
                  : "text-chalk/50 hover:text-chalk"
              }`}
            >
              SR
            </button>
          </div>

          <a
            href={`mailto:${studio.email}`}
            className="text-xs uppercase tracking-label text-chalk/80 transition-colors duration-300 hover:text-chalk"
          >
            {t("nav.inquiry")}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

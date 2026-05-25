"use client";

import { useLanguage } from "@/context/LanguageContext";
import { studio } from "@/data/studio";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-porcelain px-5 py-8 text-carbon/50 md:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-4 border-t border-carbon/10 pt-8 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-carbon/75">{studio.name} / {studio.founder}</p>
        <p>{t("footer.manifesto")}</p>
      </div>
    </footer>
  );
}

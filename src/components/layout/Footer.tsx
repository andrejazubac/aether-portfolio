import { studio } from "@/data/studio";

export function Footer() {
  return (
    <footer className="bg-carbon px-5 py-8 text-chalk md:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-4 border-t border-chalk/12 pt-8 text-sm text-chalk/55 md:flex-row md:items-center md:justify-between">
        <p>{studio.name} / {studio.founder}</p>
        <p>Premium digital products, systems, and web experiences.</p>
      </div>
    </footer>
  );
}

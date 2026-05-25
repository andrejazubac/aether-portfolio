export interface PricingPackage {
  index: string;
  title: string;
  subtitle?: string;
  target: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  cta: string;
  badge?: string;
  popular?: boolean;
}

export interface LaunchPackage {
  id: string;
  title: string;
  initialCost: string;
  initialLabel: string;
  price: string;
  pricePeriod: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingData = {
  en: {
    toggles: {
      oneTime: "One-Time Custom Development",
      boost: "Monthly Business Boost",
      monthly: "Monthly",
      yearly: "Yearly (Save 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investment Structure",
        title: "Transparent pricing built for performance.",
        description: "Select custom development for a tailored, high-end platform or leverage our monthly boost plans for continuous product engineering and growth."
      },
      launchHeader: {
        tag: "Elite Partnership Program",
        title: "Aether Launch.",
        subtitle: "Zero € Upfront. Continuous Engineering.",
        description: "We build your premium digital platform with zero initial development cost. Secure your place under a rolling monthly membership covering continuous optimization, enterprise hosting, and technical support. Contract term: 12 months minimum.",
        scarcity: "Limited to 3 clients monthly to preserve premium build quality.",
        statusActive: "Active slots: 1 remaining for this month"
      }
    },
    oneTime: [
      {
        index: "01",
        title: "Core Experience",
        subtitle: "Premium Showcase",
        target: "Local businesses and professionals seeking an ultra-fast, tailored showcase presence.",
        price: "450€ – 600€",
        pricePeriod: "One-time investment",
        features: [
          "Up to 5 custom-designed editorial pages",
          "Next.js / React performance optimization",
          "Responsive layouts (Mobile-first standard)",
          "Fundamental SEO architecture & metadata",
          "WhatsApp and email contact form integration",
          "Production build ready for hosting deployment"
        ],
        cta: "Deploy Core Experience"
      },
      {
        index: "02",
        title: "Motion Studio",
        subtitle: "Interactive Brand",
        target: "Premium brands and startups aiming to stand out via custom motion, storytelling, and emotion.",
        price: "800€ – 1,200€",
        pricePeriod: "One-time investment",
        badge: "Recommended",
        popular: true,
        features: [
          "Everything in Core Experience",
          "Framer Motion interactive orchestrations",
          "Fluid custom page transitions",
          "Scroll-driven storytelling layouts",
          "Premium micro-animations (Apple & Stripe inspired)",
          "Lottie & high-performance asset optimization"
        ],
        cta: "Deploy Motion Experience"
      },
      {
        index: "03",
        title: "Aether WOW",
        subtitle: "Cinematic Immersive",
        target: "Enterprise clients and premium portfolios seeking award-winning, boundary-pushing interfaces.",
        price: "1,800€+",
        pricePeriod: "Custom quote",
        features: [
          "Unlimited custom pages and structural sections",
          "Advanced WebGL / HTML5 Canvas motion elements",
          "Custom interactive UI/UX shader layers",
          "Tailored CMS setup (Sanity or headless Wordpress)",
          "Deep integration with CRM & custom API platforms",
          "Direct creative director support & full testing runs"
        ],
        cta: "Request Cinematic Concept"
      }
    ] as PricingPackage[],
    retainers: [
      {
        index: "01",
        title: "Essential Care",
        subtitle: "Maintenance & Stability",
        target: "For businesses wanting peace of mind, reliable hosting, and basic content adjustments.",
        price: "60€",
        pricePeriod: "month",
        features: [
          "Premium hosting & domain registration included",
          "Enterprise SSL security certificate",
          "Daily automated backups (30-day retention)",
          "Active server uptime monitoring & firewalls",
          "Up to 2 hours of copy/image updates per month",
          "Standard email support response (24h)"
        ],
        cta: "Select Essential Care"
      },
      {
        index: "02",
        title: "Growth & SEO",
        subtitle: "Performance & Visibility",
        target: "For local leaders wanting to capture search traffic and continuously improve conversions.",
        price: "120€",
        pricePeriod: "month",
        badge: "Most Popular",
        popular: true,
        features: [
          "Everything in Essential Care",
          "Local SEO optimization & local map rankings",
          "Google Business Profile optimization strategy",
          "Competitor keyword tracking & industry analysis",
          "Monthly Google Analytics & Search Console report",
          "Up to 5 hours of design & code improvements / mo"
        ],
        cta: "Select Growth & SEO"
      },
      {
        index: "03",
        title: "Smart Business",
        subtitle: "AI Ops & Automation",
        target: "For modern organizations wanting to automate leads, bookings, and operations using AI.",
        price: "250€",
        pricePeriod: "month",
        features: [
          "Everything in Growth & SEO",
          "Custom AI Lead-capture Chatbot integration",
          "Automated reservations (Viber/WhatsApp triggers)",
          "Direct integration with central CRM or spreadsheets",
          "Operational intelligence checkups & updates",
          "Up to 10 hours of premium engineering updates / mo"
        ],
        cta: "Select Smart Business"
      }
    ] as PricingPackage[],
    launch: [
      {
        id: "launch-core",
        title: "Launch Core",
        initialCost: "0€ Upfront",
        initialLabel: "Instead of 500€ creation cost",
        price: "55€",
        pricePeriod: "month",
        features: [
          "Custom Next.js design & build (0€ creation)",
          "Hosting, SSL, security checks, & daily backups",
          "Rolling support & maintenance (12m min contract)"
        ],
        cta: "Apply for Launch Core"
      },
      {
        id: "launch-growth",
        title: "Launch & Growth",
        initialCost: "0€ Upfront",
        initialLabel: "Instead of 500€ creation cost",
        price: "95€",
        pricePeriod: "month",
        popular: true,
        features: [
          "Custom Next.js design & build (0€ creation)",
          "Local SEO rankings & monthly traffic analytics",
          "Up to 5h design/code updates (12m min contract)"
        ],
        cta: "Apply for Launch & Growth"
      }
    ] as LaunchPackage[]
  },
  sr: {
    toggles: {
      oneTime: "Jednokratni Razvoj",
      boost: "Mesečni Poslovni Boost",
      monthly: "Mesečno",
      yearly: "Godišnje (Ušteda 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investiciona Struktura",
        title: "Transparentne cene kreirane za rast.",
        description: "Izaberite jednokratni razvoj za prilagođenu, unikatnu platformu ili iskoristite naše mesečne pakete za kontinualni inženjering, SEO i poslovni rast."
      },
      launchHeader: {
        tag: "Elitni Program Partnerstva",
        title: "Aether Launch.",
        subtitle: "0€ Inicijalno. Kontinualni Inženjering.",
        description: "Izrađujemo vašu premium digitalnu platformu bez ikakvih početnih troškova razvoja. Obezbedite mesto uz mesečnu članarinu koja pokriva optimizaciju, hosting i tehničku podršku. Minimalno trajanje ugovora: 12 meseci.",
        scarcity: "Ograničeno na 3 klijenta mesečno kako bismo zadržali premium kvalitet izrade.",
        statusActive: "Aktivna mesta: još 1 preostalo za ovaj mesec"
      }
    },
    oneTime: [
      {
        index: "01",
        title: "Core Experience",
        subtitle: "Prezentacione Platforme",
        target: "Lokalni biznisi i profesionalci koji žele ultra-brzu, prilagođenu prezentaciju visokog kvaliteta.",
        price: "450€ – 600€",
        pricePeriod: "Jednokratna investicija",
        features: [
          "Do 5 unikatno dizajniranih stranica",
          "Next.js / React optimizacija za maksimalne performanse",
          "Prilagođeno mobilnim uređajima (Mobile-first standard)",
          "Osnovna SEO struktura i konfiguracija metapodataka",
          "Integracija kontakt formi i WhatsApp dugmeta za brzu komunikaciju",
          "Proizvodni kod spreman za postavljanje na hosting"
        ],
        cta: "Izaberi Core Experience"
      },
      {
        index: "02",
        title: "Motion Studio",
        subtitle: "Napredne Animacije",
        target: "Premium brendovi, ordinacije i kompanije koje žele da se izdvoje kroz interakciju, emociju i fluidnost.",
        price: "800€ – 1.200€",
        pricePeriod: "Jednokratna investicija",
        badge: "Preporučeno",
        popular: true,
        features: [
          "Sve obuhvaćeno u Core Experience paketu",
          "Framer Motion interaktivne orkestracije na sajtu",
          "Fluidni prelazi između stranica bez kašnjenja",
          "Narativni raspored elemenata vođen skrolovanjem (Scroll-storytelling)",
          "Premium mikro-animacije (inspirisane Apple i Stripe interfejsom)",
          "Optimizacija slika i video materijala za GPU akceleraciju"
        ],
        cta: "Izaberi Motion Studio"
      },
      {
        index: "03",
        title: "Aether WOW",
        subtitle: "Immersive Cinematic",
        target: "Klijenti koji traže umetnički nivo dizajna, nagrađivana rešenja i napredne vizuelne sisteme.",
        price: "1.800€+",
        pricePeriod: "Upit za ponudu",
        features: [
          "Neograničen broj stranica i strukturnih sekcija",
          "Napredne WebGL / HTML5 Canvas animacije i 3D elementi",
          "Jedinstveni interaktivni UI/UX slojevi rađeni po meri",
          "Implementacija prilagođenog CMS sistema (Sanity ili headless WordPress)",
          "Povezivanje sa CRM softverima i spoljnim API servisima",
          "Direktna saradnja sa kreativnim direktorom tokom celog procesa"
        ],
        cta: "Zatraži Cinematic Koncept"
      }
    ] as PricingPackage[],
    retainers: [
      {
        index: "01",
        title: "Essential Care",
        subtitle: "Održavanje i Stabilnost",
        target: "Za preduzeća koja žele bezbedan i stabilan sajt, uključen hosting i brze ispravke sadržaja.",
        price: "60€",
        pricePeriod: "mesec",
        features: [
          "Premium hosting i registracija domena uključeni u cenu",
          "Sigurnosni SSL sertifikat",
          "Svakodnevne automatske rezervne kopije (backup na 30 dana)",
          "Aktivno praćenje dostupnosti servera (uptime) i zaštita od napada",
          "Do 2 sata mesečno za ažuriranje tekstova ili zamenu slika",
          "Tehnička podrška putem emaila sa odgovorom u roku od 24h"
        ],
        cta: "Izaberi Essential Care"
      },
      {
        index: "02",
        title: "Growth & SEO",
        subtitle: "Pozicioniranje i Rast",
        target: "Za lokalne lidere (restorane, ordinacije, salone) koji žele prva mesta na Google pretragama i veći broj klijenata.",
        price: "120€",
        pricePeriod: "mesec",
        badge: "Najpopularniji",
        popular: true,
        features: [
          "Sve obuhvaćeno u Essential Care paketu",
          "Lokalna SEO optimizacija i pozicioniranje na Google Maps",
          "Strategija upravljanja Google Business profilom",
          "Praćenje ključnih reči konkurencije i mesečne analize tržišta",
          "Mesečni izveštaj iz Google analitike i Search Console alata",
          "Do 5 sati mesečno za dizajnerska i programska unapređenja sajta"
        ],
        cta: "Izaberi Growth & SEO"
      },
      {
        index: "03",
        title: "Smart Business",
        subtitle: "AI i Automatizacija",
        target: "Za napredne biznise koji žele automatsku obradu upita, rezervacije i povezivanje sa CRM-om.",
        price: "250€",
        pricePeriod: "mesec",
        features: [
          "Sve obuhvaćeno u Growth & SEO paketu",
          "Integracija AI Asistenta (Chatbota) obučenog za vaš biznis",
          "Automatizovani sistemi rezervacije i notifikacija (Viber/WhatsApp)",
          "Povezivanje sa CRM bazom podataka ili centralnim tabelama",
          "Optimizacija poslovnih tokova i stalno prilagođavanje AI modela",
          "Do 10 sati mesečno za napredne programske izmene i nove funkcionalnosti"
        ],
        cta: "Izaberi Smart Business"
      }
    ] as PricingPackage[],
    launch: [
      {
        id: "launch-core",
        title: "Launch Core",
        initialCost: "0€ Početni Trošak",
        initialLabel: "Umesto 500€ za izradu sajta",
        price: "55€",
        pricePeriod: "mesec",
        features: [
          "Izrada Next.js sajta (0€ trošak izrade)",
          "Uključen hosting, SSL, backup i tehnička podrška",
          "Jednostavno održavanje (ugovor min. 12 meseci)"
        ],
        cta: "Apliciraj za Launch Core"
      },
      {
        id: "launch-growth",
        title: "Launch & Growth",
        initialCost: "0€ Početni Trošak",
        initialLabel: "Umesto 500€ za izradu sajta",
        price: "95€",
        pricePeriod: "mesec",
        popular: true,
        features: [
          "Izrada Next.js sajta (0€ trošak izrade)",
          "Lokalni SEO, Google Maps i analize konkurencije",
          "Do 5 sati izmena mesečno (ugovor min. 12 meseci)"
        ],
        cta: "Apliciraj za Launch & Growth"
      }
    ] as LaunchPackage[]
  }
};

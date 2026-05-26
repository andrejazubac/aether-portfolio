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
      aLaCarte: "A-La-Carte Services",
      monthly: "Monthly",
      yearly: "Yearly (Save 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investment Structure",
        title: "Transparent pricing built for performance.",
        description: "Select custom development for a tailored, high-end platform, leverage our monthly support plans, or hire us for individual standalone branding and engineering projects."
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
    "index": "01",
    "title": "Core Identity & Web",
    "subtitle": "Showcase & Brand Kit",
    "target": "Brands seeking to establish visual authority logo assets and a fast custom landing presence.",
    "price": "800€ – 1.200€",
    "pricePeriod": "One-time investment",
    "features": [
      "Full Brand Identity (Logo design color palette custom type selection)",
      "Bespoke Next.js editorial website (up to 5 pages)",
      "Mobile-first responsive layouts & GPU acceleration",
      "Fundamental SEO architecture & metadata setup",
      "WhatsApp and direct email contact integration",
      "Production-ready build optimized for quick rendering"
    ],
    "cta": "Deploy Core Identity"
  },
  {
    "index": "02",
    "title": "Motion & E-commerce",
    "subtitle": "Shopify & Web Apps",
    "target": "Startups and online stores seeking custom design visual content and seamless checkouts.",
    "price": "1.500€ – 2.500€",
    "pricePeriod": "One-time investment",
    "features": [
      "Everything in Core Identity & Web",
      "Custom E-commerce setup (Shopify / WooCommerce custom theme)",
      "Visual Content direction & custom media asset optimization",
      "Fluid Framer Motion page transitions & micro-interactions",
      "Checkout funnel optimization & automated transactional mail",
      "Up to 10 custom editorial layouts built for conversions"
    ],
    "cta": "Deploy Motion Store",
    "badge": "Recommended",
    "popular": true
  },
  {
    "index": "03",
    "title": "Cinematic Enterprise",
    "subtitle": "Custom Apps & WebGL",
    "target": "High-end portfolios and digital systems requiring custom mobile apps and WebGL visuals.",
    "price": "3.500€+",
    "pricePeriod": "Custom quote",
    "features": [
      "Custom iOS & Android mobile application development (Flutter / React Native)",
      "Advanced WebGL / HTML5 Canvas 3D elements & cinematic shaders",
      "Headless CMS & Headless E-commerce setup (Sanity / Shopify Storefront)",
      "Unlimited custom pages and full design language components",
      "Direct integration with central CRM and custom API pipelines",
      "Dedicated creative director alignment & full testing cycles"
    ],
    "cta": "Request Cinematic Concept"
  }
] as PricingPackage[],
    retainers: [
  {
    "index": "01",
    "title": "Essential Care",
    "subtitle": "Uptime & Maintenance",
    "target": "For businesses wanting peace of mind reliable hosting and basic adjustments.",
    "price": "80€",
    "pricePeriod": "month",
    "features": [
      "Premium hosting & domain registration included",
      "Enterprise SSL security certificate & firewalls",
      "Daily automated backups (30-day retention)",
      "Active server uptime monitoring & malware protection",
      "Up to 2 hours of copy/image updates per month",
      "Standard technical support response (24h)"
    ],
    "cta": "Select Essential Care"
  },
  {
    "index": "02",
    "title": "Branding & SEO Boost",
    "subtitle": "SEO & Brand Assets",
    "target": "For local leaders looking to rank on search engines and continuously update brand materials.",
    "price": "180€",
    "pricePeriod": "month",
    "features": [
      "Everything in Essential Care",
      "Local SEO optimization & Google Maps ranking audits",
      "Visual Content support & Brand asset updates (newsletters banners mockups)",
      "Competitor keyword tracking & local industry analysis",
      "Monthly Google Analytics & Search Console growth reports",
      "Up to 6 hours of custom design & programming improvements / mo"
    ],
    "cta": "Select Branding & SEO",
    "badge": "Most Popular",
    "popular": true
  },
  {
    "index": "03",
    "title": "E-commerce & App Ops",
    "subtitle": "AI Ops & Custom Apps",
    "target": "For modern organizations wanting to automate checkout operations and maintain mobile apps.",
    "price": "350€",
    "pricePeriod": "month",
    "features": [
      "Everything in Branding & SEO Boost",
      "Continuous E-commerce checkout audits & funnel optimizations",
      "Custom AI Agent workflow integrations for leads/tasks",
      "WhatsApp / Viber booking & customer notification triggers",
      "Direct syncing with central CRM database or spreadsheets",
      "Up to 12 hours of custom software & mobile app updates / mo"
    ],
    "cta": "Select App & E-commerce Ops"
  }
] as PricingPackage[],
    launch: [
  {
    "id": "launch-core",
    "title": "Launch Core",
    "initialCost": "0€ Upfront",
    "initialLabel": "Instead of 500€ creation cost",
    "price": "55€",
    "pricePeriod": "month",
    "features": [
      "Custom Next.js design & build (0€ creation)",
      "Hosting SSL security checks & daily backups",
      "Rolling support & maintenance (12m min contract)"
    ],
    "cta": "Apply for Launch Core"
  },
  {
    "id": "launch-growth",
    "title": "Launch & Growth",
    "initialCost": "0€ Upfront",
    "initialLabel": "Instead of 500€ creation cost",
    "price": "95€",
    "pricePeriod": "month",
    "features": [
      "Custom Next.js design & build (0€ creation)",
      "Local SEO rankings & monthly traffic analytics",
      "Up to 5h design/code updates (12m min contract)"
    ],
    "cta": "Apply for Launch & Growth",
    "popular": true
  }
] as LaunchPackage[],
    aLaCarte: [
  {
    "index": "01",
    "title": "Brand Identity Kit",
    "subtitle": "Visual Identity Only",
    "target": "For companies needing logo guidelines colors and key assets without web development.",
    "price": "400€",
    "pricePeriod": "One-time investment",
    "features": [
      "Bespoke logo design variations",
      "Custom color palette & typography pairings",
      "Comprehensive brand guidelines document",
      "Social media templates (banners & post grids)",
      "Business card & stationery templates",
      "Full print & digital high-res exports"
    ],
    "cta": "Order Brand Identity"
  },
  {
    "index": "02",
    "title": "Visual Content Shoot",
    "subtitle": "Creative Photography",
    "target": "For brands needing high-end product lifestyle and campaign assets.",
    "price": "450€",
    "pricePeriod": "One-time investment",
    "features": [
      "Creative direction & campaign storyboard",
      "High-res studio product photography (up to 15 assets)",
      "Lifestyle & campaign setting shoots",
      "Advanced photo editing & lighting corrections",
      "Optimized digital formats for web & Instagram"
    ],
    "cta": "Order Visual Content"
  },
  {
    "index": "03",
    "title": "Bespoke Landing Page",
    "subtitle": "One-Page Platform",
    "target": "For rapid launches focused on one core offer high conversion and SEO.",
    "price": "350€",
    "pricePeriod": "One-time investment",
    "features": [
      "Bespoke editorial one-page layout",
      "Next.js / React performance infrastructure",
      "Responsive layouts optimized for GPU acceleration",
      "Essential SEO setup & metadata tags",
      "WhatsApp & contact form pipeline integration"
    ],
    "cta": "Order Landing Page"
  },
  {
    "index": "04",
    "title": "AI Lead Automation Flow",
    "subtitle": "Intelligent Chat Automation",
    "target": "For businesses looking to automate inboxes Viber/WhatsApp lead capture and CRM pipeline.",
    "price": "300€",
    "pricePeriod": "One-time investment",
    "features": [
      "Custom AI agent trained on your business data",
      "Automated WhatsApp/Viber notification setup",
      "Lead collection triggers & direct CRM database sync",
      "Operational dashboard & custom sheets logging",
      "Testing & edge-case conversation handling"
    ],
    "cta": "Order AI Automation"
  }
] as PricingPackage[]
  },
  sr: {
    toggles: {
      oneTime: "Jednokratni Razvoj",
      boost: "Mesečni Poslovni Boost",
      aLaCarte: "Pojedinačne Usluge",
      monthly: "Mesečno",
      yearly: "Godišnje (Ušteda 15%)"
    },
    sections: {
      pricingHeader: {
        tag: "Investiciona Struktura",
        title: "Transparentne cene kreirane za rast.",
        description: "Izaberite jednokratni razvoj za unikatnu platformu, iskoristite naše mesečne pakete ili nas angažujte za pojedinačne usluge dizajna i programiranja."
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
    "index": "01",
    "title": "Core Identity & Web",
    "subtitle": "Showcase i Identitet",
    "target": "Brendovi koji žele da postave vizuelni autoritet logotip i brzu prilagođenu prezentaciju.",
    "price": "800€ – 1.200€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Kompletan vizuelni identitet (Dizajn logotipa paleta boja selekcija fontova)",
      "Unikatan Next.js sajt po meri (do 5 stranica)",
      "Prilagođeno mobilnim uređajima i GPU ubrzanje animacija",
      "Osnovna SEO struktura i metapodaci",
      "Integracija WhatsApp-a i direktnih kontakt formi",
      "Proizvodni kod optimizovan za brzo učitavanje"
    ],
    "cta": "Izaberi Core Identity"
  },
  {
    "index": "02",
    "title": "Motion & E-commerce",
    "subtitle": "Shopify i Aplikacije",
    "target": "Startapi i online prodavnice koji žele unikatni dizajn kreiranje vizuelnog sadržaja i stabilno plaćanje.",
    "price": "1.500€ – 2.500€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Sve obuhvaćeno u Core Identity & Web paketu",
      "Izrada E-commerce prodavnica ( Shopify ili WooCommerce kodirana tema )",
      "Art direkcija i optimizacija vizuelnog sadržaja za prodavnicu",
      "Fluidni prelazi između stranica i Framer Motion mikro-interakcije",
      "Optimizacija toka plaćanja i automatske poruke kupcima",
      "Do 10 prilagođenih stranica strukturisanih za prodaju"
    ],
    "cta": "Izaberi Motion Store",
    "badge": "Preporučeno",
    "popular": true
  },
  {
    "index": "03",
    "title": "Cinematic Enterprise",
    "subtitle": "WebGL i Mobilne Aplikacije",
    "target": "Klijenti koji traže unikatne mobilne aplikacije i napredne WebGL 3D sisteme.",
    "price": "3.500€+",
    "pricePeriod": "Upit za ponudu",
    "features": [
      "Razvoj mobilnih aplikacija za iOS i Android (Flutter / React Native)",
      "Napredne WebGL / HTML5 Canvas 3D animacije i šejderi",
      "Headless CMS i headless e-commerce (Sanity / Shopify Storefront)",
      "Neograničen broj stranica i kompletan sistem komponenti",
      "Povezivanje sa CRM bazama i eksternim API tokovima",
      "Direktna saradnja sa kreativnim direktorom i puni QA testovi"
    ],
    "cta": "Zatraži Cinematic Koncept"
  }
] as PricingPackage[],
    retainers: [
  {
    "index": "01",
    "title": "Essential Care",
    "subtitle": "Bezbednost i Održavanje",
    "target": "Za preduzeća koja žele uključen hosting SSL sertifikat i osnovne ispravke koda.",
    "price": "80€",
    "pricePeriod": "mesec",
    "features": [
      "Premium hosting i domen uključeni u cenu",
      "Uključen SSL sertifikat i zaštita od pretnji",
      "Automatske rezervne kopije svakog dana (čuvanje 30 dana)",
      "Aktivno praćenje dostupnosti servera i zaštita od napada",
      "Do 2 sata mesečno za ažuriranje tekstova ili zamenu slika",
      "Tehnička podrška putem emaila sa odgovorom u roku od 24h"
    ],
    "cta": "Izaberi Essential Care"
  },
  {
    "index": "02",
    "title": "Branding & SEO Boost",
    "subtitle": "Brend i Pozicioniranje",
    "target": "Za klijente koji žele prva mesta na pretrazi i kontinuirano osvežavanje brend materijala.",
    "price": "180€",
    "pricePeriod": "mesec",
    "features": [
      "Sve obuhvaćeno u Essential Care paketu",
      "Lokalna SEO optimizacija i pozicioniranje na Google mapama",
      "Podrška za vizuelni sadržaj i izrada brend grafika (newsletter-i baneri)",
      "Praćenje ključnih reči konkurenata i analiza lokalnog tržišta",
      "Mesečni Google Analytics i Search Console izveštaji o rastu",
      "Do 6 sati mesečno za programerska i dizajnerska unapređenja"
    ],
    "cta": "Izaberi Branding & SEO",
    "badge": "Najpopularniji",
    "popular": true
  },
  {
    "index": "03",
    "title": "E-commerce & App Ops",
    "subtitle": "AI i Podrška Aplikacijama",
    "target": "Za organizacije koje žele automatizaciju prodaje i održavanje mobilnih aplikacija.",
    "price": "350€",
    "pricePeriod": "mesec",
    "features": [
      "Sve obuhvaćeno u Branding & SEO Boost paketu",
      "Redovne provere korpe i optimizacije procesa kupovine",
      "Integracija prilagođenih AI agenata za pomoć pri radu",
      "Sistemi automatske rezervacije i obaveštenja (Viber / WhatsApp)",
      "Direktna sinhronizacija sa centralnom bazom klijenta",
      "Do 12 sati mesečno za izmene na softveru ili mobilnim aplikacijama"
    ],
    "cta": "Izaberi E-commerce & App Ops"
  }
] as PricingPackage[],
    launch: [
  {
    "id": "launch-core",
    "title": "Launch Core",
    "initialCost": "0€ Početni Trošak",
    "initialLabel": "Umesto 500€ za izradu sajta",
    "price": "55€",
    "pricePeriod": "mesec",
    "features": [
      "Izrada Next.js sajta (0€ trošak izrade)",
      "Uključen hosting SSL backup i tehnička podrška",
      "Jednostavno održavanje (ugovor min. 12 meseci)"
    ],
    "cta": "Apliciraj za Launch Core"
  },
  {
    "id": "launch-growth",
    "title": "Launch & Growth",
    "initialCost": "0€ Početni Trošak",
    "initialLabel": "Umesto 500€ za izradu sajta",
    "price": "95€",
    "pricePeriod": "mesec",
    "features": [
      "Izrada Next.js sajta (0€ trošak izrade)",
      "Lokalni SEO Google Maps i analize konkurencije",
      "Do 5 sati izmena mesečno (ugovor min. 12 meseci)"
    ],
    "cta": "Apliciraj za Launch & Growth",
    "popular": true
  }
] as LaunchPackage[],
    aLaCarte: [
  {
    "index": "01",
    "title": "Brend Identitet Paket",
    "subtitle": "Samo Identitet Brenda",
    "target": "Za kompanije kojima su potrebni logotip pravila boja i grafički resursi bez izrade sajta.",
    "price": "400€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Dizajn unikatnog logotipa i varijacija",
      "Prilagođena paleta boja i selekcija fontova",
      "Knjiga grafičkih standarda (Brandbook)",
      "Šabloni za društvene mreže (baneri i objave)",
      "Dizajn vizit karti i memorandum dokumenata",
      "Izvoz fajlova visoke rezolucije za štampu i digital"
    ],
    "cta": "Poruči Identitet Brenda"
  },
  {
    "index": "02",
    "title": "Kreiranje Vizuelnog Sadržaja",
    "subtitle": "Kreativna Fotografija",
    "target": "Za brendove kojima su potrebne vrhunske slike proizvoda lifestyle i reklamni resursi.",
    "price": "450€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Kreativna direkcija i planiranje kampanje",
      "Fotografisanje proizvoda u studiju (do 15 slika)",
      "Lifestyle i terensko slikanje u odgovarajućem ambijentu",
      "Napredna obrada slika i korekcije svetla",
      "Optimizovani formati slika za sajt i Instagram"
    ],
    "cta": "Poruči Vizuelni Sadržaj"
  },
  {
    "index": "03",
    "title": "Landing Stranica po Meri",
    "subtitle": "Brza Jednostrana Prezentacija",
    "target": "Za brza lansiranja fokusirana na jednu glavnu ponudu visoku konverziju i SEO.",
    "price": "350€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Unikatan editorijalni izgled jedne stranice",
      "Next.js / React infrastruktura za maksimalne performanse",
      "GPU ubrzanje i optimizacija za sve ekrane",
      "Osnovni SEO parametri i metapodaci",
      "Integracija kontakt formi i WhatsApp dugmeta"
    ],
    "cta": "Poruči Landing Stranicu"
  },
  {
    "index": "04",
    "title": "AI Tok za Upite i Rezervacije",
    "subtitle": "Pametni Tokovi Rezervacija",
    "target": "Za biznise koji žele automatizaciju inboxa prikupljanje upita i CRM sinhronizaciju.",
    "price": "300€",
    "pricePeriod": "Jednokratna investicija",
    "features": [
      "Prilagođeni AI agent obučen na vašim podacima",
      "Automatizovano slanje obaveštenja (WhatsApp/Viber)",
      "Okidači za upite i sinhronizacija sa CRM bazom",
      "Tabelarni prikaz i logovanje svih razgovora",
      "Testiranje rada i pokrivanje specifičnih scenarija"
    ],
    "cta": "Poruči AI Automatizaciju"
  }
] as PricingPackage[]
  }
};

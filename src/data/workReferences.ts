export type WorkReference = {
  index: string;
  title: string;
  category: "Motion" | "Refreshing" | "Professional";
  tone: string;
  url: string;
  awwwardsUrl: string;
  image: string;
  description: string;
  alignment: string;
  tags: string[];
};

export const currentProjects = [
  {
    index: "00",
    title: "Royal Construction",
    category: "Current project",
    location: "Russia",
    url: "https://royal-website-nine.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
    description:
      "A premium construction, interior design, and renovation website for residential and commercial spaces in Russia.",
    role:
      "Digital presence direction, frontend experience, premium service positioning, and conversion-focused website structure.",
    alignment:
      "Aligned with Aether through luxury service presentation, architectural atmosphere, calm pacing, and high-trust visual composition.",
    tags: ["Construction", "Interior design", "Renovation", "Russia"]
  },
  {
    index: "01",
    title: "Beauty Boom Plus",
    category: "Current project",
    location: "Novi Sad, Serbia",
    url: "https://beautyboomplus.vercel.app/",
    image: "https://beautyboomplus.vercel.app/beauty-boom-campaign.png",
    description:
      "A premium hair and beauty salon website for a feminine studio experience, built around elegance, atmosphere, and booking intent.",
    role:
      "Digital experience direction, cinematic salon presentation, responsive frontend, service storytelling, and premium conversion flow.",
    alignment:
      "Aligned with Aether through luxury service design, emotional visual direction, smooth motion, and high-end brand positioning.",
    tags: ["Hair salon", "Beauty studio", "Novi Sad", "Booking"]
  }
];

export const workReferences: WorkReference[] = [
  {
    index: "01",
    title: "Obys Agency",
    category: "Motion",
    tone: "Cinematic agency system",
    url: "https://obys.agency",
    awwwardsUrl: "https://www.awwwards.com/sites/obys",
    image: "https://assets.awwwards.com/awards/submissions/2019/12/5e04713de91c3272559552.jpg",
    description:
      "A sharp creative studio presence with bold editorial rhythm, confident pacing, and motion-led transitions.",
    alignment:
      "Aligned with Aether through cinematic presentation, strong art direction, and a studio-first narrative.",
    tags: ["Editorial motion", "Agency", "Cinematic"]
  },
  {
    index: "02",
    title: "Build in Amsterdam",
    category: "Professional",
    tone: "Product studio clarity",
    url: "https://www.buildinamsterdam.com",
    awwwardsUrl: "https://www.awwwards.com/sites/build-in-amsterdam",
    image: "https://assets.awwwards.com/awards/screenshots/2014/05/5376144a927b9.jpeg",
    description:
      "A mature digital product studio reference with restrained hierarchy, confident spacing, and work-led credibility.",
    alignment:
      "Aligned with Aether through premium product engineering positioning and structured studio communication.",
    tags: ["Product studio", "UX clarity", "Premium"]
  },
  {
    index: "03",
    title: "Instrument",
    category: "Professional",
    tone: "Technology-led brand",
    url: "https://www.instrument.com",
    awwwardsUrl: "https://www.awwwards.com/sites/instrument",
    image: "https://assets.awwwards.com/awards/submissions/2017/09/59ccac11a1518.jpg",
    description:
      "A polished technology and brand studio reference with enterprise confidence and elegant digital storytelling.",
    alignment:
      "Aligned with Aether through technical authority, strategic product language, and premium UX restraint.",
    tags: ["Technology", "Strategy", "Studio"]
  },
  {
    index: "04",
    title: "Studio Tyrsa",
    category: "Refreshing",
    tone: "Creative identity craft",
    url: "https://www.studiotyrsa.com",
    awwwardsUrl: "https://www.awwwards.com/sites/studio-tyrsa",
    image: "https://assets.awwwards.com/awards/submissions/2025/09/68da56a7daaa3799677515.jpg",
    description:
      "A visual identity-led reference with expressive typography, personality, and refined creative direction.",
    alignment:
      "Aligned with Aether through craft, taste, and a visual language that feels authored instead of templated.",
    tags: ["Typography", "Identity", "Creative"]
  },
  {
    index: "05",
    title: "Local Studio",
    category: "Refreshing",
    tone: "Minimal creative freshness",
    url: "https://localstudio.fr",
    awwwardsUrl: "https://www.awwwards.com/sites/local-studio",
    image: "https://assets.awwwards.com/awards/submissions/2024/06/665d54271b446950098230.png",
    description:
      "A clean creative studio reference with modern composition, fresh visual rhythm, and confident white space.",
    alignment:
      "Aligned with Aether through minimalism, clarity, and studio personality without visual noise.",
    tags: ["Minimal", "Fresh", "Studio"]
  },
  {
    index: "06",
    title: "Una",
    category: "Refreshing",
    tone: "Soft immersive editorial",
    url: "https://www.awwwards.com/sites/una-1",
    awwwardsUrl: "https://www.awwwards.com/sites/una-1",
    image: "https://assets.awwwards.com/awards/submissions/2024/03/65ee216da932a611902905.jpg",
    description:
      "A calm, immersive reference with editorial pacing and an atmosphere that feels more crafted than conventional.",
    alignment:
      "Aligned with Aether through refreshing mood, soft pacing, and premium negative space.",
    tags: ["Editorial", "Atmosphere", "Calm"]
  },
  {
    index: "07",
    title: "Atelier Brzozowski",
    category: "Professional",
    tone: "Architectural elegance",
    url: "https://www.awwwards.com/sites/atelier-brzozowski",
    awwwardsUrl: "https://www.awwwards.com/sites/atelier-brzozowski",
    image: "https://assets.awwwards.com/awards/submissions/2024/09/66d5891199c6a233477539.jpg",
    description:
      "A refined atelier reference with architectural restraint, tactile composition, and high-end pacing.",
    alignment:
      "Aligned with Aether through atelier positioning, premium composition, and disciplined creative direction.",
    tags: ["Atelier", "Architecture", "Luxury"]
  },
  {
    index: "08",
    title: "Serenity Hair Salon",
    category: "Refreshing",
    tone: "Calm luxury service",
    url: "https://serenityhairblaxland.com.au/",
    awwwardsUrl: "https://www.awwwards.com/sites/serenity-hair-salon-blaxland",
    image: "https://assets.awwwards.com/awards/submissions/2025/08/68a562ea909a2211875397.jpg",
    description:
      "A service-business reference with calm luxury cues, soft rhythm, and elevated visual confidence.",
    alignment:
      "Aligned with Aether through premium service presentation and a softer, more human emotional tone.",
    tags: ["Luxury service", "Calm", "Brand"]
  },
  {
    index: "09",
    title: "Active Theory",
    category: "Motion",
    tone: "Interactive technology energy",
    url: "https://activetheory.net",
    awwwardsUrl: "https://www.awwwards.com/sites/active-theory-v4",
    image: "https://assets.awwwards.com/awards/submissions/2018/01/5a668eddce6d7.png",
    description:
      "A motion and interactive technology reference with strong spatial energy and experimental digital craft.",
    alignment:
      "Aligned with Aether through advanced interaction, technical ambition, and signature motion language.",
    tags: ["Interactive", "Motion", "Technology"]
  },
  {
    index: "10",
    title: "Cuberto",
    category: "Motion",
    tone: "Interactive product energy",
    url: "https://cuberto.com",
    awwwardsUrl: "https://www.awwwards.com/sites/cuberto",
    image: "https://assets.awwwards.com/awards/submissions/2018/06/5b1a57e7ec034.png",
    description:
      "A creative technology and digital product reference with fluid interaction, motion confidence, and bold presentation.",
    alignment:
      "Aligned with Aether through product energy, motion-led storytelling, and non-generic experience design.",
    tags: ["Interactive", "Product", "Creative tech"]
  }
];

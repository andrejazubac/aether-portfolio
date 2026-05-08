const screenshot = (url: string) =>
  `https://image.thum.io/get/width/1600/crop/1050/noanimate/${url}`;

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

export const workReferences: WorkReference[] = [
  {
    index: "01",
    title: "Obys Agency",
    category: "Motion",
    tone: "Cinematic agency system",
    url: "https://obys.agency",
    awwwardsUrl: "https://www.awwwards.com/sites/obys-agency",
    image: screenshot("https://obys.agency"),
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
    image: screenshot("https://www.buildinamsterdam.com"),
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
    awwwardsUrl: "https://www.awwwards.com/sites/instrument-1",
    image: screenshot("https://www.instrument.com"),
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
    image: screenshot("https://www.studiotyrsa.com"),
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
    image: screenshot("https://localstudio.fr"),
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
    image: screenshot("https://www.awwwards.com/sites/una-1"),
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
    image: screenshot("https://www.awwwards.com/sites/atelier-brzozowski"),
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
    url: "https://www.awwwards.com/sites/serenity-hair-salon-blaxland",
    awwwardsUrl: "https://www.awwwards.com/sites/serenity-hair-salon-blaxland",
    image: screenshot("https://www.awwwards.com/sites/serenity-hair-salon-blaxland"),
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
    image: screenshot("https://activetheory.net"),
    description:
      "A motion and interactive technology reference with strong spatial energy and experimental digital craft.",
    alignment:
      "Aligned with Aether through advanced interaction, technical ambition, and signature motion language.",
    tags: ["Interactive", "Motion", "Technology"]
  },
  {
    index: "10",
    title: "Resn",
    category: "Motion",
    tone: "Experimental digital craft",
    url: "https://resn.co.nz",
    awwwardsUrl: "https://www.awwwards.com/sites/resn",
    image: screenshot("https://resn.co.nz"),
    description:
      "An experimental studio reference known for playful but precise digital experiences and immersive interaction.",
    alignment:
      "Aligned with Aether through creative technology, memorable interaction, and non-generic experience design.",
    tags: ["Experimental", "Immersive", "Creative tech"]
  }
];

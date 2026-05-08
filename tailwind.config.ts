import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11110F",
        carbon: "#181816",
        porcelain: "#F3F0EA",
        chalk: "#FBFAF7",
        stone: "#B8B0A4",
        moss: "#26382D",
        oxide: "#A65F3E",
        mist: "#CBD8DC"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      letterSpacing: {
        label: "0.12em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 15, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

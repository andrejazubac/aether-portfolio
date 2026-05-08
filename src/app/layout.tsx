import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aether-studio.dev"),
  title: {
    default: "Aether Studio | Premium Digital Studio",
    template: "%s | Aether Studio"
  },
  description:
    "Aether Studio is a premium digital studio by Andreja Zubac, building refined products, AI-powered systems, and cinematic web experiences.",
  keywords: [
    "Aether Studio",
    "Andreja Zubac",
    "premium digital studio",
    "product engineering",
    "AI automation",
    "creative technology",
    "Next.js developer"
  ],
  authors: [{ name: "Andreja Zubac", url: "mailto:andreja.zubac.work@gmail.com" }],
  creator: "Andreja Zubac",
  openGraph: {
    title: "Aether Studio | Premium Digital Studio",
    description:
      "Refined digital products, intelligent systems, and cinematic web experiences.",
    url: "https://aether-studio.dev",
    siteName: "Aether Studio",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#11110F",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

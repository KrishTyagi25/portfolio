import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Krish Sharma | Full-Stack Developer",
  description:
    "B.Tech CSE student and full-stack developer crafting high-performance web experiences. Passionate about React, Node.js, DSA, and interactive UIs.",
  keywords: [
    "Krish Sharma",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "B.Tech CSE",
  ],
  authors: [{ name: "Krish Sharma" }],
  openGraph: {
    title: "Krish Sharma | Full-Stack Developer",
    description: "Building digital experiences that live at the intersection of performance and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} bg-background text-text-primary antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
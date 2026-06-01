import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faisal Khan | Mobility & AI Engineering Lead",
  description:
    "12+ years in software development. Expert in AI Agent Development, Generative AI Integration, LLM Tooling (Claude, Gemini, Cursor), React Native, Android, Flutter, React, Capacitor, Java, JavaScript, SQLite, and MongoDB.",
  keywords: [
    "AI Agent Development",
    "Generative AI Integration",
    "LLM Tooling",
    "React Native",
    "Android",
    "Flutter",
    "React",
    "Capacitor",
    "Java",
    "JavaScript",
    "SQLite",
    "MongoDB",
    "Faisal Khan",
    "GlobalLogic",
  ],
  authors: [{ name: "Mohd Faisal Khan" }],
  openGraph: {
    title: "Faisal Khan | Mobility & AI Engineering Lead",
    description:
      "12+ years building mobile, web & agentic AI solutions, from banking apps to generative-AI-powered development pipelines.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

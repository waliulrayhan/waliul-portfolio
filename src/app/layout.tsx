import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waliul Rayhan - Full Stack Developer",
  description: "Full Stack Developer & UI/UX Enthusiast crafting digital experiences that make a difference. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: ["Waliul Rayhan", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Developer", "UI/UX"],
  authors: [{ name: "Waliul Rayhan" }],
  creator: "Waliul Rayhan",
  openGraph: {
    type: "website",
    title: "Waliul Rayhan - Full Stack Developer",
    description: "Full Stack Developer & UI/UX Enthusiast crafting digital experiences that make a difference.",
    url: "https://waliulrayhan.dev",
    siteName: "Waliul Rayhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waliul Rayhan - Full Stack Developer",
    description: "Full Stack Developer & UI/UX Enthusiast crafting digital experiences that make a difference.",
    creator: "@waliulrayhan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${greatVibes.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

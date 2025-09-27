import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

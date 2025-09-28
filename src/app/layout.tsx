import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Font configurations
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

// Site configuration
const SITE_CONFIG = {
  name: "Waliul Rayhan",
  title: "Waliul Rayhan - Full Stack Developer & UI/UX Enthusiast",
  description: "Passionate Full Stack Developer & UI/UX Enthusiast crafting innovative digital experiences with React, Next.js, TypeScript, and modern web technologies. Building the future, one line of code at a time.",
  url: "https://waliulrayhan.vercel.app",
  image: "/images/og-image.jpg",
  creator: {
    name: "Waliul Rayhan",
    email: "waliulrayhan@gmail.com",
    twitter: "@waliulrayhan",
    github: "https://github.com/waliulrayhan",
    linkedin: "https://www.linkedin.com/in/waliulrayhan/",
    facebook: "https://www.facebook.com/waliulrayhan",
  },
keywords: [
  "Md. Waliul Islam Rayhan",
  "Md Waliul Islam Rayhan",
  "Mohammad Waliul Islam Rayhan",
  "Mohammed Waliul Islam Rayhan",
  "Mohd. Waliul Islam Rayhan",

  "Md. Waliul Islam",
  "Md Waliul Islam",
  "Mohammad Waliul Islam",
  "Mohammed Waliul Islam",
  "Mohd. Waliul Islam",

  "Waliul Islam Rayhan",
  "Waliul Rayhan",
  "Rayhan Waliul Islam",
  "Md. Waliul Rayhan",
  "Md Waliul Rayhan",

  "Waliul Islam",
  "Waliul",
  "Rayhan",

  "Full Stack Developer",
  "Web Developer",
  "Mobile Application Developer",
  "Mobile App Developer",
  "App Developer",
  "Software Engineer",

  "Portfolio",
  "Personal Website",
  "Developer Portfolio",
  "Programming",
  "Coding",
  "Tech Enthusiast"
],
} as const;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [
    { 
      name: SITE_CONFIG.creator.name,
      url: SITE_CONFIG.url,
    }
  ],
  creator: SITE_CONFIG.creator.name,
  publisher: SITE_CONFIG.creator.name,
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Full Stack Developer`,
        type: "image/jpeg",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.creator.twitter,
    images: [SITE_CONFIG.image],
  },
  
  // Additional metadata
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  
  // Icons and manifest
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3b82f6" },
    ],
  },
  manifest: "/site.webmanifest",
  
  // Additional SEO
  category: "technology",
  classification: "Portfolio Website",
  
  // Verification
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code from Google Search Console
    // other: {
    //   "msvalidate.01": "your-bing-verification-code", // For Bing Webmaster Tools
    // },
  },
  
  // Additional structured data for SEO
  other: {
    "google-site-verification": "your-google-verification-code",
    "application-name": "Waliul Rayhan Portfolio",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#ffffff",
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className="overflow-x-hidden scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable} 
          ${greatVibes.variable} 
          font-sans 
          antialiased 
          overflow-x-hidden 
          bg-white 
          text-slate-900
        `}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main 
            className="flex-grow overflow-x-hidden"
            role="main"
            id="main-content"
          >
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}

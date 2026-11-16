import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://boaappstudio.com"),
  title: {
    default: "Boa Apps Studio – Privacy-Focused Mobile Apps",
    template: "%s | Boa Apps Studio",
  },
  description: "Transparent, privacy-focused mobile apps from Boa Apps Studio, including Fake Incoming Call - Prank.",
  keywords: ["mobile apps", "privacy focused", "productivity tools", "clean software", "android apps", "prank apps", "Boa Apps Studio"],
  authors: [{ name: "Boa Apps Studio" }],
  creator: "Boa Apps Studio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boaappstudio.com",
    title: "Boa Apps Studio",
    description: "Transparent, privacy-focused mobile apps from Boa Apps Studio, including Fake Incoming Call - Prank.",
    siteName: "Boa Apps Studio",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Boa Apps Studio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boaappstudio",
    title: "Boa Apps Studio",
    description: "Transparent, privacy-focused mobile apps from Boa Apps Studio, including Fake Incoming Call - Prank.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-slate-50 text-slate-900`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

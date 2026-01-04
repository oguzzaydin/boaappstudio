import type { Metadata } from "next";
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
  metadataBase: new URL("https://boaappstudio.com"), // Replace with actual domain
  title: {
    default: "Boa App Studio – Privacy-Focused Mobile Apps",
    template: "%s | Boa App Studio",
  },
  description: "Transparent, privacy-first mobile apps including prank tools and kids games.",
  keywords: ["mobile apps", "privacy focused", "productivity tools", "clean software", "ios apps", "android apps", "prank apps", "kids games"],
  authors: [{ name: "Boa App Studio" }],
  creator: "Boa App Studio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boaappstudio.com",
    title: "Boa App Studio",
    description: "Transparent, privacy-focused tools designed for everyday productivity.",
    siteName: "Boa App Studio",
    images: [{
      url: "/og-image.jpg", // Needs to be created or assumed
      width: 1200,
      height: 630,
      alt: "Boa App Studio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boa App Studio",
    description: "Transparent, privacy-focused tools designed for everyday productivity.",
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
      </body>
    </html>
  );
}

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

export const metadata = {
  metadataBase: new URL("https://www.karmils.com"),

  title: {
    default: "Karmil Streams – Phase-Oriented Paradigm of Continuous Systems",
    template: "%s | Karmil Streams"
  },

  description:
    "Karmil Streams is a phase-oriented theoretical framework for continuous dynamic systems, emphasizing phase coherence as structural invariant. Includes Stream Analyzer research platform.",

  keywords: [
    "Karmil Streams",
    "phase theory",
    "continuous systems",
    "phase coherence",
    "structural stability",
    "stream ontology",
    "Stream Analyzer",
    "systems theory",
    "dynamic systems",
    "coherence modeling"
  ],

  authors: [
    { name: "Karmil Streams" }
  ],

  openGraph: {
    title: "Karmil Streams",
    description:
      "A phase-oriented paradigm of continuous systems. Unified architecture of streams and coherence-based diagnostics.",
    url: "https://www.karmils.com",
    siteName: "Karmil Streams",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Karmil Streams",
    description:
      "Phase-oriented paradigm of continuous systems."
  },

  robots: {
    index: true,
    follow: true
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

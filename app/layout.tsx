import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const euclidCircular = localFont({
  src: "./fonts/EuclidCircularB-Regular.ttf",
  variable: "--font-euclid",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bildare",
    template: "%s | Bildare",
  },
  description:
    "Bildare is a platform offering UI kits, templates, and design systems for Web 2, Web 3, and AI-focused applications. Designed for both designers and developers, delivering coded components and Figma resources.",
  keywords: [
    "UI kits",
    "design systems",
    "Figma resources",
    "coded components",
    "Web3 UI",
    "AI UI kits",
    "frontend templates",
    "Bildare",
  ],
  authors: [{ name: "Bildare" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
<body
  className={`${euclidCircular.className} antialiased bg-[#1c1d19] text-[#ffffff] min-h-screen flex flex-col`}
>
  {/* Top Purple Beam */}
  <div className="w-full h-5 bg-[#9F71E6]" />

  <Navbar />

  {/* Offset content so it doesn't slide under sticky navbar */}
  <main className="pt-40 flex-1 px-2">
    {children}
  </main>

  {/* Bottom Purple Beam */}
  <div className="w-full h-5 bg-[#9F71E6]" />
</body>
    </html>
  );
}
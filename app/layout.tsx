import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshavardan Naidu | Backend Engineer",
  description:
    "Backend Engineer building iGaming platforms with Node.js, PostgreSQL, and Redis. APIs, payment integrations, affiliate systems, and transaction processing.",
  keywords: [
    "Backend Engineer",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "API Development",
    "iGaming",
  ],
  authors: [{ name: "Harshavardan Naidu" }],
  openGraph: {
    title: "Harshavardan Naidu | Backend Engineer",
    description:
      "Backend Engineer experienced in iGaming platforms, integrations, and transaction systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <BackgroundEffects />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}

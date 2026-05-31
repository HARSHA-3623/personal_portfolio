import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { MouseGlow } from "@/components/MouseGlow";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable}`}
    >
      <body className={`${manrope.className} antialiased`}>
        <BackgroundEffects />
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}

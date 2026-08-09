import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const spaceGrotesk = Space_Grotesk({
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
    "Backend Engineer building APIs, integrations, and transaction systems for iGaming platforms with Node.js, PostgreSQL, Redis, and AWS.",
  keywords: [
    "Backend Engineer",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Bull Queue",
    "API Development",
    "iGaming",
  ],
  authors: [{ name: "Harshavardan Naidu" }],
  openGraph: {
    title: "Harshavardan Naidu | Backend Engineer",
    description:
      "Backend Engineer focused on APIs, integrations, and backend services for iGaming platforms.",
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
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body className={`${manrope.className} antialiased`}>
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}

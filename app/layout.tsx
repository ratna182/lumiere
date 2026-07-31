import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Jost,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lumiere — Atelier of Timeless Wedding Invitations",
  description:
    "Cinematic, luxury digital wedding invitations. A bespoke invitation experience for the most beautiful day of your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${jost.variable} ${pinyon.variable} bg-noir font-sans text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

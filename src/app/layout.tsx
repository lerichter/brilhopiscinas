import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brilho Piscinas | Manutenção e Produtos",
    template: "%s | Brilho Piscinas",
  },
  description:
    "Manutenção, tratamento, assistência técnica, produtos e soluções para manter sua piscina sempre limpa, segura e pronta para aproveitar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
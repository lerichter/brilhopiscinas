import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

      {googleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />

          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(googleAnalyticsId)});
            `}
          </Script>
        </>
      ) : null}
    </html>
  );
}

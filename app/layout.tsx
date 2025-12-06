import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { BitrixWidget } from "@/components/BitrixWidget";
import { ThreeCXWidget } from "@/components/ThreeCXWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iamet | Avigilon Premier Partner",
  description: "Premier Channel Partner de Avigilon en Baja California. Soluciones de videovigilancia y control de acceso de alta gama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <BitrixWidget />
        {/* <ThreeCXWidget /> */}

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2VZXNDKWQH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2VZXNDKWQH');
          `}
        </Script>
      </body>
    </html>
  );
}

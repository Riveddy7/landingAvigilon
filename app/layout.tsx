import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BitrixWidget } from "@/components/BitrixWidget";
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
      </body>
    </html>
  );
}

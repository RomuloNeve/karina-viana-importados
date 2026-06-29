import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CartDrawer } from "@/components/cart/CartDrawer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Karina Viana Importados | Cosméticos e Beleza Premium",
    template: "%s | Karina Viana Importados",
  },
  description:
    "Descubra produtos de beleza importados com qualidade premium. Perfumes, maquiagem, skincare e muito mais. Entrega para todo o Brasil.",
  keywords: [
    "cosméticos importados",
    "perfumes importados",
    "maquiagem",
    "skincare",
    "beleza",
    "Karina Viana",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Karina Viana Importados",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-pearl text-brown-dark antialiased">
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

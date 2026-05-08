import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
import './globals.css';

// Yazı tipini projenin ruhuna uygun (modern ve temiz) ayarlıyoruz
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Vedat Usta ile 10+ yıllık tecrübe. Ankara'da her marka motosiklet için profesyonel tamir, bakım ve 7/24 yol yardım hizmeti.",
  keywords: ["motosiklet tamiri", "ankara motor ustası", "ayaz moto", "motosiklet bakım"],
  authors: [{ name: "Ayaz Moto Garaj" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased selection:bg-red-600 selection:text-white`}>
        {/* Navigasyon */}
        <Header />

        {/* Sayfa İçerikleri */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Sabit Araçlar */}
        <WhatsAppChat />

        {/* Alt Bilgi */}
        <Footer />
      </body>
    </html>
  );
}
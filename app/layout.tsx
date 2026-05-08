import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppChat from "./components/WhatsAppChat"; 
import './globals.css'; 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="bg-[#0A0A0A] antialiased">
        <Header />
        {children}
        <WhatsAppChat /> 
        <Footer />
      </body>
    </html>
  );
}
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LegalModalsProvider } from "./components/LegalModalsProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-navy-900 overflow-x-hidden">
      <Navbar />
      <main className="pt-[76px]">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <LegalModalsProvider />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { UnitySection } from "@/components/UnitySection";
import { ProductsSection } from "@/components/ProductsSection";
import { AltaSection } from "@/components/AltaSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ModalProvider } from "@/components/ModalContext";
import { BottomContactSection } from "@/components/BottomContactSection";
import { LeadFormModal } from "@/components/LeadFormModal";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <TrustSection />
        <UnitySection />
        <ProductsSection />
        <AltaSection />
        <PainPoints />
        <BottomContactSection />
        <Footer />
        <MobileStickyBar />
        <LeadFormModal />
      </main>
    </ModalProvider>
  );
}

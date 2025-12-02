import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { UnitySection } from "@/components/UnitySection";
import { ProductsSection } from "@/components/ProductsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { AltaSection } from "@/components/AltaSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { BottomContactSection } from "@/components/BottomContactSection";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { LeadFormModal } from "@/components/LeadFormModal";
import { ModalProvider } from "@/components/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <TrustSection />
        <ComparisonSection />
        <UnitySection />
        <AltaSection />
        <ProductsSection />
        <PainPoints />
        <BottomContactSection />
        <Footer />
        <MobileStickyBar />
        <LeadFormModal />
      </main>
    </ModalProvider>
  );
}

"use client";

import { useState } from "react";
import { Hero } from "@/components/new/Hero";
import { Problem } from "@/components/new/Problem";
import { PracticeAreas } from "@/components/new/PracticeAreas";
import { Marketplaces } from "@/components/new/Marketplaces";
import { Solution } from "@/components/new/Solution";
import { Authority } from "@/components/new/Authority";
import { Differentials } from "@/components/new/Differentials";
import { Testimonials } from "@/components/new/Testimonials";
import { FAQ } from "@/components/new/FAQ";
import { FinalCTA } from "@/components/new/FinalCTA";
import {
  LegalModal,
  PrivacyPolicyContent,
  TermsOfUseContent,
  CookiesPolicyContent,
} from "@/components/new/LegalModals";

type ModalType = "privacy" | "terms" | "cookies" | null;

export function HomePage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900 overflow-x-hidden">
      <main>
        <Hero />
        <Problem />
        <PracticeAreas />
        <Marketplaces />
        <Solution />
        <Authority />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <LegalModal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title="Política de Privacidade e LGPD"
      >
        <PrivacyPolicyContent />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        title="Termos de Uso"
      >
        <TermsOfUseContent />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "cookies"}
        onClose={() => setActiveModal(null)}
        title="Política de Cookies"
      >
        <CookiesPolicyContent />
      </LegalModal>
    </div>
  );
}

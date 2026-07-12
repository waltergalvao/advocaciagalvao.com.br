"use client";

import { useState, useEffect } from "react";
import {
  LegalModal,
  PrivacyPolicyContent,
  TermsOfUseContent,
  CookiesPolicyContent,
  ParceriasContent,
  BlogContent,
} from "./LegalModals";

type ModalType = "privacy" | "terms" | "cookies" | "blog" | "parcerias" | null;

export function LegalModalsProvider() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const handleOpenLegal = (e: CustomEvent<ModalType>) =>
      setActiveModal(e.detail);
    window.addEventListener(
      "open-legal",
      handleOpenLegal as EventListener
    );
    return () =>
      window.removeEventListener(
        "open-legal",
        handleOpenLegal as EventListener
      );
  }, []);

  return (
    <>
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

      <LegalModal
        isOpen={activeModal === "blog"}
        onClose={() => setActiveModal(null)}
        title="Blog da Advocacia Galvão"
      >
        <BlogContent />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "parcerias"}
        onClose={() => setActiveModal(null)}
        title="Parcerias Estratégicas"
      >
        <ParceriasContent />
      </LegalModal>
    </>
  );
}

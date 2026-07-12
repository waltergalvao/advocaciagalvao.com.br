"use client";

import { useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/5514997785999?text=Ol%C3%A1!%20Vim%20pela%20Landing%20Page%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20na%20%C3%A1rea%20de%20Direito%20Digital";

export default function ObrigadoPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center"
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        backgroundColor: "#f5f5f7",
        color: "#111827",
      }}
    >
      <h1 className="text-[1.6rem] m-0 text-center">
        <br />
        Estamos te redirecionando para o WhatsApp...
      </h1>
      <div
        className="rounded-full animate-spin"
        style={{
          marginTop: "18px",
          width: "34px",
          height: "34px",
          border: "3px solid #e5e7eb",
          borderTopColor: "#10b981",
          animationDuration: "0.8s",
        }}
      />
    </div>
  );
}

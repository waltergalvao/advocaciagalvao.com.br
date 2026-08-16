"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold uppercase tracking-widest text-xs py-4 rounded-sm shadow-md transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Enviando...
        </>
      ) : (
        "Enviar Análise de Caso Prioritário"
      )}
    </button>
  );
}

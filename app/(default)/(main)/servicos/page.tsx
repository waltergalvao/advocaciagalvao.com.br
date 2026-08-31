import type { Metadata } from "next";
import { ServicesTabs } from "../components/ServicesTabs";

export const metadata: Metadata = {
  title: "Nossos Serviços | Advocacia Galvão",
  description:
    "Conheça todos os serviços jurídicos da Advocacia Galvão para sellers de marketplaces e donos de e-commerce.",
};

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesTabs />
    </div>
  );
}

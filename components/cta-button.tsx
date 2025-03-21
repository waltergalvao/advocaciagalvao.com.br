export const CtaButton = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 btn-sm rounded-lg font-bold text-lg text-white bg-green-600 hover:bg-green-800 group gap-2 border border-green-700 max-w-lg"
      href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre%20marketplace"
      data-umami-event="agendar_consulta"
      data-umami-event-type="marketplaces"
    >
      Falar com advogado
    </a>
  );
};

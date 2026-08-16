"use client";

export function LegalLinks() {
  const handleOpenModal = (modalType: 'privacy' | 'terms' | 'cookies') => {
    window.dispatchEvent(new CustomEvent('open-legal', { detail: modalType }));
  };

  return (
    <ul className="text-navy-800 space-y-2.5 text-xs">
      <li>
        <button
          onClick={() => handleOpenModal('privacy')}
          className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-xs tracking-wider focus:outline-none cursor-pointer"
        >
          Política de Privacidade e LGPD
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOpenModal('terms')}
          className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-xs tracking-wider focus:outline-none cursor-pointer"
        >
          Termos de Uso
        </button>
      </li>
      <li>
        <button
          onClick={() => handleOpenModal('cookies')}
          className="hover:text-gold-600 transition-colors text-left font-bold uppercase text-xs tracking-wider focus:outline-none cursor-pointer"
        >
          Política de Cookies
        </button>
      </li>
      <li className="text-xs text-gray-400 pt-1 leading-snug">
        Segunda a sexta, das 9h às 18h
      </li>
    </ul>
  );
}

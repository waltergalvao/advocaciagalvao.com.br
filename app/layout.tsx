import "./css/style.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T5HHG9LN" />

      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}
      >
        {children}
        <a
          href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
          className="fixed bottom-4 right-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/whatsapp.svg"
            height={80}
            width={80}
            alt="Whatsapp"
          />
        </a>
      </body>
    </html>
  );
}

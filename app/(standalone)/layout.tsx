import "../css/style.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ViewTransitions } from "next-view-transitions";

import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://advocaciagalvao.com.br"),
};

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="pt-BR">
        <GoogleTagManager gtmId="GTM-W4CNBX4C" />
        <body
          className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

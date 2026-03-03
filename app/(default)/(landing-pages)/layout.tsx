"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header showNav={false} />
      <main className="grow mt-[64px] md:mt-[80px]">{children}</main>
      <Footer />
    </div>
  );
}

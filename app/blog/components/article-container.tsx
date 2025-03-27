"use client";

import { usePathname } from "next/navigation";
import { Section, SectionProvider } from "./section";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export function ArticleContainer({
  children,
  allSections,
}: {
  children: React.ReactNode;
  allSections: Record<string, Array<Section>>;
}) {
  let pathname = usePathname();
  const articleSlug = pathname.replace(/^\/blog/, "");

  return (
    <SectionProvider sections={allSections[articleSlug] ?? []}>
      <Header />
      <div className="h-full w-full">
        <div className="relative flex h-full flex-col">
          <main className="mt-8 mb-16 flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  );
}

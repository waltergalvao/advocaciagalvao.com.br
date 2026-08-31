import Image from "next/image";
import { ArticleContainer } from "./components/article-container";
import { Section } from "./components/section";
import { Footer } from "../(main)/components/Footer";
import { LegalModalsProvider } from "../(main)/components/LegalModalsProvider";
import glob from "fast-glob";

export default async function BlogLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  let pages = await glob("**/*.mdx", { cwd: "app/(default)/blog/(posts)" });

  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => {
      return [
        "/" + filename.replace(/(^|\/)page\.mdx$/, ""),
        (await import(`./(posts)/${filename}`)).sections,
      ];
    })
  )) as Array<[string, Array<Section>]>;

  let allSections = Object.fromEntries(allSectionsEntries);

  return (
    <>
      <ArticleContainer allSections={allSections}>
        {props.children}
      </ArticleContainer>
      <Footer />
      <LegalModalsProvider />
      <a
        href="https://wa.me/5514997785999?text=Ol%C3%A1%2C%0A%0Agostaria%20de%20agendar%20uma%20consulta.%0A%0AMeu%20caso%20%C3%A9%20sobre"
        className="fixed bottom-4 right-4 z-50"
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
    </>
  );
}

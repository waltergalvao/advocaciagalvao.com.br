import { ArticleContainer } from "./components/article-container";
import { Section } from "./components/section";
import glob from "fast-glob";

export default async function BlogLayout(
  props: Readonly<{ children: React.ReactNode }>
) {
  let pages = await glob("**/*.mdx", { cwd: "app/blog/(posts)" });

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
    <ArticleContainer allSections={allSections}>
      {props.children}
    </ArticleContainer>
  );
}

import { type Metadata } from "next";
import { getAllArticles } from "../../lib/articles";
import { ArticleList } from "../../components/article-list";

export const metadata: Metadata = {
  title: "Advocacia Galvão | Blog",
  description: "Assistência jurídica descomplicada.",
};

export async function generateStaticParams() {
  const { allTags } = await getAllArticles();
  return allTags.map((tag) => ({ category: tag }));
}

export default async function ArticlesIndex(
  props: Readonly<{
    params: Promise<{ category: string }>;
  }>
) {
  const { category } = await props.params;
  return <ArticleList tag={category} />;
}

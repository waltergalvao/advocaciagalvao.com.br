import { type Metadata } from "next";

import { ArticleList } from "./components/article-list";

export const metadata: Metadata = {
  title: "Advocacia Galvão | Blog",
  description: "Assistência jurídica descomplicada.",
};

export default function ArticlesIndex() {
  return <ArticleList tag={undefined} />;
}

import { Metadata } from "next";
import { blogParams, docsParams } from "@/app/(api)/api/og/utils";

import { Article } from "./articles";

interface Meta {
  title: string;
  category: string;
  description: string;
  date: string;
}

export const blogMetadata = (article: Article): Metadata => {
  const ogImage =
    article.image ??
    "/api/og/blog?" +
      blogParams.toSearchString({
        title: article.title,
        authors: article.authors,
      });

  return {
    title: `${article.title} | Galvão Advocacia`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Galvão Advocacia`,
      description: article.description,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Galvão Advocacia`,
      description: article.description,
      images: [{ url: ogImage, width: 1200, height: 600 }],
    },
  };
};

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

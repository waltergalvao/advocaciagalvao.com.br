import { getAllArticles } from "../lib/articles";
import { categoriesInfo, Category } from "../lib/categories";
import { formatDate } from "../lib/utils";
import Image from "next/image";

export async function ArticleList(
  props: Readonly<{
    tag: string | undefined;
  }>
) {
  const activeTag = props.tag;
  let { articles, allTags } = await getAllArticles(activeTag);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
      <header className="">
        <div className="pt-20 text-center">
          <h1 className="text-slate-800 text-4xl font-bold">Blog</h1>
          <p className="text-slate-800 text-lg mt-4">
            Leia nossos artigos e insights sobre como proteger seu negócio.
          </p>
        </div>
      </header>

      <div className="pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a
            href={`/blog/${article.slug}`}
            key={index}
            className="hover:scale-105 transition-all border border-slate-400 mx-auto"
          >
            <article className="p-4 flex flex-col justify-between gap-4 flex-wrap max-w-2xl">
              <div>
                <div className="relative w-full">
                  <Image
                    src={article.image}
                    className="rounded w-full md:max-h-[300px] object-cover"
                    alt="Blog post image"
                    quality={100}
                    width={512}
                    height={512}
                  />
                  <div
                    className="absolute inset-0 rounded"
                    style={{
                      backgroundImage: `
                          radial-gradient(
                            circle at center,
                            rgba(0, 0, 0, 0) 0%,
                            rgba(0, 0, 0, 0.1) 40%,
                            rgba(0, 0, 0, 0.3) 100%
                          )
                        `,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center">
                    <div className="text-slate-800 text-xs font-medium uppercase tracking-[3px]">
                      {categoriesInfo[article.tags[0] as Category]?.label}
                    </div>
                  </div>
                  <h2 className="text-slate-800 text-2xl font-semibold mt-2">
                    {article.title}
                  </h2>
                  <p className="text-slate-800 text-sm mt-2 line-clamp-3">
                    {article.description}
                  </p>
                </div>
                <div className="flex mt-6 items-center gap-4">
                  <img
                    src={article.authors[0].src}
                    className="rounded-full"
                    height={32}
                    width={32}
                  />
                  <div className="text-sm text-slate-500">
                    Postado por {article.authors[0].name} em{" "}
                    {formatDate(article.date)}
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}

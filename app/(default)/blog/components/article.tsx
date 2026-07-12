"use client";

import { usePathname } from "next/navigation";
import { Avatar } from "./avatar";
import { NavLink, VisibleSectionHighlight } from "./navigation";
import { useSectionStore } from "./section";
import { type ArticleWithSlug } from "../lib/articles";
import { formatDate } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useTransitionRouter } from "next-view-transitions";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";

export function Article({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  let pathname = usePathname();
  let router = useTransitionRouter();

  const sections = useSectionStore((s) => s.sections);

  return (
    <div className="mt-24 lg:mt-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
      <div className="">
        <div className="relative mx-auto flex w-full gap-x-8 divide-x">
          <article className="w-full">
            <header className="flex flex-col">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => router.push("/blog")}
                  aria-label="Go back to articles"
                  className="group flex size-8 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 transition bg-slate-800 ring-0 ring-white/10 hover:bg-slate-600"
                >
                  <IconArrowLeft size={20} className="text-slate-200" />
                </button>
                <span className="h-4 w-0.5 rounded-full bg-slate-400" />
                <time
                  dateTime={article.date}
                  className="flex items-center text-base text-slate-800"
                >
                  <span>{formatDate(article.date)}</span>
                </time>
              </div>
              <div className="flex flex-col md:flex-col-reverse">
                <div className="bg-black w-full  mt-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={512}
                    height={512}
                    unoptimized
                    className="mx-auto"
                  />
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-slate-800">
                  {article.title}
                </h1>
              </div>
              <div className="flex flex-col gap-4 lg:hidden">
                <ul className="mt-8 flex flex-wrap gap-4">
                  {article.authors.map((author) => (
                    <li
                      className="flex items-stretch gap-2"
                      key={JSON.stringify(author)}
                    >
                      <Avatar
                        src={author.src}
                        alt={author.name}
                        className="size-8"
                      />
                      <div className="flex flex-col gap-1">
                        <a className="text-sm/4" href={author.href}>
                          {author.name}
                        </a>
                        <p className="text-sm/4 text-slate-800">
                          {author.role}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </header>
            <div className="mt-8 prose" data-mdx-content>
              {children}
            </div>
          </article>
          <aside className="top-24 hidden h-full w-1/4 flex-col pl-8 lg:sticky lg:flex xl:w-1/3 border-white/5">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-slate-800">Postado por</p>
              {article.authors.map((author) => (
                <div
                  className="flex items-center gap-2"
                  key={JSON.stringify(author)}
                >
                  <Avatar
                    src={author.src}
                    alt={author.name}
                    className="size-8"
                  />
                  <div className="flex flex-col gap-1">
                    <a className="text-sm/4 text-slate-500" href={author.href}>
                      {author.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {sections.length > 0 && (
              <div className="mt-8 flex flex-col">
                <p className="text-sm text-zinc-800">Conteúdo</p>
                <div className="relative mt-1.5">
                  <AnimatePresence initial={true}>
                    <VisibleSectionHighlight
                      noHeading
                      group={{
                        links: [{ href: pathname, title: "Sections" }],
                        title: "",
                      }}
                      pathname={pathname}
                    />
                  </AnimatePresence>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.ul
                      role="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                    >
                      {sections.map((section) => (
                        <li key={section.id} className="relative">
                          <NavLink href={`#${section.id}`} isAnchorLink>
                            {section.title}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>{" "}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

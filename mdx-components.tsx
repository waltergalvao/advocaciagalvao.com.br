import * as mdxComponents from "./app/blog/components/mdx";
import { type MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...mdxComponents,
  };
}

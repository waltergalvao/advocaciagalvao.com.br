import nextMDX from "@next/mdx";

import { recmaPlugins } from "./app/(default)/blog/mdx/recma.js";
import { rehypePlugins } from "./app/(default)/blog/mdx/rehype.js";
import { remarkPlugins } from "./app/(default)/blog/mdx/remark.js";

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  redirects: async () => {
    return [
      {
        source: "/alugar-casa",
        destination:
          "https://www.facebook.com/marketplace/item/869664289086839/",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);

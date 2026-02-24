import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  poweredByHeader: false,
  experimental: {
    mdxRs: false,
  },
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

const withMdx = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [["rehype-pretty-code", { theme: "ayu-dark" }]],
  },
});

export default withMdx(nextConfig);

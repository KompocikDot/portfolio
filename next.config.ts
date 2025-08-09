import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  },
  poweredByHeader: false,
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, {theme: 'ayu-dark'}]],
  }
})

export default withMdx(nextConfig);

import remarkGfm from 'remark-gfm'
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMdx = createMDX({
  experimental: {
    mdxRs: true
  }
})

export default withMdx(nextConfig);

import Header from "../header";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

export type PostMetadata = {
  publicationDate: string;
  title: string;
  description: string;
  readTime: string;
};

export type Posts = {
  [slug: string]: PostMetadata;
};

function PostLinks({ posts }: { posts: Posts }) {
  return (
    <ul className="my-10">
      {Object.entries(posts).map(([slug, metadata]: [string, PostMetadata]) => (
        <li key={slug} className="border-solid border-3 border-aquamarine-700 p-5 rounded-lg my-4">
          <Link href={`/blog/${slug}`} className="hover:text-aquamarine-500">
            <div className="flex flex-row justify-between">
              <div>{metadata.title}</div>
              <div>{metadata.publicationDate}</div>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <p>{metadata.description}</p>
              <div>{metadata.readTime}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function Posts() {
  const contentDirectory = path.join(process.cwd(), "src/app/blog/content");
  const postFilenames = await fs.readdir(contentDirectory);

  const posts = Object.fromEntries(
    await Promise.all(
      postFilenames.map(async (f) => {
        const slug = path.basename(f, ".mdx");
        const { metadata } = await import(`./content/${f}`);
        return [slug, metadata];
      })
    )
  );

  return (
    <>
      <Header activePage="blog" />
      <main className="flex flex-col grow mx-5 mt-10">
        <h1 className="text-4xl typed-caret typed-caret-color-aquamarine-500 typed-caret-width-5">
          Latest posts
        </h1>
        <PostLinks posts={posts} />
      </main>
    </>
  )
}

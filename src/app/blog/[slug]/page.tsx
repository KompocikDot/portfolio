import Header from "@/app/components/header";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: BlogPost } = await import(`../content/${slug}.mdx`);
  return (
    <>
      <Header activePage="blog" />
      <article className="prose max-w-none prose-neutral prose-blockquote:text-aquamarine-500 prose-headings:text-white prose-a:text-aquamarine-500 prose-strong:text-white  prose-headings:text-center prose-code:text-white prose-code:overflow-x-auto prose-figure:text-white text-white mt-10 w-full px-5">
        <BlogPost />
      </article>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: "firefox-rant" }, { slug: "costly-datediff" }];
}

export const dynamicParams = false;

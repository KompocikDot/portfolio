import Header from "@/app/components/header"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: BlogPost } = await import(`../content/${slug}.mdx`)
  return (
    <>
      <Header activePage="blog" />
      <article className="prose prose-neutral prose-blockquote:text-aquamarine-500 prose-headings:text-white prose-a:text-aquamarine-500 prose-strong:text-white  prose-headings:text-center prose-code:text-white prose-figure:text-white text-white mx-auto m-5 w-4/5 sm:w-full">
        <BlogPost />
      </article>
    </>
  )

}

export function generateStaticParams() {
  return [{ slug: 'firefox-rant' }]
}

export const dynamicParams = false

import Link from "next/link";

export default function Header({ activePage }: { activePage: string }) {
  return <nav className="flex justify-around pt-5 w-full">
    <Link className={activePage === "/" ? "text-aquamarine-500" : "" + `hover:text-aquamarine-900`} href="/">Home</Link>
    <Link className={activePage === "projects" ? "text-aquamarine-500" : "" + "hover:text-aquamarine-900"} href="/projects" >Projects</Link>
    <Link className={activePage === "blog" ? "text-aquamarine-500" : "" + "hover:text-aquamarine-900"} href="/blog" > Blog</Link >
    <Link className={activePage === "contact" ? "text-aquamarine-500" : "" + "hover:text-aquamarine-900"} href="/contact" >Contact</Link>
  </nav >
}

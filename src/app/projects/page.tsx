import Link from "next/link";
import Header from "@/app/components/header";
import ProjectsList from "./projectsList";

export default function Projects() {
  return <>
    <Header activePage="projects" />
    <main className="flex flex-col grow mx-5 mt-10">
      <h1 className="text-4xl typed-caret typed-caret-color-aquamarine-500 typed-caret-width-5">My projects</h1>
      <h2 className="text-lg">Here are <i>some</i> of my projects, for more look at my <Link className="text-aquamarine-500" href="https://github.com/KompocikDot/">Github</Link></h2>

      <ProjectsList />
    </main>
  </>;
}

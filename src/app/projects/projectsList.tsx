import type { JSX } from "react";
import { Docker, FastAPI, Go, Nuxt, PostgreSQL, Python, VueJS } from "@/app/components/icons";
import Link from "next/link";
import { Tooltip } from "../components/tooltip";

type ProjectData = {
  name: string,
  description: string,
  technologies: Technology[],
  githubURL: string,
  demoURL?: string,
}

type Technology = {
  name: string,
  svg: JSX.Element,
}

const data: ProjectData[] = [
  {
    name: "ISOCAPI",
    description: "Developer friendly scrapers API returning data in accessible formats with easy to use SDKs in Python and PHP",
    technologies: [
      { name: "Go", svg: <Go key="go" /> },
      { name: "VueJS", svg: <VueJS key="vue" /> },
      { name: "Nuxt", svg: <Nuxt key="nuxt" /> },
      { name: "Docker", svg: <Docker key="docker" /> },
      { name: "PostgreSQL", svg: <PostgreSQL key="postgreSQL" /> },
    ],
    githubURL: "",
    demoURL: "https://isocapi.com",
  },
  {
    name: "crypt-stat",
    description: "Simple GUI for worker that crawls and stores historical cryptocurrencies data that can be transformed into simple and readable diagrams that allow to interpret data",
    technologies: [
      { name: "Python", svg: <Python key="python" /> },
      { name: "FastAPI", svg: <FastAPI key="fastAPI" /> },
      { name: "PostgreSQL", svg: <PostgreSQL key="postgreSQL" /> },
    ],
    githubURL: "https://github.com/KompocikDot/crypt-stat",
    demoURL: undefined, //TODO: Run demo on a server under a subdomain
  },
  {
    name: "Voronoi diagram generator",
    description: "Generator that takes amount of the points and generates diagram that can be exported to an image",
    technologies: [
      { name: "Go", svg: <Go key="go" /> }
    ],
    githubURL: "https://github.com/KompocikDot/voronoi-diagram",
    demoURL: undefined,
  },
  {
    name: "Vitkac pid scraper",
    description: "Scraper utilizing an unofficial API of Vitkac store which searches for new products and sends Discords notifications",
    technologies: [
      { name: "Python", svg: <Python key="python" /> },
    ],
    githubURL: "https://github.com/KompocikDot/vitkac-pid-scraper",
    demoURL: undefined,
  },
];

export default function ProjectsList(): JSX.Element {
  return <div className="my-10">
    <div className="w-full flex flex-col gap-5">{
      data.map(project => <Project key={project.name} {...project} />)
    }</div>
  </div>;
}

function Project(props: ProjectData): JSX.Element {
  return <div className="border-3 border-aquamarine-700 p-5 rounded-lg flex flex-col">
    <div className="text-2xl text-aquamarine-500">{props.name}</div>
    <div>{props.description}</div>
    <div className="flex w-full justify-around gap-3 h-8 my-5">
      {props.technologies.map((tech, index) => <Tooltip key={index} svg={tech.svg} text={tech.name} />)}
    </div>
    {props.githubURL && <Link className="hover:text-aquamarine-500" href={props.githubURL}>Github</Link>}
  </div >;
}

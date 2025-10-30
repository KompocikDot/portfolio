import Link from "next/link";
import ExperienceList from "./experience";
import EducationList from "./education";
import { JSX } from "react";

export default function Main(): JSX.Element {
	return (
		<main className="flex flex-col grow mx-5 mt-10">
			<h1 className="text-4xl typed-[Hi!~Cześć!~Hallo!~¡Hola!~Привет!] typed-caret typed-caret-color-aquamarine-500 typed-caret-width-5"></h1>
			<h2 className="text-2xl text-aquamarine-500 hover:text-white">
				<span className="text-white">I&apos;m </span>Kacper <i className="text-white">also known as</i> <Link href="https://github.com/KompocikDot">KompocikDot</Link>
			</h2>
			<h3>Currently based in <span className="text-aquamarine-500">Wrocław</span>, Poland and working as a <span className="text-aquamarine-500">SRE</span> @ <Link href="https://akamai.com/">Akamai</Link></h3>
			<ExperienceList />
			<EducationList />
		</main >
	)
}

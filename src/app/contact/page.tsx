import Link from "next/link";
import Header from "../header";

export default function Contact() {
  return (<>
    <Header activePage="contact" />
    <main className="flex flex-col grow mx-5 mt-10">
      <h1 className="text-4xl typed-caret typed-caret-color-aquamarine-500 typed-caret-width-5">
        Contact
      </h1>
      <h2>You can reach using these platforms</h2>
      <ul className="my-10 ">
        <li className="hover:text-aquamarine-500"><Link href="https://www.linkedin.com/in/kacper-soczko/">LinkedIn - https://www.linkedin.com/in/kacper-soczko/</Link></li>
        <li className="hover:text-aquamarine-500"><Link href="https://github.com/KompocikDot">Github - https://github.com/KompocikDot</Link></li>
        <li className="hover:text-aquamarine-500"><a href="mailto:kacper.soczko@gmail.com">Email - kacper.soczko@gmail.com</a></li>
        <li className="hover:text-aquamarine-500">Discord - @kompocik</li>
      </ul>
    </main>
  </>)
}

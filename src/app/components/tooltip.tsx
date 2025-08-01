import { JSX } from "react";

export function Tooltip({ svg, text }: { svg: JSX.Element, text: string }): JSX.Element {
  return <div className="relative group">
    <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 hidden group-hover:block bg-aquamarine-500 text-background text-xs rounded py-2 px-2 z-10">{text}</span>
    {svg}
  </div>
}

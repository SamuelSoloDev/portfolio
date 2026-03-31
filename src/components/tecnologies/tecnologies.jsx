import { Card } from "./card";
import  miLogo  from "../../assets/css.svg";
import html_logo from "../../assets/html.svg"
import js_logo from "../../assets/js.svg";
import react_logo from "../../assets/react.svg";
import tailwind_logo from "../../assets/tailwind.svg"
import git_logo from "../../assets/git.svg";

export function Tecnologies(){
  return (
    <div id="tecnologies" className=" items-center pt-20 gap-5 flex flex-col
    h-dvh bg-[#e7e9e9] dark:bg-[#204430c4]">
      <h3 className="text-5xl font-bold  text-slate-900 dark:text-slate-100">Tecnologias</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-5
      md:grid-cols-3 md:grid-rows-2
      w-8/12
      place-items-center
      border-amber-300 border">
        <Card name={"HTML"}
        logo={html_logo}></Card>
        <Card name={"CSS"}
        logo={miLogo}></Card>
        <Card name={"JS"}
        logo={js_logo}></Card>
        <Card name={"React"}
        logo={react_logo}></Card>
        <Card name={"Tailwind"}
        logo={tailwind_logo}></Card>
        <Card name={"Git"}
        logo={git_logo}></Card>
      </div>
    </div>
  )
}
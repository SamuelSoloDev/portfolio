import { Card } from "./card";
import  miLogo  from "../../assets/css.svg";



export function Tecnologies(){
  return (
    <div id="tecnologies" className=" items-center pt-20 gap-5 flex flex-col
    h-dvh bg-[#e7e9e9] dark:bg-[#204430c4]">
      <h3 className="text-5xl  text-slate-900 dark:text-slate-100">Tecnologias</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-5
      md:grid-cols-3 md:grid-rows-2
      w-8/12
      border-amber-300 border">
        <Card name={"HTML"}
        logo={miLogo}></Card>
        <Card name={"CSS"}
        logo={miLogo}></Card>
        <Card name={"JS"}
        logo={miLogo}></Card>
        <Card name={"React"}
        logo={miLogo}></Card>
        <Card name={"Tailwind"}
        logo={miLogo}></Card>
        <Card name={"Git"}
        logo={miLogo}></Card>
      </div>
    </div>
  )
}
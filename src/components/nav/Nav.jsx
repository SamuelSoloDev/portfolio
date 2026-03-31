import { ButtonRef } from "./href";
import { Title } from "../generic/title";

export function NavBar() {
  const sections = ["Hero", "Projects", "About me", "Tecnologies"]

  return(
    <nav className="flex items-center justify-between  w-full h-1/12
       px-6 md:px-10 py-4 border border-slate-200  border-solid
     bg-[#f6f8f8]/80 dark:bg-[#102218c4]/90 backdrop-blur-md fixed bottom-0 z-50
     p-4
     md:top-0 md:border-b md:border-[#13ec6d]/10 md:whitespace-nowrap
     md:gap-100
    ">
      <div className="hidden md:flex">
        <Title></Title>
      </div>
     <div className="flex items-center p-10 justify-center gap-15 h-full w-full">
       {sections.map((section) =>
      (

        <ButtonRef
        key={section}
        refer={section}>
        </ButtonRef>
      ))}
     </div>
    </nav>
  )
}
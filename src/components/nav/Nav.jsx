import { ButtonRef } from "./href";

export function NavBar() {
  const sections = ["Hero", "Projects", "About me", "Tecnologies"]

  return(
    <nav className="flex items-center justify-between  w-full h-1/12
       px-6 md:px-10 py-4 border border-slate-200  border-solid
     bg-white dark:bg-background-dark/50 backdrop-blur-md fixed bottom-0 z-50
     p-0
     md:static md:border-b md:border-[#13ec6d]/10 md:whitespace-nowrap
     md:gap-100
    ">
      <div className="hidden md:flex">
        <p >Portafolio Dev</p>
      </div>
     <div className="flex items-center justify-center gap-20 h-full w-full">
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
import { ButtonRef } from "./href";
import { Title } from "../generic/title";

export function NavBar() {
  const sections = ["Hero", "Projects", "About me", "Tecnologies"]

  return(
    <nav className="flex items-center justify-between w-full
px-4 md:px-10 py-3 h-15
border border-slate-200
bg-[#f6f8f8]/80 dark:bg-[#102218c4]/90 backdrop-blur-md
fixed bottom-0 md:top-0 z-50
md:border-b md:border-[#13ec6d]/10">

  <div className="hidden md:flex">
    <Title />
  </div>

  <div className="flex items-center justify-center gap-4 md:gap-8 w-full md:w-auto mx-auto md:mx-0">
    {sections.map((section) => (
      <ButtonRef key={section} refer={section} />
    ))}
  </div>

</nav>
  )
}
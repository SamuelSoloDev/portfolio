import { Card } from "./card";


/* Se espera que se cree un archivo Javascript con los datos de los proyectos
cómo el nombre, una imagen y el link */

export function Projects() {
  return(
    <section className="min-h-dvh m-0 bg-[#e7e9e9] dark:bg-[#204430c4] justify-center items-center
    flex flex-col gap-10 md:flex-row pb-10" id="projects">
      <h2 className="text-5xl font-bold leading-tight tracking-tight">Proyectos</h2>
      <Card></Card>
      <Card></Card>
    </section>
  )
}
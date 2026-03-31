import { Card } from "./card";


/* Se espera que se cree un archivo Javascript con los datos de los proyectos
cómo el nombre, una imagen y el link */

export function Projects() {
  return(
    <section className="min-h-dvh m-0 p-5 md:pt-12 bg-[#e7e9e9] dark:bg-[#204430c4] justify-center items-center
    flex flex-col gap-6 pb-10" id="projects">
      <h2 className="text-5xl font-bold leading-tight tracking-tight
      text-slate-900 dark:text-slate-100">Proyectos</h2>
      <div className="flex flex-col md:flex-row gap-5 h-10/12">
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  )
}
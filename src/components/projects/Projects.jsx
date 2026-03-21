import { Card } from "./card";


/* Se espera que se cree un archivo Javascript con los datos de los proyectos
cómo el nombre, una imagen y el link */

export function Projects() {
  return(
    <section className="min-h-dvh bg-sky-200 justify-center items-center
    flex flex-col gap-10 md:flex-row" id="projects">
      <h2>Proyectos</h2>
      <Card></Card>
      <Card></Card>
    </section>
  )
}
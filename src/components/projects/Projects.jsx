import { Card } from "./card";
import finance_screenshot from "../../assets/screenshots/finance.png";
import questboard_screenshot from "../../assets/screenshots/questboard.PNG";

/* Se espera que se cree un archivo Javascript con los datos de los proyectos
cómo el nombre, una imagen y el link */

export function Projects() {

  return(
    <section className="min-h-dvh m-0 p-5 md:pt-12 bg-[#e7e9e9] dark:bg-[#204430c4] justify-center items-center
    flex flex-col gap-6 pb-10" id="projects">
      <h2 className="text-5xl font-bold leading-tight tracking-tight
      text-slate-900 dark:text-slate-100">Proyectos</h2>
      <div className="flex flex-col md:flex-row gap-5 h-10/12">
        <Card
        screenshot={questboard_screenshot}
        name={"Quest Board"}
        description={"Aplicación de gestión de hábitos diarios con sistema de tareas, rachas y recompensas. Implementa lógica de reinicio diario, persistencia de datos y manejo de estado dinámico para simular progreso del usuario."}
        p_link={"https://quest-board-seven.vercel.app"}
        p_repo={"https://github.com/SamuelSoloDev/quest-board"}
        ></Card>
        <Card
        screenshot={finance_screenshot}
        name={"Finance App"}
        description={"Aplicación web para gestión financiera personal, permitiendo registrar y visualizar deudas, ingresos y gastos. Implementa manejo de datos dinámicos y visualización clara para facilitar el control del dinero."}
        p_link={"https://finance-app-sigma-puce.vercel.app"}
        p_repo={"https://github.com/SamuelSoloDev/finance-app"}
        ></Card>
      </div>
    </section>
  )
}
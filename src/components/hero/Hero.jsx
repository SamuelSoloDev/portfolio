import { StyledButton } from "../generic/button"
import { Link } from "../generic/link";

export function Hero({text}) {
  return (
    <section className="min-h-dvh
    m-0
    p-5
    flex flex-col gap-5
    md:flex-row
     w-full items-center justify-center " id="hero">
     <div className=" flex flex-col md:flex-row items-center
     gap-10 h-11/12 justify-center w-10/12 ">
       <img className=" min-w-80 min-h-80 max-h-80 max-w-80 bg-gray-400
      rounded-full border-4 border-slate-300
       dark:border-slate-800 shadow-xl  overflow-hidden" alt="profile_picture" />

      <div className="flex flex-col gap-5 justify-center items-center">
        <header className="text-5xl text-center  text-slate-900 dark:text-slate-100"> Frontend Developer</header>
      <div className="w-10/12 gap-5
      flex flex-col items-center text-center">
        <h2 className="text-5xl font-extrabold leading-tight tracking-tight flex flex-col
        text-slate-900 dark:text-slate-100 ">
          Samuel <span className="text-green-400">Solórzano</span></h2>
        <p className="leading-relaxed max-w-[320px] text-slate-600 dark:text-slate-100 font-bold text-2xl mx-auto">Desarrollador
           de páginas web con react, mantengo un
           enfoque Mobile-first y con
            experiencia en pwa</p>

      </div>
       <div className="flex flex-col w-9/12 gap-4 ">
        <StyledButton
        classes={"w-full border border-green-400 border-solid bg-[#13ec6d] h-9 "
        }>
          <p>Descargar CV</p>
        </StyledButton>
        <Link classes={"w-full border border-green-400 border-solid  h-9 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>
          <p>Ver Proyectos</p>
        </Link>
      </div>
      </div>
     </div>
    </section>
  )
}
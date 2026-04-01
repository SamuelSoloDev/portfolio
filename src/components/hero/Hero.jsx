import { StyledButton } from "../generic/button"
import { Link } from "../generic/link";
import profile_picture from "../../assets/pictures/profile_picture.png";
import github_logo from "../../assets/github.svg";
import pdf_logo from "../../assets/pdf.svg";
import cv from "../../assets/documents/cv-samuel-solorzano.pdf";


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
       <img src={profile_picture}
       className=" min-w-80 min-h-80 max-h-80 max-w-80 bg-gray-400
      rounded-full border-4 border-slate-300 object-cover object-top
       dark:border-slate-800 shadow-xl  overflow-hidden" alt="profile_picture" />

      <div className="flex flex-col gap-5 justify-center items-center">
        <header className="text-5xl text-center md:pt-8 text-slate-900 dark:text-slate-100"> Frontend Developer</header>
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
       <a className=" rounded-xl  font-bold w-full flex items-center justify-center gap-3 border border-green-400 border-solid bg-[#13ec6d] h-9 "
        download="cv-samuel-solorzano"
        href={cv}>
          <StyledButton
        classes={"w-full flex items-center justify-center gap-3 border border-green-400 border-solid bg-[#13ec6d] h-9 "
        }>
          <img className="w-6 h-6 object-contain" src={pdf_logo} alt="GitHub logo" />
          <p>Descargar CV</p>
        </StyledButton>
        </a>

        <Link url={"https://github.com/SamuelSoloDev?tab=repositories"}
        classes={"w-full flex items-center justify-center gap-3 border border-green-400 border-solid  h-9 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>
          <img className=" bg-white rounded-full w-6 h-6 object-contain" src={github_logo} alt="GitHub logo" />
          <p>Ver Proyectos</p>
        </Link>
      </div>
      </div>
     </div>
    </section>
  )
}
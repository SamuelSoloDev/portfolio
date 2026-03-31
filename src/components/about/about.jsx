import { Link } from "../generic/link";
import github_logo from "../../assets/github.svg";
import linkedin_logo from "../../assets/linkedin.svg";
import gmail_logo from "../../assets/gmail.svg";

export function About() {
  return(
    <div id="aboutme"
    className="min-h-dvh flex flex-col items-center p-10 gap-10">

      <div className="w-10/12 flex flex-col items-center gap-5 mt-5">
       <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100">Sobre mí</h2>
       <p className="text-xl font-bold text-slate-600 dark:text-slate-100">
        Frontend developer enfocado en construir aplicaciones web funcionales con React y JavaScript. <br/> <br/>
        Disfruto resolver problemas y convertir ideas en productos reales con lógica clara y estructuras bien definidas.<br/> <br/>
        Actualmente estoy desarrollando proyectos propios y buscando mi primera oportunidad como desarrollador frontend.</p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5" >
        <h3 className="text-3xl text-slate-900 dark:text-slate-100">Localización:</h3>
        <p className="font-bold text-slate-600 dark:text-slate-100">Cartagena De Indias - Colombia</p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5">
        <h3 className="text-3xl text-slate-900 dark:text-slate-100">Contacto:</h3>
        <Link classes={"w-7/12 max-w-50 flex items-center justify-center gap-3  border border-green-400 border-solid  h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>
          <img className=" bg-white rounded-full w-6 h-6 object-contain" src={github_logo} alt="GitHub logo" />
          <p>Github</p>
        </Link>
        <Link classes={"w-7/12 max-w-50 flex items-center justify-center gap-3 border border-green-400 border-solid  h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>
          <img className="w-6 h-6 object-contain" src={gmail_logo} alt="Email logo" />
          <p className="font-bold text-center text-lg"> E-mail</p>
        </Link>
        <Link classes={"w-7/12 max-w-50 flex items-center justify-center gap-3 border border-green-400 border-solid  h-12 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>
          <img className="w-6 h-6 object-contain" src={linkedin_logo} alt="LinkedIn logo" />
          <p>LinkedIn</p>
        </Link>
      </div>
    </div>
  )
}
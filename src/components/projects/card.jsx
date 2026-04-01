import { Link } from "../generic/link";
import github_logo from "../../assets/github.svg";

export function Card({name, description, screenshot, p_link, p_repo}) {
  return(
    <div className="w-11/12  m-auto border-solid relative
    max-h-180
    max-w-150
    overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-s">

      <div className="w-full h-100 top-0 items-center justify-center flex">

        <img className="bg-slate-900 w-full object-contain h-full" alt="screenshot"
        src={screenshot}/>

      </div>
      <div className=" h-full
      flex flex-col">
        <h3 className="text-2xl p-3 text-slate-900 dark:text-slate-100">{name}</h3>
        <p className="h-8/12 m-3 text-md md:text-sm text-slate-600 dark:text-slate-100">
          {description}
        </p>
        <div className="flex flex-row gap-5 h-full items-center justify-center p-3">
          <Link
          url={p_repo}
          classes="w-6/12 h-12 flex items-center justify-center gap-3 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform">
            <img className=" bg-white rounded-full w-6 h-6 object-contain" src={github_logo} alt="GitHub logo" />
            <p>Ver en Github</p>
          </Link>
          <Link
          url={p_link}
          classes={"w-6/12 border h-12 border-green-400 border-solid bg-green-400"}
          ><p>Ir a la app</p></Link>
        </div>
      </div>

    </div>
  )
}
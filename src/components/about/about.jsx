import { Link } from "../generic/link";

export function About() {
  return(
    <div id="aboutme"
    className="min-h-dvh flex flex-col items-center p-10 gap-10">

      <div className="w-10/12 flex flex-col items-center gap-5 mt-5">
       <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100">Sobre mí</h2>
       <p className="text-2xl font-bold text-slate-600 dark:text-slate-100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Quos omnis assumenda a id cumque, eius optio tempore corrupti et rem tenetur sequi obcaecati,
      nulla voluptate quam ipsum, nihil vitae laborum?
      </p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5" >
        <h3 className="text-3xl text-slate-900 dark:text-slate-100">Localización:</h3>
        <p className="font-bold text-slate-600 dark:text-slate-100">Cartagena De Indias - Colombia</p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5">
        <h3 className="text-3xl text-slate-900 dark:text-slate-100">Contacto:</h3>
        <Link classes={"w-5/12 border border-green-400 border-solid  h-9 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>Git hub</Link>
        <Link classes={"w-5/12 border border-green-400 border-solid  h-9 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>Email</Link>
        <Link classes={"w-5/12 border border-green-400 border-solid  h-9 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-base font-bold border border-slate-300 dark:border-slate-700 active:scale-95 transition-transform"}>LinkedIn</Link>
      </div>
    </div>
  )
}
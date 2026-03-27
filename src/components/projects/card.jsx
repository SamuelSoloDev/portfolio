import { Link } from "../generic/link";

export function Card(params) {
  return(
    <div className="w-11/12 min-h-9/12 m-auto border-solid relative
    overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-s">

      <div className="w-full h-100 top-0">

        <img className="bg-slate-200 h-full" alt="screenshot" />
      </div>
      <div className=" h-full
      flex flex-col">
        <h3 className="text-2xl p-3">Quest Board</h3>
        <p className="h-8/12 m-3 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non ad voluptatum architecto odit doloremque cumque,
          minima vel at tempore minus consequatur
          facere molestiae labore dolor.
          Inventore, maxime. Laborum, mollitia ab?
        </p>
        <div className="flex flex-row gap-5 h-full items-center justify-center p-3">
          <Link
          classes={"w-6/12 border h-12 border-green-400 border-solid"}
          ><p>Ver en Git hub</p></Link>
          <Link
          classes={"w-6/12 border h-12 border-green-400 border-solid"}
          ><p>Ir a la app</p></Link>
        </div>
      </div>

    </div>
  )
}
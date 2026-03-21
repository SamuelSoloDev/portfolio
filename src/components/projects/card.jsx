

export function Card(params) {
  return(
    <div className="w-11/12 h-8/12 border m-auto border-black border-solid relative">

      <div className="w-full h-100 top-0">
        <h3>Quest Board</h3>
        <img className="bg-slate-200 m-5 h-10/12" alt="screenshot" />
      </div>
      <div className="border border-amber-300 border-solid h-50
      flex flex-col">
        <p className="h-9/12 border border-blue-800 border-solid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non ad voluptatum architecto odit doloremque cumque,
          minima vel at tempore minus consequatur
          facere molestiae labore dolor.
          Inventore, maxime. Laborum, mollitia ab?
        </p>
        <div className="flex flex-row gap-5 items-center justify-center pt-3">
          <button className="w-5/12 border border-green-400 border-solid ">Ver en git hub</button>
          <button className="w-5/12 border border-green-400 border-solid ">Ir a la app</button>
        </div>
      </div>

    </div>
  )
}
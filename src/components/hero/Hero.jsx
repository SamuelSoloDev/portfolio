

export function Hero({text}) {
  return (
    <section className="h-dvh
    flex flex-col
     w-full items-center " id="hero">
      <img className=" w-70 h-70 bg-gray-400
      rounded-full border border-slate-300" alt="profile_picture" />
      <header> Frontend Developer</header>
      <div className="w-7/12 border border-gray-700 border-solid
      flex flex-col items-center text-center">
        <h2 className="text-5xl ">Samuel Solorzano</h2>
        <p>Desarrollador de páginas web con react, mantengo un enfoque Mobile-first y con experiencia en pwa</p>

      </div>
       <div className="flex flex-col w-7/12 ">
        <button className="w-full border border-green-400 border-solid">descargar cv</button>
        <button className="w-full border border-green-400 border-solid">Ver proyectos</button>
      </div>
    </section>
  )
}


export function About() {
  return(
    <div id="aboutme"
    className="h-dvh flex flex-col items-center gap-10">

      <div className="w-10/12 flex flex-col items-center gap-5 mt-5">
       <h2 className="text-5xl">Sobre mí</h2>
       <p className="text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Quos omnis assumenda a id cumque, eius optio tempore corrupti et rem tenetur sequi obcaecati,
      nulla voluptate quam ipsum, nihil vitae laborum?
      </p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5" >
        <h3 className="text-3xl">Localización:</h3>
        <p>Cartagena De Indias - Colombia</p>
      </div>
      <div className="flex flex-col w-10/12 text-2xl gap-5">
        <h3 className="text-3xl">Contacto:</h3>
        <a href="">Git hub</a>
        <a href="">Email</a>
        <a href="">LinkedIn</a>
      </div>
    </div>
  )
}
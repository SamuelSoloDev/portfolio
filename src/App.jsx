import { useState } from 'react'
import './App.css'
import { NavBar } from "./components/nav/Nav";
import { Title } from "./components/generic/title";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/about";
import { Tecnologies } from "./components/tecnologies/tecnologies";
function App() {


  return (
  <div className='bg-[#f6f8f8] dark:bg-[#102218c4] p-0 w-full h-full'>
    <Title classes={"min-h-10 max-h-15 newclass w-full md:hidden bg-[#f6f8f8]/80 dark:bg-[#102218c4]/80"}></Title>
    <NavBar></NavBar>
    <Hero></Hero>
    <Projects></Projects>
    <About></About>
    <Tecnologies></Tecnologies>
  </div>
  )
}

export default App

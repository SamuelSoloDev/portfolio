import { useState } from 'react'
import './App.css'
import { NavBar } from "./components/nav/Nav";
import { Title } from "./components/generic/title";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/about";
function App() {


  return (
  <div className='bg-[#f6f8f8] dark:bg-[#102218c4] p-0 w-full h-full'>
    <Title classes={"h-20 w-full md:hidden border border-green-400"}></Title>
    <NavBar></NavBar>
    <Hero></Hero>
    <Projects></Projects>
    <About></About>
    <div className='h-20'></div>
  </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { NavBar } from "./components/nav/Nav";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";

function App() {


  return (
  <div className='bg-[#f6f8f7] w-full h-dvh'>
    <NavBar></NavBar>
    <Hero></Hero>
    <Projects></Projects>
  </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Info from './components/home/Info'
import Experience from './components/home/Experience'
import Education from './components/home/Education'
import Skills from './components/home/Skills'


function App() {

  return (
    <div className="App">
      <Info/>
      <Experience/>
      <Education/>
      <Skills/>
    </div>
  )
}

export default App

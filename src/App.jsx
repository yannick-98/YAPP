import React, { useState } from 'react'
import './App.css'
import Header from "/src/components/Header"
import Contenido from './components/Contenido';
import logo from "/src/icons/Logo2.svg"

function App() {

  return (
    <div className={`flex flex-col items-center max-w-screen h-screen `}>
      <Header logo={logo} />
      <Contenido />
    </div>
  )
}

export default App

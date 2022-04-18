import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import MiBilletera from "./Pages/MiBilletera"
import Registro from "./Pages/Registro"
import Portal from "./Pages/Portal"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="billetera" element={ <MiBilletera/> } />
        <Route path="registro" element={ <Registro/> } />
        <Route path="portal" element={ <Portal/> } />
      </Routes>
    </div>
  )
}

export default App
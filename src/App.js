import React from 'react';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom"
import Home from "./Pages/Home"
//import MiBilletera from "./Pages/MiBilletera"
import Registro from "./Pages/Registro"
import Portal from "./Pages/Portal"
//<Route path="billetera" element={ <MiBilletera/> } />
function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/registro" element={ <Registro/> } />
        <Route path="/portal" element={ <Portal/> } />
      </Routes>
      
    </div>
  )
} 

export default App
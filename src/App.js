import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import MiBilletera from './Pages/MiBilletera';
import Registro from './Pages/Registro';
import Portal from './Pages/Portal';


export default class App extends React.Component {
  render(){
    return(
      <div>
<Router>
     <div className="App">
<Routes>
  
 <Route path="/" element = {<Home/>}/>
 <Route path="/mibilletera" element = {<MiBilletera/>}/>
 <Route path="/registro" element = {<Registro/>}/>
 <Route path="/portal" element = {<Portal/>}/>
 
 </Routes>


  </div>

  </Router>
<div className="page-body">

</div>
 
  </div>
    )
  }
}






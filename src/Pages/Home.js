import React,{useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Registro from '../Pages/Registro';
import Login  from '../Pages/Login';
import Paybutton from '../Components/Paybutton';

const Home = ()=>{
    let[mostrar,setmostrar] = useState();
  setmostrar = ()=>{mostrar = true;}


const renderpager = ()=>{
    setmostrar();
    console.info(" .. "+mostrar);
    return(
<>
if (mostrar==true) {
  <Registro/>
       
}

</>
    )
}
const renderpagel = ()=>{
    setmostrar();
    console.info(" .. "+mostrar);
    return(
<>
if (mostrar===true) {
        <Login/>
}

</>

    )
    
}
    return(
        <div>
            <h1>Payz Wallet </h1>
             
            <div>
           <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 " onClick={()=>{renderpager()}}>Registro</button>
           <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 " onClick={()=>{renderpagel()}}>Ingreso</button>
            </div>
            <Paybutton/>
            <Footer/>
            
        </div>
    )
}
export default Home;    

import React,{useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Registro from '../Pages/Registro';
import Login  from '../Pages/Login';
import Paybutton from '../Components/Paybutton';

const Home = ()=>{
    let[mostrar,setmostrar] = useState();
    let [registro,setregistro] = useState(false);
    let [login,setlogin] = useState(false);
  setmostrar = ()=>{mostrar = true;}

    setregistro = ()=>{
        registro=true;
    }

    setlogin = ()=>{
       registro = false;
    }

  function Mostrarpagina(login,registro){
      <div>

     { login?
            <Login/>
      :
          <Registro/>}
      </div>
   
      
  }

    
   

    return(
        <div>
            <h1>Payz Wallet </h1>
             
            <div>
                
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 "onClick={()=>{Mostrarpagina('registro')}}>Registro</button>
                
           
           
           <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 " onClick={()=>{Mostrarpagina('login')}}>Ingreso</button>
          
           
            </div>
            <Paybutton/>
            <Footer/>
            
        </div>
    )
}
export default Home;    

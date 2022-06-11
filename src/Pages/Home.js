import React,{useState,useEffect} from 'react';
import Login from './Login';
import  Registro from './Registro';


const Home = () => {
    let[login,setlogin]=useState(false);
    let [registro,setregistro] = useState(false);
    return (
        <>
            <h1>Home</h1>
            <button onClick={()=>{setregistro(true)}}> Registro </button>
            <button onClick={()=>{setlogin(true)}}> Login </button>

            {console.log(login)}
            { 
           login?<Login/>: registro? <Registro/> :null
             }
          
        </>
    );
}
export default Home;

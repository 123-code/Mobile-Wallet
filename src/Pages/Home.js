import React,{useState,useEffect} from 'react';
import Login from './Login';
import  Registro from './Registro';


const Home = () => {
    let[login,setlogin]=useState(false);
    return (
        <>
            <h1>Home</h1>
            <button onClick={()=>{setlogin(false)}}> Registro </button>
            <button onClick={()=>{setlogin(true)}}> Login </button>

            {console.log(login)}
            { useEffect(()=>{
           login?<Registro/>:<Login/>
             })}
          
        </>
    );
}
export default Home;

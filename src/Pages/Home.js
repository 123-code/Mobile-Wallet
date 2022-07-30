import React,{useState,useEffect} from 'react';
import Login from './Login';
import  Registro from './Registro';
import Addfriend from  '../Components/AddFriend.js';


const Home = () => {
    let[nombre,setnombre] = useState('Registrar');
    /*
    let[login,setlogin]=useState(false);
    let [registro,setregistro] = useState(false);
    */
setnombre = ()=>{
    fetch('mongodb://localhost:27017/payzuser',{
        mehtod:'POST',
        




    })
}
   

    return ( 
        <>
<button onClick={console.log('clicked')}>{nombre}</button>
            <h1>Home</h1>
            <button> Empieza a usar Payz </button>
            <Registro/>

        </>
    );
}
export default Home;

import React,{useState,useEffect} from 'react';
import Login from './Login';
import  Registro from './Registro';
import Addfriend from  '../Components/AddFriend.js';


const Home = () => {
    /*
    let[login,setlogin]=useState(false);
    let [registro,setregistro] = useState(false);
    */

    return ( 
        <>
            <h1>Home</h1>
            <button> Empieza a usar Payz </button>
            <Registro/>

        </>
    );
}
export default Home;

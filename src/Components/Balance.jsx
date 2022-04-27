import React,{useState} from 'react';
import Footer from '../Components/Footer';

// esto debe estar en la pag main.
const Home = ()=>{
    let[balance,setbalance] = useState(0);

    setbalance=()=>{balance=1
    return balance;
    }

    return(
        <div>
            <h2> Balance:{setbalance}</h2> 
        </div>
    )
    
}
export default Home;    
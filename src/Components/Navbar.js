import React from 'react';
import {Link} from 'react-router-dom';
import {FaWallet} from 'react-icons/fa';
import {BiTransfer} from 'react-icons/bi';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {BiHelpCircle} from 'react-icons/bi';

// agregar icons y rutas aqui. 
function Navbar(){
const elements = ['Inicio',"Mi Billetera","Transferencias","Ayuda"];
    return(
        <>
      <nav>
        
        <Link to="/" className="font-mono"> Home </Link>
       
        
      </nav>
        </>
    )
}
export default Navbar;
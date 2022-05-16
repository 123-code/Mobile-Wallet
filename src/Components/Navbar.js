import React from 'react';
import {FaWallet} from 'react-icons/fa';
import {BiTransfer} from 'react-icons/bi';
import {FaRegMoneyBillAlt} from 'react-icons/fa';
import {BiHelpCircle} from 'react-icons/bi';

// agregar icons y rutas aqui. 
function Navbar(){
const elements = ['Inicio',"Mi Billetera","Transferencias","Ayuda"];
    return(
        <>
        { 
        elements.map((element,index)=>{
            return(
                <h2 key={index}>{element}</h2>
            )
        })
         }

        </>
    )
}
export default Navbar;
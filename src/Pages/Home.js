import React from 'react';
import {Link} from 'react-router-dom';




export function info(){
    return(
        <>
        <h1> Como funciona </h1>
        </>
    )
}



export function Home(){
    return(
        <>
        
            <h1>Bienvenido</h1>
            <Link to = "info"> como funciona x </Link>
            
        </>
    )
}

export function Comprar(){
    return(
        <>
        <h1> Comprar </h1>
        </>
    )
}

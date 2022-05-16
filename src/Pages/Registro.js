import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Form from '../Components/Form';
// Nombre de usuario tiene que ser ingresado en una base de datos.
const Registro = ()=>{
  const nombres = ["Nombre","Apellido","Cedula","Edad","Usuario","Contraseña"];
  const fields = [<input type="text"/>]
  
  return(
    <>
    {
    nombres.map((nombre,index)=>{
return(
  <Form key={index} nombre={nombre} field={fields[index]}/>
)
    })
  }
    </>
  )
       
}
export default Registro


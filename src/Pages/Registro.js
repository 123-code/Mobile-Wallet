import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Form from '../Components/Form';
// Nombre de usuario tiene que ser ingresado en una base de datos.
const Registro = ()=>{
        let[Registro,SetRegistro] = useState();
            return(
        <>
      <h1> Crea tu cuenta</h1>
        <form> 

        </form> 

<Button href = "/portal" variant="contained">Registrate</Button>


        </>
    )
}
export default Registro


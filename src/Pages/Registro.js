import React,{useState} from 'react';
import Button from '@mui/material/Button';
// Nombre de usuario tiene que ser ingresado en una base de datos.
const Registro = ()=>{
        let[Registro,SetRegistro] = useState();
            return(
        <>
        <h1> Crea una Cuenta con Nosotros </h1>

<div>
        <h2>Nombre:</h2>
        <input type="text"/>
</div>

<div>
        <h2>Apellidos:</h2>
        <input type="text"/>
</div>


<div>
        <h2>Nombre De usuario:</h2>
        <input type="text"/>
</div>

<Button href = "/portal" variant="contained">Registrate</Button>


        </>
    )
}
export default Registro


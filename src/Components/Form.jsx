import React,{useState} from 'react';
import axios from 'axios';
import FormSchema from './Form';


const Form = (props)=>{
  let [data,setdata] = useState({
    Nombre:"",
    Cedula:"",
    PIN:"",
    conf:"",
    user:""
  })

    const url = 'api/postregistro';
    
    



function handlesubmit(e){
  const newdata = {...data}
  newdata[e.target.id] = e.target.value;
  setdata(newdata);
  console.log(newdata);

}

function handledatasubmit(e){

}
    return(
        <>
  <div>
    <h1> Nombre </h1>
    <input type="text" onChange={(e)=>handlesubmit(e)} value={data.Nombre}/>


    <h1> Cédula </h1>
    <input type="text" onChange={(e)=>handlesubmit(e)} value={data.Cedula}/>

    <h1> Crea un nombre de ususario</h1>
    <input type="text" onChange={(e)=>handlesubmit(e)} value={data.PIN}/>

    <h1> PIN </h1>
    <input type="text" onChange={(e)=>handlesubmit(e)} value={data.conf}/>

    <h1> Confirma tu PIN </h1>
    <input type="text" onChange={(e)=>handlesubmit(e)} value={data.user}/>

    <button onClick = {(e)=>handledatasubmit(e)}> Guardar </button>

  </div>

        

        </>
    )
}
export default Form;
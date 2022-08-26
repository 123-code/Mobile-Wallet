import React,{useState} from 'react';
import axios from 'axios';
import FormSchema from './Form';
//require("dotenv").config({ path: ".env" });



const Form = ()=>{
  let [data,setdata] = useState({
    Nombre:"",
    Cedula:"",
    PIN:"",
    conf:"",
    user:""
  })


    const url = 'http://5008/api/postregistro';
    const mongourl = process.env.MONGO_URI;
    



function handlesubmit(e){
  const newdata = {...data}
  newdata[e.target.id] = e.target.value;
  setdata(newdata);
  console.log(newdata);

}

function handledatasubmit(e){
  e.preventDefault();
  axios.post(url,{
    Nombre:data.Nombre,
    Cedula:parseInt(data.cedula),
    PIN:parseInt(data.PIN),
    conf:parseInt(data.conf),
    user:data.user,
     
  }).then(res=>{
    console.log(res.data);

  })
  .catch(err => {
    console.log(err.response);
  })

}
    return(
        <>
  <div>
    <form onSubmit={(e)=>handledatasubmit(e)}>
    <h1> Nombre </h1>
    <input  id="Nombre" type="text" onChange={(e)=>handlesubmit(e)} value={data.Nombre}/>


    <h1> Cédula </h1>
    <input id="Cedula" type="text" onChange={(e)=>handlesubmit(e)} value={data.Cedula}/>

    <h1> Crea un nombre de ususario</h1>
    <input id = "user" type="text" onChange={(e)=>handlesubmit(e)} value={data.user}/>

    <h1> PIN </h1>
    <input id = "PIN" type="text" onChange={(e)=>handlesubmit(e)} value={data.PIN}/>

    <h1> Confirma tu PIN </h1>
    <input id = "conf" type="text" onChange={(e)=>handlesubmit(e)} value={data.conf}/>

    <button> Guardar </button>
    </form>
    

  </div>

        

        </>
    )
}
export default Form;
import React,{useState} from 'react';
import axios from 'axios';
import FormSchema from './Form';


const Form = (props)=>{
    let[Nombre,setNombre] = useState('');
    let [Cedula,setCedula] = useState(0);
    let [PIN,setPIN] = useState(0);
    // stores pin confirmation values 
    let[conf,setconf] = useState(0);
    let[user,setuser] = useState('');

    const url = '//localhost:27017/payzuser';
    const MyFormSchema = new FormSchema({
      Nombre: Nombre,
      Cedula: Cedula,
      PIN: PIN,
      user: user,
      conf:conf

    });

const handledatasubmit = ()=>{
  axios(
    { url: url,
      method: 'POST',
      data: MyFormSchema}
  ).then((response)=>{
    console.log(response);

  },(error)=>{console.error(error)});
}
    return(
        <>
  <div>
    <h1> Nombre </h1>
    <input type="text" onChange={Nombre=(evt)=>Nombre=evt.target.value}/>


    <h1> Cédula </h1>
    <input type="text" onChange={Cedula=(evt)=>Cedula=evt.target.value}/>

    <h1> Crea un nombre de ususario</h1>
    <input type="text" onChange={user=(evt)=>user=evt.target.value} /> 

    <h1> PIN </h1>
    <input type="text" onChange={PIN=(evt)=>PIN=evt.target.value}/>

    <h1> Confirma tu PIN </h1>
    <input type="text" onChange={conf=(evt)=>conf=evt.target.value}/>

    <button onClick = {handledatasubmit()}> Guardar </button>

  </div>

        

        </>
    )
}
export default Form;
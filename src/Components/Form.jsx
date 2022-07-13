import React,{useState} from 'react';

const Form = (props)=>{
    let[Nombre,setNombre] = useState('');
    let [Cedula,setCedula] = useState(0);
    let [PIN,setPIN] = useState(0);
    // stores pin confirmation values 
    let[conf,setconf] = useState(0);

const handlesubmit = ()=>{
  let databody = {
    "Nombre":Nombre,
    "Cedula":Cedula,
    "PIN":PIN,
    "conf":conf
  }

  return(
    fetch('mongodb://localhost:27017/payz',{
      method:'POST',
      body: JSON.stringify(databody),
      headers:{
        
      }
    })
  )
 

}


    return(
        <>
  <div>
    <h1> Nombre </h1>
    <input type="text" onChange={setNombre=(evt)=>Nombre=evt.target.value}/>


    <h1> Cédula </h1>
    <input type="text" onChange={setCedula=(evt)=>Cedula=evt.target.value}/>

    <h1> PIN </h1>
    <input type="text" onChange={setPIN=(evt)=>PIN=evt.target.value}/>

    <h1> Confirma tu PIN </h1>
    <input type="text" onChange={setconf=(evt)=>conf=evt.target.value}/>

    <button> Guardar </button>

  </div>

        

        </>
    )
}
export default Form;
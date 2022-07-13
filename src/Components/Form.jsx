import React,{useState} from 'react';

const Form = (props)=>{
    let[Nombre,setNombre] = useState('');
    let [Cedula,setCedula] = useState(0);
    let [PIN,setPIN] = useState(0);
    // stores pin confirmation values 
    let[conf,setconf] = useState(0);
    let[user,setuser] = useState('');

const handlesubmit = ()=>{
  let databody = {
    "Nombre":Nombre,
    "Cedula":Cedula,
    "PIN":PIN,
    "conf":conf,
    "username":user
  }

  return(
    fetch('mongodb://localhost:27017/payzuser',{
      method:'POST',
      body: JSON.stringify(databody),
      headers:{
        
      }
    }).then(res=>res.json())
    .then(data=>console.log(data))
  )
 

}


    return(
        <>
  <div>
    <h1> Nombre </h1>
    <input type="text" onChange={setNombre=(evt)=>Nombre=evt.target.value}/>


    <h1> Cédula </h1>
    <input type="text" onChange={setCedula=(evt)=>Cedula=evt.target.value}/>

    <h1> Crea un nombre de ususario</h1>
    <input type="text" onChange={setuser=(evt)=>user=evt.target.value} /> 

    <h1> PIN </h1>
    <input type="text" onChange={setPIN=(evt)=>PIN=evt.target.value}/>

    <h1> Confirma tu PIN </h1>
    <input type="text" onChange={setconf=(evt)=>conf=evt.target.value}/>

    <button onClick = {handlesubmit()}> Guardar </button>

  </div>

        

        </>
    )
}
export default Form;
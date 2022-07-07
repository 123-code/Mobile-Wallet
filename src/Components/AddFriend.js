import React,{useState} from 'react';

const AddFriend = (props) => {

    let[nombre,setnombre] = useState('');
    let[account,setaccount] = useState(0);
    let [nickname,setnickname] = useState('');

const handledatasubmit = ()=>{
    let databody = {
        Nombre: nombre,
        Account: account,
        nickname: nickname

    }
    return(fetch('mongodb://localhost:27017/friends',{
        method: 'POST',
        body:JSON.stringify(databody),
        headers:{'Content-Type': 'application/json'},

    }))
.then(res=>res.json())
.then(data => console.log(data)); 

} 
  
    return(
        <>
        <form onSubmit={handledatasubmit()}>
        <h1> Nombre</h1>
        <input type="text" value={nombre} onChange={setnombre}> </input>
        <h1> Account </h1>
        <input type="text" value={account} onChange={setaccount}> </input>
        <h1> Nickname </h1>
        <input type="text" value={nickname} onChange={setnickname}> </input>
        <input type= "submit" value = "Agragar Amigo" />
         </form>
       
        </>
    )
} 
export default AddFriend;
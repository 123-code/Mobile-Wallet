// getting real time bitcoin price. 

import React,{useState,useEffect} from 'react';



export default function Price(){
  let [price,setPrice] = useState(0);
  

 async function GetPrice(){
   const Key = process.env.API_KEY;
   const url = "wss://ws.coinapi.io/v1/"
 }
    
  GetPrice();
    
  return( 
    <>
     
      
      <h1>Bitcoin Price:{price}</h1>
     
    </>
  )
}
 

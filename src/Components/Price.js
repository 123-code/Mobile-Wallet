
// use callback, use effect .map 
import React,{useState,useEffect} from 'react';

// fetching bitcoin price from public api 
export default function Price(){

let [Price,SetPrice] = useState();

  const FetchPriceData =  async () =>{
    await fetch('"wss://ws.coinapi.io/v1/"').then(
      response=>response.json()
    ).then(response=>SetPrice(response))
    .catch(error=>console.info(error));

}
useEffect(()=>{
  FetchPriceData();
})

return(<>

 {Price.map(currentPrice=>{
   // corregir problema de nombres en API 
   return (
     <h1> {`Precio Actual: ${currentPrice.price}`}</h1>
   )

 })}

</>
)
  
 
}
 

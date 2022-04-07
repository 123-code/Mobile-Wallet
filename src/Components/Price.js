
// use callback, use effect .map 
import React,{useState,useEffect,useRef} from 'react';

// fetching bitcoin price from public api 
export default function Price(){

let [Price,SetPrice] = useState('0.0');
const url = "https://api.coinbase.com/v2/prices/spot?currency=USD"
  const FetchPriceData =  async () =>{
    await fetch(url).then(
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
     <h1> {currentPrice.price}</h1>
   )

 })}

</>
)
  
 
}
 

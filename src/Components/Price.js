// getting real time bitcoin price. 

import React from 'react';
const Key = process.env.API_KEY;


export default function Price(){

  const GetPrice = async()=>{
    await fetch(Key).then(response=>response.json())
    .then(data=>console.info(data))
    .catch(err=>console.info(err));
    <h1>{data.price_usd}</h1>
  }
    
  return( 
    <>
      <h1> Bitcoin Price!</h1>
      <GetPrice/>
    </>
  )
}
 

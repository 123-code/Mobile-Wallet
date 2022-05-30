// full of bugs and not working properly.
import React ,{ useState } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

const Paybutton = (props) => {
  const { product } = props;
  let [paid,setpaid] = useState(false);
  let[balance,setbalance] = useState(0);

const handleApprove = (orderID)=>{
    setpaid(true);

}

setbalance = ()=>{
    setbalance(balance+product.price);
}

if(paid){
    // if paid save data on backend server & redirect to wallet component.
    return(
        <>
        
        <h2> Pago exitoso realizado! </h2>
        {setbalance()};
        <h3> balance actual: {balance} </h3>
        </>
    )

}

else{
   <h2> Error en el pago!</h2>
   // respond with server status 400


}

  return (
    
      <PayPalButtons createOrder={(data,actions)=>{
          return actions.order.create({
              purchase_units:[
                  {description:product.description,
                    amount:{
                        value:product.price
                    }
                }
              ]
          })
          }}
          onApprove={async(data,actions)=>{
              const order = await actions.order.capture();
              console.log("order",order);


handleApprove(data.orderID);
          }}/>

    
  );
}
export default Paybutton;
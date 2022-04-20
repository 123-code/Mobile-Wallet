const express = require('express');
const app = express();
const mongoose = require('mongoose');


//const config = require('Crypto-Wallet/Backend/config/index');
const port =5000;

async function connect(){
    return mongoose.connect('mongodb://localhost:37017/price',{
        useNewUrlParser:true,
    useUnifiedTopology:true,
    });
}

connect().then(()=>{
    console.info("Connected to database successfully");
   
}).catch((err)=>{
    console.info("Error!");
    console.error(err);
    
})


app.get("/",(req,res)=>{
    console.info("route Working");
});

app.get("/billetera",(req,res)=>{
    console.info("route Working");
});

app.get("/registro",(req,res)=>{
console.info("Route working");
});

app.get("/portal",(req,res)=>{
    console.info("route working");
});



app.listen(port,()=>{
    console.info(`Listening on port${port}`);
});
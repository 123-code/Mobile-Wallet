const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const FormSchema = require('./Models/Form.js');


//const config = require('Crypto-Wallet/Backend/config/index');
const port =5009;

async function connect(){
    return mongoose.connect('mongodb://localhost:27017/price',{
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

    console.info("Main");
    res.send("Main");
});

app.get("/billetera",(req,res)=>{
    res.send("Billetera");
});

app.post("/registro",(req,res)=>{
    res.send("Registro");
    let newregistro = new FormSchema();
    newregistro.Nombre = req.body.Nombre;
    newregistro.Apellido = req.body.Apellido;
    newregistro.Cedula = req.body.Cedula;
    newregistro.Usuario = req.body.Usuario;

    newregistro.save(function(err,data){
        if(err){
            console.info(err);
        }
        else{
            console.info("data inserted");
        }
    })
 
    
});
 
app.get("/portal",(req,res)=>{
    res.send("Portal");
});



app.listen(port,()=>{
    console.info(`Listening on port${port}`);
});
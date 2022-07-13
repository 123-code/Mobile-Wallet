const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const FormSchema = require('./Models/Form.js');
const friendSchema = require('./Models/friend.js');


//const config = require('Crypto-Wallet/Backend/config/index');
const port =5009;

async function connect(){
    return mongoose.connect('mongodb://localhost:27017/payzuser',{
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
// queue DS 
class Queue{
    
    constructor(data){
        this.queue = [];
        this.head = 0;
        this.tail = 0;
        this.friends = [];
    }


   
 queuein(data){
    this.queue[this.tail] = data;
    this.save(data);
    this.tail++;
}


queueout(){
    let size = this.tail - this.head;
    let item = this.queue[this.head];
    delete this.queue[this.head];
}

peek(){
    return this.queue[this.head];
}


}
/*
    friend.Nombre = req.body.Nombre;
    friend.Account = req.body.Account;
    friend.Amount = req.body.Amount;
    friend.nickname = req.body.nickname;
*/


app.post("/friend",(req,res)=>{

    
    let friend = new friendSchema();
    let queue = new Queue();

    friend.Nombre = "Jose";
    friend.Account = 123;
    friend.Amount = 23;
    friend.nickname = "JJ";
    
    queue.queuein(friend);
    // encolar por amount
    


});
 
app.get("/portal",(req,res)=>{
    res.send("Portal");
});



app.listen(port,()=>{
    console.info(`Listening on port${port}`);
});


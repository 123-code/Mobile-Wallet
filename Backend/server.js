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

app.post("/postregistro",bodyParser,(req,res,next)=>{
   
    /*res.send("Registro");
    req.assert("Nombre","Nombre es requerido").notEmpty();
    req.assert("Cedula","Cedula es requerido").notEmpty();
    req.assert("PIN","PIN es requerido").notEmpty(); 
    req.assert("conf","PIN es requerido").notEmpty();
    //req.assert("conf","PIN es requerido").notEmpty();
    */
    let newregistro = new FormSchema({
        Nombre : req.body.Nombre,
        Cedula :  req.body.Cedula,
        PIN : req.body.PIN,
        conf : req.body.conf,
       Usuario :  req.body.Usuario,

       /*
     "Nombre":Nombre,
    "Cedula":Cedula,
    "PIN":PIN,
    "conf":conf,
    "username":user
       */

      
    });

    let formmodel = mongoose.model('FormSchema',FormSchema);
    let newform = new formmodel({"Nombre":req.body.Nombre,"Apellido":req.body.Apellido,"Cedula":req.body.Cedula,"Usuario":req.body.Usuario});

    newform.save(function(err,data){
        if(err){
           
            console.info('ERROR');
        }
        else{
            req.redirect("/");
            console.info("data inserted");
        }
    });

    res.render('/',{
        Nombre : req.body.Nombre,
        Apellido : req.body.Apellido,
        Cedula : req.body.Cedula,
       Usuario : req.body.Usuario
    })
    
});

app.get('/registro',(req,res)=>{
    res.send("Registro");
})

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


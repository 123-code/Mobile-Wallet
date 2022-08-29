const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const FormSchema = require('./Models/Form.js');
const friendSchema = require('./Models/friend.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 5008;

async function connect(){
    return mongoose.connect('mongodb://localhost:27017/payzuser',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

try{
    connect();
    console.info("Connected to MongoDB")
}
catch (e){
    console.error(e);
}


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{

    console.info("Main");
    res.send("Main");
});

app.get("/billetera",(req,res)=>{
    res.send("Billetera");
});

app.post("/api/postregistro",jsonParser,(req,res)=>{
    let register = new FormSchema();
    register.Nombre = req.body.name;
    register.Email = req.body.Email;
    register.Cedula = req.body.Cedula;
    register.PIN = req.body.PIN;
    register.Usuario = req.body.Usuario;
    register.conf = req.body.conf;

console.log("POST");

try{
    register.save((data,err)=>{
        if(err){
            console.error(err)
        }
        else if(!err){
            console.log(data);
        }
    })
}
catch(err){
    console.error(err);
}
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


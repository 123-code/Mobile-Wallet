import  express  from 'express';
import { Sequelize } from 'sequelize';
import  main from "../Models/User";
//Crypto-Wallet/server/Models/User.ts


const server = express();

// API routes

server.get("/getuserdata",async (req,res)=>{
    try{
        const users = await payzuser.findAll();
        res.json(users);
        console.log("GET REQUEST")
    }catch(err){
        console.error(err)
    }
   

});

server.post("/postusuario", async(req,res)=>{
    try{
        const user = await main.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        })

        await user.save();
        res.send(user.toJSON());

    }catch(err){
console.error(err);
    }
})


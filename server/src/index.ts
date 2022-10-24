import  express  from "express";
import {Main} from "../Models/User";
import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });


function connecttopostgreSQL(){
    const sequelize = new Sequelize(
        {       host:'127.0.0.1',
                 port:5432,
                database:"payzreg",
                dialect:"postgres",
                username:process.env.POSTGRES_USER,
                password:process.env.POSTGRES_PASSWORD,
    
        }

    );
    // line below tests connection is ok. 
    sequelize.authenticate()
    .then(()=>{
        console.log("Connected to postgreSQL")
    }).catch((err)=>{
        console.error(err);
        process.exit(1);
    })
    return sequelize;
}

const server = express();
const port = 5002;

const main = async()=>{
connecttopostgreSQL();

server.get("/",(req,res)=>{
res.send("Main");
});

server.post("/register", async (req,res)=>{
    try{
        connecttopostgreSQL()
        let reguser = await Main();

        let usertable = await (reguser as any).create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
        })

           await (reguser as any ).save({
           usertable
           }).catch((err:any)=>{console.error(err)})
           console.log((reguser as any).toJSON());
    }catch(err){
        console.error(err);
        process.exit(1);
    }
})
server.listen(port,()=>{
    console.log(`server Listening on port ${port}!`)
})
}
main().catch((err) => {
    console.error(err);
   
})
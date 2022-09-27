import  express  from "express";
import  User from "../Models/User";
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

server.post("/register",async (req,res)=>{
    try{
        connecttopostgreSQL();
        let reguser = await User.create({
            firstname:"Jose Ignacio",
            lastname:"Naranjo",
            email:"naranjojose256@gmail.com",
            username:"jnar5",
            password:"postgres",
           }
           )
           
           await reguser.save();
           console.log(reguser.toJSON());
           
    }catch(err){
        console.error(err)
    }
})
server.listen(port,()=>{
    console.log(`server Listening on port ${port}!`)
})
}
main().catch((err) => {
    console.error(err);
   
})


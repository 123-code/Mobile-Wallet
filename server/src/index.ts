import  express  from "express";
import { Sequelize } from 'sequelize';

function connecttopostgreSQL(){
    const sequelize = new Sequelize(
        {       host:"localhost",
                 port:3406,
                database:"payzreg",
                dialect:"postgres",
                username:"jnar",
                password:"postgres",
    
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
})

server.listen(port,()=>{
    console.log(`server Listening on port ${port}!`)
})
}

main().catch((err) => {
    console.error(err);
   
})


import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });
 
export class sqlconfig{
    conf = {
        Name:"Payz",
        postgresql :{
            options : {
                host:"localhost",
                port:5432,
                database:"payzreg",
                dialect:"postgres",
                username:"jnar",
                password:"postgres",
            } 
        }
    }

}
 


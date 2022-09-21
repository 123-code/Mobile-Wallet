import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });

export class sqlconfig{
    conf = {
        Name:"Payz",
        postgresql :{
            options : {
                host:"localhost",
                port:3406,
                database:"payzreg",
                dialect:"postgres",
                username:"jnar",
                password:"postgres",
            } 
        }
    }

}
 


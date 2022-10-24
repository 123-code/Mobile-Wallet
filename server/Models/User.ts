import {Sequelize,DataTypes} from "@sequelize/core";
import * as dotenv from "dotenv";
dotenv.config({ path: "./env" });
const sequelize = new Sequelize('postgres::memory:');

export const connecttopostgres = async()=>{
    const sequelize = new Sequelize(
        {       host:'127.0.0.1',
                 port:5432,
                database:"payzreg",
                dialect:"postgres",
                username:process.env.POSTGRES_USER,
                password:process.env.POSTGRES_PASSWORD,
    
        }

    );
    sequelize.authenticate()
    .then(()=>{
        console.log("Connected to postgreSQL")
    }).catch((err)=>{
        console.error(err);
        process.exit(1);
    })
    return sequelize;
}

export const Main = async()=>{
    await connecttopostgres();
     const payzuser = sequelize.define("Payz-User",{
        firstname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            // email validation regex
            validate:{
                is:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }
        },
        username:{
            type:DataTypes.TEXT,
            allowNull:false,
            unique:true,
        },
       /*
       Shoud change to hashed password inside of database
       being used just for database testing purposes.
       */
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    
    });
    console.log(payzuser === sequelize.models.User);
}

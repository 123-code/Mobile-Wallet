import {Sequelize,DataTypes,Model} from "@sequelize/core";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
const sequelize = new Sequelize('postgres::memory:');

export const payzuser = sequelize.define("Payz-User",{
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

})
class User extends payzuser{}
export default User;
import { Sequelize } from "sequelize";

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
        console.log("Connected to postgreSQL");
        return true;
    }).catch((err)=>{
        console.error(err);
        return false;
        
    })
    return sequelize;
}


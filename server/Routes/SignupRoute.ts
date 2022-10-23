import { PostgresConnection } from "/src/db";
import bcrypt from 'bcrypt';

export const SignupRoute = {
    path: '/api/signup',
    method:'post',
    handler:  async(req:any,res:any)=>{
        const {username,PIN} = req.body;
        // get database connection here
        const db = PostgresConnection();
        if(!db){
            res.sendStatus(405);
            res.send("Error");

        }
        const PINhash = await bcrypt.hash(PIN,10);


        const userinfo = {
            Name:'',
            Lastname:'',
            Age:''
        }


        const result = await db.save({
            username,
            PINhash,
            userinfo,
        })

 const { DatabaseID }  = result;          

        

        

    } 
}
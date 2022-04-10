const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username:{
type:{},required:true,index:{unique:true}
    }

})

async function GenerateHash(password){
    const COST = 12;
    return bcrypt.hash(password,COST);
}
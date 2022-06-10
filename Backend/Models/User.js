const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    username:{
type:{},required:true,index:{unique:true}

    },
    password:{
        type:{},required:true,GenerateHash:true
    },

});

async function GenerateHash(password){
    const COST = 12;
    return bcrypt.hash(password,COST);
}
module.exports = ("PasswordSchema",UserSchema);
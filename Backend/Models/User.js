const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

async function GenerateHash(password){
    const COST = 12;
    return bcrypt.hash(password,COST);
}

const UserSchema = mongoose.Schema({
    username:{
        type:{},required:true,index:{unique:true}
    },

    Name:{
        type:String,
        required:true
    },

    Cedula:{
        type:Number,
        required:true
    },

    PIN:{
        type:Number,
        required:true,
        GenerateHash:true

    }
});


module.exports = (UserSchema);

/*
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

*/

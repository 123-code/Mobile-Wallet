const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
//const Schema = mongoose.Schema;

async function GenerateHash(password){
    const COST = 12;
    return bcrypt.hash(password,COST);
}

const FormSchema = mongoose.Schema({
    
    Nombre:{type:String,required:true},
    Cedula:{type:Number,required:true},
    PIN:{type:Number,required:true},
    Usuario:{type:{},required:true,index:{unique:true}},
    conf:{type:Number,required:true}
},

);
 module.exports = mongoose.model("FormSchema",FormSchema);

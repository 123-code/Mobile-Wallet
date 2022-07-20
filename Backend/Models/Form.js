const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const FormSchema = mongoose.Schema({
    
    Nombre:{type:String,required:true},
    Apellido:{type:String,required:true},
    Cedula:{type:Number,required:true},
    Usuario:{type:{},required:true,index:{unique:true}},
},

);
 module.exports = mongoose.model("FormSchema",FormSchema);
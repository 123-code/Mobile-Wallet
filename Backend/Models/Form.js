const mongoose = require("Mongoose");

const FormSchema = new mongoose.Schema({
    
    Nombre:{type:String,required:true},
    Apellido:{type:String,required:true},
    Cedula:{type:Number,required:true},
    Usuario:{type:{},required:true,index:{unique:true}},
},

{
    timestamps:true
}


);
module.exports = mongoose.model("Form",FormSchema);
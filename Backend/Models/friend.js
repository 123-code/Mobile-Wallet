const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    Name:{type:String,required:true},
    account:{type:Number,required:true},
    Amount:{type:Number,required:false},
    nickname:{type:String,required:true},
});

module.exports = friendSchema;
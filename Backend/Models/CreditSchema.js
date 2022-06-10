const mongoose = require('mongoose');

const Cschema = mongoose.Schema({
    Amount:{type:Number,required:true},

})

module.exports = Cschema;

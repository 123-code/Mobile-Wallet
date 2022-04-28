const mongoose = require('mongoose');

const   WalletSchema = new mongoose.Schema({
wallet:{
    type:{},required:true,index:{unique:true}},
    balance:{type:Number,required:true},
    

});
 

module.exports = mongoose.model('Wallet',WalletSchema);
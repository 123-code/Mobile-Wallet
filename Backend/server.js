const express = require('express');
const app = express();
const mongoose = require('mongoose');
const API_KEY = require(process.env.API_KEY);
const config = require('../config');
const port = 5000;

async function connect(){
    return mongoose.connect(config.mongodb.url,{
        useNewUrlParser:true,
    useUnifiedTopology:true,
    });
}

connect().then(()=>{
    console.info("Connected to database successfully");
    app.listen(port,()=>{
        console.info(`Listening on port${port}`);
    });
}).catch((err)=>{
    console.error(err);
})

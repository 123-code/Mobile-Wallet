
module.exports  =  {
    Name:"Payz",
    postgresql:{
        options:{
            host:"localhost",
            port:3406,
            database:"payzreg",
            dialect:"postgresql",
            username:process.env.POSTGRES_USER,
            password:process.env.POSTGRES_PASSWORD,
        }
    }
}


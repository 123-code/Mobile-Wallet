import  express  from "express";
const server = express();
const port = 5002;
 
const main = async()=>{
server.get("/",(req,res)=>{
res.send("Main");
})

server.listen(port,()=>{
    console.log(`server Listening on port ${port}!`)
})
}

main().catch((err) => {
    console.error(err);
})


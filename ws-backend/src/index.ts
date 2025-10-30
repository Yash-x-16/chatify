import { WebSocketServer } from "ws";
import dotenv from "dotenv" 
dotenv.config()




const wss = new WebSocketServer({port:8080})

wss.on("error",(error)=>{
    console.log(error)
})
wss.on("connection",(socket)=>{ 
    console.log("controller reached here ") ;

    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong")
        }else{
            socket.send("yash from ws-backend")
        }
    })
})
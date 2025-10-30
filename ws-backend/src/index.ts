import { WebSocketServer ,WebSocket} from "ws";
import dotenv, { parse } from "dotenv" 
dotenv.config()


interface User{
    userId?: number , 
    socket:WebSocket , 
    roomId:string
}

let allUsers:User[] = [] ; 


const wss = new WebSocketServer({port:8080})

wss.on("error",(error)=>{
    console.log("error in the ws is :", error)
})
wss.on("connection",(socket)=>{ 
    socket.on("message",(e)=>{ 

        try{
        const parsedData = JSON.parse(e as unknown as string) 
        if(parsedData.type==="join"){
            allUsers.push({
                socket: socket  , 
                userId:Number(parsedData.payload.userId) , 
                roomId:parsedData.payload.roomId
            })
         
        }
        if(parsedData.type==="chat"){
            const user = allUsers.map((x)=>{
                if(x.roomId===parsedData.payload.roomId){
                    socket.send(parsedData.payload.message) ; 
                }
            })
        }
        }catch(e){
            console.log("error in the ws",e)
        }
    })
})
import   { WebSocketServer,WebSocket } from "ws"; 
import { checkAuth } from "./auth/checkAuth.js";
import dotenv from "dotenv" 
import axios from "axios";
import { sendChat } from "./utils/utils.js";
dotenv.config() 


interface allSocket {
    socket :WebSocket  , 
    roomid:string 
}

const allSockets :allSocket[] = []
const wss = new WebSocketServer({port:8080}) 


wss.on("connection",(socket,request)=>{
  const url = request.url 
  if(!url){
    return  null 
  }

   const queryParam = new URLSearchParams(url.split('?')[1])
   const token = queryParam.get('token') 
   const userId = checkAuth(token as string) 
   if(!userId){
    wss.close() ; 
    return null 
   }


    socket.on("message",(message)=>{ 
        //@ts-ignore
      const parsedMessage = JSON.parse(message) ; 
      
      if(parsedMessage.type==="join"){ 
       
  
        allSockets.push({
            socket , 
            roomid:parsedMessage.roomid
        })
      }

      if(parsedMessage.type==="chat"){

        const HTTP_URL = process.env.HTTP_BACKEND 
        const receiverId = parsedMessage.receiverId 
        
        sendChat(HTTP_URL as string,Number(userId),Number(receiverId)) 

        const currentUser = allSockets.find((x)=>x.socket==socket)?.roomid; 
        for(let i =0 ; i<allSockets.length;i++){
            if(allSockets[i]?.roomid==currentUser){
                allSockets[i]?.socket.send(parsedMessage.message); 
            }
        }
      }
    })


})
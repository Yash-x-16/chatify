import   { WebSocketServer,WebSocket } from "ws"; 
import { checkAuth } from "./auth/checkAuth.js";

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
      const parsedMessage = JSON.parse(message ) ; 
      
      if(parsedMessage.type==="join"){ 
       
        allSockets.push({
            socket , 
            roomid:parsedMessage.payload.roomid
        })
      }

      if(parsedMessage.type==="chat"){
        const currentUser = allSockets.find((x)=>x.socket==socket)?.roomid; 
        for(let i =0 ; i<allSockets.length;i++){
            if(allSockets[i]?.roomid==currentUser){
                allSockets[i]?.socket.send(parsedMessage.payload.message); 
            }
        }
      }
    })


})
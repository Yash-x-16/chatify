import   { WebSocketServer,WebSocket } from "ws"; 

interface allSocket {
    socket :WebSocket  , 
    roomid:string 
}

const allSockets :allSocket[] = []
const wss = new WebSocketServer({port:8080}) 


wss.on("connection",(socket)=>{
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
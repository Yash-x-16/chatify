import WebSocket ,{WebSocketServer} from "ws"
import dotenv from "dotenv"
dotenv.config()

const wss = new WebSocket(process.env.BACKEND_URL  as string)

wss.on("open",(socket:WebSocket)=>{   
})
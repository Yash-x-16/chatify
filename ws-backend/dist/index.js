import { WebSocketServer, WebSocket } from "ws";
import dotenv, { parse } from "dotenv";
dotenv.config();
let allUsers = [];
const wss = new WebSocketServer({ port: 8080 });
wss.on("error", (error) => {
    console.log("error in the ws is :", error);
});
wss.on("connection", (socket) => {
    console.log("controller reached here ");
    socket.on("message", (e) => {
        try {
            const parsedData = JSON.parse(e);
            if (parsedData.type === "join") {
                allUsers.push({
                    socket: socket,
                    userId: Number(parsedData.payload.userId),
                    roomId: parsedData.payload.roomId
                });
                socket.send("user pushed to the array");
            }
            if (parsedData.type === "chat") {
                const user = allUsers.map((x) => {
                    if (x.roomId === parsedData.payload.roomId) {
                        socket.send(parsedData.payload.message);
                    }
                });
            }
        }
        catch (e) {
            console.log("error in the ws", e);
        }
    });
});
//# sourceMappingURL=index.js.map
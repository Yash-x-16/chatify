
import {client }from "../db/index.js"
export async function sendChat(url:string,receiverId:number,userId:number,message:string,roomid:number){

    try{
      await client.messages.create({
        data:{
            senderId:userId , 
            RecieverID:receiverId , 
            message , 
            roomId:roomid
        }
      })
    }catch(e){
        console.log(e)
    }
}
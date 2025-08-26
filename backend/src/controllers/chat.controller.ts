import type { Request, Response } from "express";

import { client } from "../db/db.js";

export const createRoom = async(req:Request,res:Response)=>{ 
  
    try{
        const adminId = req.userId ;  
        const {userId} = req.body  
        console.log(userId)
        const alreadyExistRoom =await client.rooms.findFirst({
            where:{
                OR:[
                    {
                adminId:Number(adminId),
                userId:Number(userId)
             }
            ,{
                 adminId:Number(userId),
                userId:Number(adminId) 
            }] 
            } ,
            include:{
                chats:true 
            }

        }) 
        if(alreadyExistRoom){
            res.status(200).json({
                messages:{
                    chats:alreadyExistRoom.chats,
                    roomId:alreadyExistRoom.roomId
                }
            })
        }else{
            const createdRoom = await client.rooms.create({
                data:{
                    adminId:Number(adminId) , 
                    userId:Number(userId) , 
                    createdAt:new Date()
                }
            }) 

            res.status(200).json({
                roomid:createdRoom.roomId
            })
        }
    }catch(e){
        res.status(400).json({
            message:`error is : ${e}`
        })
    }
}

export const postMessages = async(req:Request,res:Response)=>{
    try{
        const{senderId, RecieverId,message,roomId}=req.body
         await client.messages.create({
            data:{
                senderId , 
                RecieverId , 
                message:message ,
                roomId:roomId
            }
        }) 

    }catch(e){
        res.status(400).json({
            message:`error is ${e}`
        })
    }
}
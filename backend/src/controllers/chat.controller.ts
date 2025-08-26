import type { Request, Response } from "express";

import { client } from "../db/db.js";

export const sendMessage = async(req:Request,res:Response)=>{ 
  
    try{
        const adminId = req.userId ;  
        const userId =req.body  

        const alreadyExistRoom =await client.rooms.findMany({
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
                messages:alreadyExistRoom.map((x)=>x.chats)
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

export const getMessage = (req:Request,res:Response)=>{

}

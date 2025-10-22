import { text, type Request, type Response } from "express";
import { MessageValidations } from "../validations/validations.js";
import { client } from "../Db/db.js";


export const SendMessage= async(req:Request,res:Response)=>{
    const result = MessageValidations.safeParse(req.body)
    if(result.error){
        res.json({
            message:"invalid validation" ,
            error:result.error
        })
        return
    }
    try {
        const {text,image,recieverId} =result.data 
       await client.message.create({
            data:{
                senderId:Number(req.userId) ,
                text ,
                image ,
                receiverId:Number(recieverId)
            }
        })
        res.json({
            message:"message added" 
        })
    } catch (error) {
       res.json({
        message:"error in sending" , 
        error
       }) 
    }
}

export const deleteMessage = async(req:Request,res:Response)=>{
    try {
        const {messageId}= req.body
        if(!messageId){
            res.json({
                message:"no messageId found"
            })
            return 
        }
        await client.message.delete({
            where:{
                messageId:Number(messageId)
            }
        })
        res.json({
            message:"deleted"
        })
    } catch (error) {
        res.json({
            message:"error occured in deleting a message" , 
            error
        })
    }
}
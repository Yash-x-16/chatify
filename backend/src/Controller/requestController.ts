import type { Request, Response } from "express";
import { client } from "../Db/db.js";

export const sendRequest =  async(req:Request,res:Response)=>{
    try {
        const userId = Number(req.userId) 
        const recieverId = Number(req.body.receiverId) 

        if(!userId || !recieverId){
            res.json({
                message:"fields are required"
            })
            return ; 
        }
        if(userId === recieverId ){
            res.json({
                message:"can't send request to yourself"
            })
            return 
        }

        const isRequestAlreadyExist  = await client.request.findMany({
            where:{
                OR:[{
                senderId:userId   ,
                receiverId:recieverId
                },{
                    receiverId:userId ,
                    senderId:recieverId
                }]
            },select:{
                status:true
            }
        })

        if(isRequestAlreadyExist.length>0){
            res.json({
                message:"cannot send same request twice"
            })
            return
        }else{
            const response = await client.request.create({
                data:{
                    senderId:Number(userId) , 
                    receiverId:Number(recieverId)
                }
            })
            res.json({
                message:"request initiated",
                response:{...response}
            })
        } 
    } catch (error) {
        res.json({
            message:"error in sending request" , 
            error
        })
    }
}

export const getAllRequest = async(req:Request,res:Response)=>{
    try {
        const userID = Number(req.userId) ; 
        if(!userID){
            res.json({
                message:"how did you reached here"
            })
            return 
        }
        const allRequests = await client.request.findMany({
            where:{
             receiverId:userID , 
             status:"PENDING"
            } ,
            include:{
                sender:{
                    select:{
                       userID:true , 
                        username:true ,
                        profilePicture:true
                    }
                }
            },
        })
        
        if(allRequests.length>0){
            res.json({
                message:"here are your requests" , 
                requests:{...allRequests}
            })
        }else{
            res.json({
                message:"no requests"
            })
        }
    } catch (error) {
        res.json({
            error 
        })
    }
}
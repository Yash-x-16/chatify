import type { Request, Response } from "express";
import { client } from "../Db/db.js";


export const getContacts = async(req:Request,res:Response)=>{
    try{
        const userID = Number(req.userId)  
        const responses  = await client.contact.findMany({
            where:{
                OR:[{
                    userAId:userID
                },
            {
                userBId:userID
            }]
            } , 
            include:{
                userA:{
                    select:{
                        username:true , 
                        email:true ,
                        userID:true , 
                        profilePicture:true
                    }
                } , 
                userB: {
                    select:{
                        username:true , 
                        email:true ,
                        userID:true ,
                        profilePicture:true
                    }
                }
            } , 
        })
        if(responses.length>0){
            res.json({
                message:"here are your contacts" , 
                responses:responses
            })
        }else{
            res.json({
                message:"no contacts currently !"
            })
        }
    }catch(e){
        res.json({
            message:"error in getting contacts !"
        })
    }
} 

export const deleteContacts = async(req:Request,res:Response)=>{
    try {
        const {contactId}=req.body 
        if(!contactId){
            res.json({
                message:"contact not found" ,
            })
            return
        }
        const response = await client.contact.delete({
            where:{
                contactId:Number(contactId)
            }
        })

        res.json({
            message:"contact deleted" , 
            response
        })
        
    } catch (error) {
        res.json({
            message:"error occured in deleting contacts" , 
            error
        }) 
    }
}
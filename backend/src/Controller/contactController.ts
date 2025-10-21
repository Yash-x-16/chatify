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
                userA:true , 
                userB:true
            }
        })
        if(responses.length>0){
            res.json({
                message:"here are your contacts" , 
                responses:{...responses}
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

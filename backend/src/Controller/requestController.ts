import type { Request, Response } from "express";
import { client } from "../Db/db.js"; 

export const sendRequest =  async(req:Request,res:Response)=>{
    try {
        const userId = Number(req.userId) 
        const {recieverId }= req.body 
        console.log("reciever id is : ",recieverId)
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
                response:response
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
                requests:allRequests
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

export const updateRequest = async (req:Request,res:Response)=>{  
      try {     
        const {requestId,data,recieverId} = req.body ; 
        const userId = Number(req.userId) ; 
        console.log("STATUS IS : ",data) 

        const allRequests = await client.request.findUnique({
            where:{
                requestId:Number(requestId)
            }
        })  

        if(allRequests?.senderId === userId){
            res.json({
                message:"cannot update your own request"
            })
            return 
        } 

        if(data === "ACCEPTED"|| data === "REJECTED" || data ==="PENDING"){
             const response = await client.request.update({
            where:{
                requestId:Number(requestId)
            }  , 
            data:{
                status:data
            }
        }) 

        if(response.status==="ACCEPTED"){
                const contacts = await client.contact.create({
                    data:{
                        userAId:userId , 
                        userBId:Number(recieverId)
                    }
                }) 
                res.status(201).json({
                    message:"contact created" ,
                    contact:contacts
                }) 
        }
        }
        else{
             res.json({
                message:"invalid validation of status" , 
            })
            return 
        }

       
    } catch (e) {
        res.json({
            message:"error in updating !"
        })
    }
  } 

export const deleteRequest =  async (req:Request,res:Response)=>{
    try {
        const {requestId} = req.body 
        const userID = Number(req.userId) 
        if(!requestId){
            res.json({
                message:"request id is required" , 
            })

            return 
        }   
        const response = await client.request.delete({
            where:{
                requestId:requestId
            }
        })
        res.json({
            message:"request deleted",
            response
        })
    } catch (error) {
        res.json({
            message:"error occured in deleting request"
        })
    }
} 
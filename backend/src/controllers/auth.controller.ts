import type { Request, Response } from "express" 
import {client} from "../db/db.js"
import bcrypt from "bcrypt"
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from 'dotenv'
import { signupSchema ,signinSchema} from "../validations/validate.js"


dotenv.config()

export const signup = async(req:Request,res:Response)=>{
  
    const result  = signupSchema.safeParse(req.body) ;  
    if(result.error){
        res.status(400).json({
            message:"incorrect validations"
        }) 

        return 
    }
    
    try{
        const{username,email,password,Image} = result.data ; 

        const alreadyexist = await client.user.findUnique({
            where:{
                email
            }
        })

        if(alreadyexist){
            res.status(409).json({
                message:"user already exists"
            })
            return 
        }

        const hashedPassword = await bcrypt.hash(password,7)
        
        const response = await client.user.create({
            data:{
                username , 
                email , 
                Image : Image as string ,
                password:hashedPassword,
                createdAt : new Date() 
            }
    })

    res.status(201).json({
     message :"user created !" , 
     user : {...response,
        password:null 
     }  
    })

    }catch(e){
        res.status(401).json({
            message:`error : ${e}`       
    })
    }
}


export const signin =async (req:Request,res:Response)=>{
    const result = signinSchema.safeParse(req.body) ; 
    if(result.error){
        res.status(402).json({
            message:"invalid validations"
        }) 
        return 
    }

    try{
        const {username,password} = result.data 
        const alreadyExist =await client.user.findUnique({
            where:{
                username
            }
        }) 

        if(alreadyExist){
            const hashedPassword = await bcrypt.compare(password,alreadyExist.password)
             if(hashedPassword){
                const JWT_SECRET= process.env.JWT_SECRET 
                const userId = alreadyExist.Id
                const token = jwt.sign({userId} as unknown as string,JWT_SECRET as string) ; 
                res.status(200).json({
                    message:"user logged in " , 
                    token
                }) 
             }          
        }else{
             res.status(404).json({
                message:"user not found !!"
            })  
            return 
        }
    }catch(e){
        res.status(401).json({
            message:`error is ${e}`
        })
    }
}

export const checkAuth = async (req:Request,res:Response)=>{
    try{
        const userId = Number(req.userId)
        const User = await client.user.findUnique({
            where:{
                Id:userId
            }
        })

        res.status(200).json({
            user:{...User,password:null}
        })
    }catch(e){
        res.json({
            mssage:`error is ${e}`
        })
    }
}
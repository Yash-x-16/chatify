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


export const signin = ()=>{}
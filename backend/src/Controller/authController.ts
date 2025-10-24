import type { Request, Response } from "express";
import { signinValidations,signupValidations } from "../validations/validations.js";
import { client } from "../Db/db.js";
import bcrypt from "bcrypt"
import jwt, { type JwtPayload } from "jsonwebtoken" 
import dotenv from "dotenv" 
dotenv.config()

export const Signup = async(req:Request,res:Response)=>{

    const result = signupValidations.safeParse(req.body) ;  
    if(result.error){
        
        res.json({
            message:"invalid Validation" , 
            error:result.error
        })

        return
    }

    try{
        const {email,username,password} = result.data ; 
        const isAlreadyExist = await client.user.findUnique({
            where:{
                email
            }
        })
        if(isAlreadyExist){
            res.json({
                message:"user already exist"
            })
            return 
        }
        const salt = await bcrypt.genSalt(10) 

        const hashedPassword = await bcrypt.hash(password,salt) ; 
        
        const user = await client.user.create({
            data:{
                email,
                username , 
                password:hashedPassword
            }
        })

       const token = jwt.sign({userId:user.userID},process.env.JWT_SECRET as string) 
        res.status(201).json({
            message:"user created" , 
            user:{...user,password:null} , 
            token
        })

    }catch(e){
        res.json({
            message:"error in signup" , 
            error:e
        })
    }

} 

export const Signin = async(req:Request,res:Response)=>{
    const result = signinValidations.safeParse(req.body) ; 
    if(result.error){
        res.json({
            message:"invalid validation"
        })
        return
    }
    try{
        const{email,password} = result.data 
        const isUserExist = await client.user.findUnique({
            where:{
                email
            }
        })

        if(isUserExist){
            const hashedPassword = await bcrypt.compare(password,isUserExist.password)
            if(hashedPassword){
                const token = jwt.sign({userId:isUserExist.userID}as JwtPayload,process.env.JWT_Secret as string,{expiresIn:"7d"})  
                res.json({
                    message:"logged in" , 
                    token ,
                    user:{...isUserExist,password:null}
                })
            }else{
                res.status(401).json({
                    message:"unauthenticated user"
                })
            }
        }else{
            res.json({
                message:"user doesn't exist"
            })
        }
    }catch(e){
        res.json({
            message:"error in signin" , 
            error:{e}
        })
    }
}

export const getUser =  async(req:Request,res:Response)=>{
    try{
        const userId = req.userId 
        
        const user = await client.user.findUnique({
            where:{
                userID:Number(userId)
            }
        })
        res.status(200).json({
            message:"user..." , 
            user:{...user,password:null}
        })
    }catch(e){
        res.status(404).json({
            message:"error in getting user" , 
            error:{e}
        })
    }
}
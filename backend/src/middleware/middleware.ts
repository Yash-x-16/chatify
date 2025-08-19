import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv" 

dotenv.config() ; 

export const Middleware =async(req:Request,res:Response,next:NextFunction)=>{
    try{

        const token = req.headers["token"] 
        const JWT_SECRET= process.env.JWT_SECRET ; 
        const decoded = jwt.verify(token as string,JWT_SECRET as string ) as JwtPayload
        if(decoded.userId){ 
            req.userId = decoded.userId ; 
            next()
        }else{
            res.status(400).json({
                message:"unauthorized !!"       
        })
        }
    }catch(e){
        res.status(400).json({
            message:`error is ${e}`
        })
    }
}
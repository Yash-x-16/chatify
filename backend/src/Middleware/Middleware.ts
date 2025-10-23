import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv" 
dotenv.config()
export const Middleware = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const token = req.headers["token"] ;
        if(!token){
            res.status(404).json({
                message:"token is required!"
            })
            return
        }
        const decoded = jwt.verify(token as string,process.env.JWT_SECRET as string) as JwtPayload 
        if(decoded){
            req.userId = decoded.userId ; 
            next()
        }else{
            res.status(401).json({
                message:"unauthorized by middleware !"
            })
        }
    }catch(e){
        res.status(404).json({
            message:"error in middleware" , 
            error:{e}
        })
    } 
}
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv" 

dotenv.config()


export const checkAuth  = (token:string)=>{
    try{
        const JWT_SECRET= process.env.JWT_SECRET ; 

        const decoded = jwt.verify(token,JWT_SECRET as string) as JwtPayload 
        if(!decoded.userId){
            return null
        }else{
            return decoded.userId ; 
        }
    }catch(e){
        console.log(e)
    }
}
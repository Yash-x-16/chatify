import {z} from "zod" 

export const signupSchema = z.object({
    username : z.string().min(6,{message:"username must be minimum of 6 characters"}) ,
    email:z.email({message:"invalid email address"}), 
    password:z.string().min(6,{message:"password must be of minimum 6 char"}),
    Image:z.string().optional() 
})

export const signinSchema = z.object({
    username: z.string().min(6,{message:"username must be minimum of 6 characters"}),
    password:z.string().min(6,{message:"password must be of minimum 6 char"}),
})
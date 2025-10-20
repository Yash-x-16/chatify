import {z} from "zod"


export const signupValidations = z.object({
    username:z.string().min(6).max(20) , 
    password:z.string().min(6).max(20) , 
    email:z.email() 
})


export const signinValidations = z.object({ 
    password:z.string().min(6).max(20) , 
    email:z.email() 
})


export const MessageValidations = z.object({
    text:z.string(),
    image:z.string().optional()
})

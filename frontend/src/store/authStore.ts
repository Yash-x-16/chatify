import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

interface authType{
    isAuthChecking:boolean , 
    authUser:null |{} ,
    isauthUSer:()=>Promise<void> ,
    isSigninUp:boolean , 
    signup:(data:{
        username:string , 
        email:string , 
        password:string 
    })=>Promise<void>
}

export const authStore = create<authType>((set)=>({
    isAuthChecking:false , 
    
    authUser:null , 
    
    isauthUSer :async()=>{
        try {
            set({isAuthChecking:true})
            const response =await  axiosInstance.get('/auth/getUser')
            console.log(response)
            set({authUser: response.data})  
            toast.success("account created succesfully")
        } catch (error) {
            console.log("error in the authUser function",error) 
            set({authUser:null})
        }finally{
            set({isAuthChecking:false})
        }
    } , 


    isSigninUp:false ,

    signup:async(data)=>{
        try{
            set({isSigninUp:true})
            const response = await axiosInstance.post('/auth/signup',data)
            console.log("response from signup function is ",response.data)
            set({authUser:response.data.user}) 
        }catch(e){
            set({authUser:null})
            console.log("error in signup",e)
        }finally{
            set({isSigninUp:false})
        }
    }
}))

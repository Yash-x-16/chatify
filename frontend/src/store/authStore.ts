import {create} from "zustand"
import { axiosInstance } from "../lib/axios"

interface authType{
    isAuthChecking:boolean , 
    authUser:null |{} ,
    isauthUSer:()=>Promise<void>
}
export const authStore = create<authType>((set)=>({
    isAuthChecking:false , 
    authUser:null , 
    isauthUSer :async()=>{
        try {
            set({isAuthChecking:true})
            const response =await  axiosInstance.get('/auth/getUser')
            console.log(response)
            set({authUser:( response).data}) 
        } catch (error) {
            console.log("error in the authUser function",error) 
            set({authUser:null})
        }finally{
            set({isAuthChecking:false})
        }
    }
}))

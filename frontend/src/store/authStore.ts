import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
export const authStore = create((set)=>({
    isAuthChecking:false , 
    authUser:null , 
    isauthUSer :async()=>{
        try {
            set({isAtuhChecking:true})
            const response =await  axiosInstance.get('/auth/getUser')
            console.log(response)
            set({authUser:( response).data}) 
        } catch (error) {
            console.log("error in the authUser function",error) 
            set({authUSer:null})
        }finally{
            set({isAuthChecking:false})
        }
    }
}))

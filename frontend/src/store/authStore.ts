import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

interface authType{
    isAuthChecking:boolean , 
    authUser:null |{
        username:string , 
        email:string , 
        password:string 
    } ,
    isauthUSer:()=>Promise<void> ,
    isSigninUp:boolean , 
    signup:(data:{
        username:string , 
        email:string , 
        password:string 
    })=>Promise<void> ,
    
    login:(data:{
        email:string , 
        password:string 
    })=>Promise<void> ,

}

export const authStore = create<authType>((set)=>({
    isAuthChecking:false , 
    
    authUser:null , 
    
    isauthUSer :async()=>{
        try {
            set({isAuthChecking:true})
            const response =await  axiosInstance.get('/auth/getUser',{
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            console.log(response)
            set({authUser: response.data.user})  
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

            if(response.data.token){ 
            localStorage.setItem("token",response.data.token)
            set({authUser:response.data.user}) 
            toast.success("account created")

            }else{
                toast.error(response.data.error)
            }
        }catch(e){
            set({authUser:null})
            console.log("error in signup",e)
        }finally{
            set({isSigninUp:false})
        }
    }

    , 
    login:async(data)=>{
        try {
            set({isSigninUp:true}) 
            const response = await axiosInstance.post('/auth/signin',data) 
            const token = response.data.token 
            if(token){
                localStorage.setItem("token",token)
                set({authUser:response.data.user}) 
                toast.success("logged in")
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("error in signup page is ",error)
        }
    }
}))

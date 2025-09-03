import { InputBox } from "../components/ui/inputBox";
import { AiOutlineMail } from 'react-icons/ai';
import { TbLockPassword } from 'react-icons/tb'; 
import { Button } from "../components/ui/Button";
import { useState } from "react";
export function AuthPage(){

    const[active,inactive] = useState(true)

    return <div className="flex animate-glow  justify-center items-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 h-screen w-screen">
        <div className="h-auto w-96    flex flex-col">
            <div className="flex flex-col justify-center items-center " >
                <h1 className="text-4xl font-medium  text-transparent bg-clip-text inline-block bg-gradient-to-br from-emerald-200 to-emerald-500">
                    NexusChat
                </h1> 
                <span className="text-white font-medium mt-3">
                    where conversation spark connections
                </span>
            </div> 
            <div className="mt-5 h-max w-full  flex flex-col shadow-2xl p-4 rounded-2xl relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:bg-white/15 bg-white/10">
                <div className="flex w-full p-3  bg-white/20 rounded-xl justify-between relative"> 
                <div className={`absolute top-1 bottom-1   bg-amber-400 w-1/2 transition-transform duration-300 rounded-xl`}style={{
            transform:
               `${active ? "translate-x-0" : "translate-x-full"}`,
          }}>
                </div>
                    <button onClick={()=>{inactive(!active)}}
                     className="cursor-pointer w-1/2   flex  z-10 justify-center py-1 rounded-md  transition-all delay-100"
                    > 
                        <span className="text-white "> 
                            Login
                        </span>
                    </button>
                    <button onClick={()=>{inactive(!active)}} 
                    className="cursor-pointer   flex w-1/2 justify-center  z-10 py-1 rounded-md  transition-all delay-100"> 
                        <span className="text-white ">
                                Signup
                        </span>
                    </button>
                </div> 
                <div className="h-max  flex flex-col mt-4">
                    <div >
                        <InputBox text="Enter your email" label="Email" fullWidth={true} >
                        <AiOutlineMail size={'22px'}/>
                        </InputBox>
                    </div>
                    <div className="mt-5 ">
                        <InputBox text="Enter your Password" label="Password"  fullWidth={true}>
                        <TbLockPassword size={'22px'}/>
                        </InputBox>
                    </div>
                </div> 
                <div className="mt-4 cursor-pointer flex justify-end items-end">
                    <span className="text-cyan-300 text-sm hover:text-cyan-200 transition-colors duration-200 font-medium">
                        forgot password  ? 
                    </span>
                </div>
                <div className="flex   transition-all delay-100 justify-center mt-4">
                    <Button text="Signin" variant="primary" size="lg" onClick={()=>{}} fullwidth={true}></Button>
                </div>
                 <div className="relative my-6 "> 
                    <div className="inset-0 absolute flex items-center">
                        <hr className=" text-white/15 border-t w-full" />     
                    </div> 
                   <div className="relative justify-center items-center flex px-4">
                    <span className="text-white font-medium bg-transparent text-sm">or continue with </span>
                   </div>
                </div>
                <div className=" w-full flex  justify-center items-center">
                    <div className="bg-white/10 text-sm cursor-pointer hover:bg-white/20 items-center border-white/15 text-white border rounded-md px-6 py-1">
                        Google
                    </div>
                    <div className="bg-white/10 text-sm cursor-pointer hover:bg-white/20  items-center border-white/15 text-white border rounded-md px-6 ml-4 py-1 ">
                        GitHub
                    </div>
                </div>
            </div>
        </div>
    </div>
}
import { InputBox } from '../ui/inputBox';
import { AiOutlineMail } from 'react-icons/ai';
import { TbLockPassword } from 'react-icons/tb'; 
import { Button } from '../ui/Button';
import { useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export function LoginComponent(){
 const[lock,setlock] = useState(true) 
    return <div> 
         <div className="h-max  flex flex-col mt-4 transition-all duration-700 ease-in-out ">
                    <div >
                        <InputBox text="Enter your email" label="Email" fullWidth={true} >
                        <AiOutlineMail size={'22px'}/>
                        </InputBox>
                    </div>
                    <div className="mt-4">
                                    <InputBox text="Enter Your Password"
                                    type={lock?"password":"text"}
                                    label="Password" 
                                    fullWidth={true} 
                                    iconOnEnd={lock?
                                         <IoEyeOutline size={"22px"} onClick={()=>{setlock(!lock)}}/>:<FaRegEyeSlash size={"22px"} onClick={()=>{setlock(!lock)}}/>}>
                                        <TbLockPassword size={"22px"}/>
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
                    <div className="bg-white/10 text-sm cursor-pointer hover:bg-white/20 items-center border-white/15 text-white border rounded-md px-8 py-2">
                        Google
                    </div>
                    <div className="bg-white/10 text-sm cursor-pointer hover:bg-white/20  items-center border-white/15 text-white border rounded-md px-8 ml-4 py-2 ">
                        GitHub
                    </div>
                </div>
                </div>
}
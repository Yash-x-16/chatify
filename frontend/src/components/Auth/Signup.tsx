import { InputBox } from "../ui/inputBox";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineMail } from 'react-icons/ai';
import { Button } from "../ui/Button";
import { useState } from "react";

export function  SignupComponent(){
    const[lock,setlock] = useState(true) 
    const [visible,setVisible] = useState(true)
return <div>
          <div className="h-auto  flex flex-col mt-4 ">
            <div>
                <InputBox text="Enter Your Username" label="Username" fullWidth={true}>
                    <FaUser size={"20px"}/>
                </InputBox>
            </div>
            <div className="mt-4">
                <InputBox text="Enter Your Email" label="Email" fullWidth={true}>
                    <AiOutlineMail size={"22px"}/>
                </InputBox>
            </div>
            <div className="mt-4">
                <InputBox text="Enter Your Password" label="Password" fullWidth={true} iconOnEnd={lock? <IoEyeOutline size={"22px"}/>:<TbLockPassword size={"22px"} />}>
                    <TbLockPassword size={"22px"}/>
                </InputBox>
            </div>
          </div>  
          <div className="mt-8 mb-2">
            <Button variant="primary" size="lg" text="Join NexusChat" onClick={()=>{}}></Button>
          </div>  
          <div className="relative my-6 "> 
                    <div className="inset-0 absolute flex items-center">
                        <hr className=" text-white/15 border-t w-full" />     
                    </div> 
                   <div className="relative justify-center items-center flex px-4">
                    <span className="text-white font-medium bg-transparent text-sm">or continue with </span>
                   </div>
                </div>
           <div className=" w-full flex  justify-center items-center ">
                    <div className="bg-white/10 text-sm  cursor-pointer hover:bg-white/20 items-center border-white/15 text-white border rounded-md px-8 py-2">
                        Google
                    </div>
                    <div className="bg-white/10 text-sm cursor-pointer hover:bg-white/20  items-center border-white/15 text-white border rounded-md px-8 ml-4 py-2 ">
                        GitHub
                    </div>
                </div>
    </div>
}
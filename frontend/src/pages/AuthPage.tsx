import { InputBox } from "../components/ui/inputBox";
import { AiOutlineMail } from 'react-icons/ai';
import { TbLockPassword } from 'react-icons/tb';
export function AuthPage(){
    return <div className="flex animate-glow  justify-center items-center bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 h-screen w-screen">
        <div className="h-auto w-auto flex flex-col">
            <div className="flex flex-col justify-center items-center " >
                <h1 className="text-4xl font-medium  text-transparent bg-clip-text inline-block bg-gradient-to-br from-emerald-200 to-emerald-500">
                    NexusChat
                </h1> 
                <span className="text-white font-medium mt-3">
                    where conversation spark connections
                </span>
            </div> 
            <div className="mt-5 min-h-max min-w-max flex flex-col shadow-2xl p-4 rounded-2xl relative overflow-hidden transition-all duration-500 hover:shadow-3xl hover:bg-white/15 bg-white/10">
                <div className="flex w-auto p-4  bg-white/20 rounded-xl justify-between">
                    <button className="cursor-pointer pl-2"> 
                        <span className="text-white"> 
                            Login
                        </span>
                    </button>
                    <button className="cursor-pointer pr-2"> 
                        <span className="text-white">
                                signup
                        </span>
                    </button>
                </div> 
                <div className="h-max w-max flex flex-col mt-4">
                    <div>
                        <InputBox text="Enter your email" label="Email" >
                        <AiOutlineMail size={'22px'}/>
                        </InputBox>
                    </div>
                    <div className="mt-5">
                        <InputBox text="Enter your Password" label="password" >
                        <TbLockPassword size={'22px'}/>
                        </InputBox>
                    </div>
                </div> 
                <div className="mt-4 cursor-pointer flex justify-end items-end">
                    <span className="text-cyan-300 text-sm hover:text-cyan-200 transition-colors duration-200 font-medium">
                        forgot password  ? 
                    </span>
                </div>
                <div className="flex bg-green-600 hover:scale-105 transition-all delay-100 justify-center mt-4">
                    <button className=" text-white cursor-pointer">
                        button 
                    </button>
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
                    <div className="bg-white/10 text-sm cursor-pointer  items-center border-white/15 text-white border rounded-md px-6 py-1">
                        Google
                    </div>
                    <div className="bg-white/10 text-sm cursor-pointer  items-center border-white/15 text-white border rounded-md px-6 ml-4 py-1 ">
                        GitHub
                    </div>
                </div>
            </div>
        </div>
    </div>
}
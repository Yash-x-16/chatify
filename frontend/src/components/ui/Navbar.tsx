import { IoChatbubblesOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { InputBox } from "./inputBox";
import { IoIosNotificationsOutline } from "react-icons/io";
export function HomeNavbar(){
    return <div className="w-full  bg-white/20 h-24"> 
    <div className="flex h-full">
            <div className="flex items-center justify-center ml-4  "> 
                <div className="flex  rounded-lg px-4 py-1 text-yellow-300 animate-pulse">
                    <IoChatbubblesOutline size={"32px"}/>
                </div>
                <div className="flex flex-col ml-2 ">
                    <h1 className="font-medium text-lg bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-300  bg-clip-text text-transparent">
                        Nexuschat
                    </h1>
                    <p className="text-white/60 text-xs">Dashboard</p>
                </div>  
                <div className="h-full ">
                    <hr className="  ml-20.5 h-full border-l-1  border-l-white/25 bg-white/25" />
                </div>
            </div>
            <div className="flex justify-between w-full items-center">

            <div className="flex justify-center items-center ml-10 h-full">
                 <div>
                    <div>
                        <h1 className="text-white font-medium text-4xl ">
                         Dashboard
                      </h1> 
                    </div>
                    <div className="justify-center items-center ">
                          <p className="text-sm text-white/60 inline-block">
                            Welcome back! Here's what's happening with NexusChat today.
                          </p>
                    </div>
                </div>
            </div> 
            <div className="flex justify-center items-center ">
                <div className="flex  items-center">
                     <InputBox type="text" text="search . . .">
                        <div className="text-white/50">
                        <CiSearch size={"22px"}/>
                        </div>
                     </InputBox>
                </div>
                <div className="hover:bg-white/20 rounded-md ml-4 cursor-pointer px-1  mt-4 transition-all duration-300 text-white/80 flex justify-center items-center">
                    <IoIosNotificationsOutline size={"30px"}/>
                </div>
                <div className="size-10 flex items-center justify-center ml-4 mr-20 cursor-pointer bg-green-300 mt-4 rounded-full">
                    <h1 className="text-white/80">
                        A
                    </h1>
                </div>
            </div> 
           </div>
        </div>
    </div>
}
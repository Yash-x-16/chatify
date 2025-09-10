import { IoChatbubbleOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import {   type ReactNode } from "react";
import { useContext } from "react"; 
import { CardContext } from "../../contexts/dashboardContext";
import {  LogOut } from "lucide-react";

interface items{
    label:string , 
    id:string , 
    icons:ReactNode
}

export function Sidebar(){
    const context = useContext(CardContext) 


    if(!context){
        return
    }
    const {selected,setSelected} = context

    const items:items[] =
     [{
       id:"chats",label:"Chats" , icons:<IoChatbubbleOutline size={"24px"}/>},
       
       {
        id:"friends" , label:"Friends" , icons:<PiUsersLight size={"24px"}/>
       }
       ,
       {
        id:"calls" , label:"Calls",icons:<IoCallOutline size={"24px"}/>
       },
       {
        id:"settings",label:"Settings",icons:<CiSettings size={"24px"}/>
       } 
       
    ]

    return <div className="w-64  backdrop-blur-xl border-r border-white/20 flex flex-col">
         <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-col space-x-2 px-3 py-2">
                <h1 className="text-lg font-bold bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  NexusChat
                </h1>
                <p className="text-white/60 text-xs">Admin Dashboard</p>
              </div>
            </div>
          </div>
        <nav className=" flex flex-1 p-4  w-full relative ">
            <div className=" space-y-4 mt-10">
            {items.map((x)=>(<div
            key={x.id} 
            onClick={()=>{setSelected(x.id)}} 
            className={`flex px-10 py-2  space-x-3 rounded-lg justify-around items-center transition-all duration-300
            ${selected === x.id ? "bg-white/20 text-white" : "text-white/50 hover:text-white hover:bg-white/15"}`}
            >
                <div className={` cursor-pointer`}>
                    {x.icons}
                </div> 
                <div className="text-lg font-medium cursor-pointer ml-3">
                    {x.label}
                </div>

            </div>))}
            </div>

            
        </nav>
         <div className="p-4 border-t border-white/20">
            <button
              onClick={()=>{}}
              className="w-full cursor-pointer justify-center flex items-center space-x-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200">
                <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
    </div> 
    
}
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useState, type ReactNode } from "react";


interface items{
    label:string , 
    id:string , 
    icons:ReactNode
}

export function Sidebar(){

    const [selected,setSelected] = useState<String |null>(null)
    const items:items[] =
     [{
       id:"chats",label:"chats" , icons:<IoChatbubbleOutline size={"24px"}/>},
       
       {
        id:"friends" , label:"friends" , icons:<PiUsersLight size={"24px"}/>
       }
       ,

       {
        id:"settings",label:"Settings",icons:<CiSettings size={"24px"}/>
       }
    ]

    return <div className="h-full w-60 border-r-white/25 border-t-white/40  flex border  ">
        <div className="flex flex-col justify-between items-center  relative h-full w-full bg-white/20">
            <div className="flex justify-start  flex-col items-center gap-6 mt-6 w-full h-1/2">
            {items.map((x)=>(<div
            key={x.id} 
            onClick={()=>{setSelected(x.id)}} 
            className={`flex  px-10 py-2 rounded-lg justify-center items-center transition-all duration-500
            ${selected === x.id ? "bg-white/20 text-white" : "text-white/50 hover:text-white hover:bg-white/15"}`}
            >
                <div className="mr-4 cursor-pointer">
                    {x.icons}
                </div> 
                <span className="text-lg font-medium cursor-pointer">
                    {x.label}
                </span>

            </div>))}
              
            </div>
            <div className="h-full w-full absolute top-96 mt-20 mr-4 border-t-white/20 ">
            <hr className="text-white/40 m-4"/>

                <div className="flex justify-center items-center transition-all duration-700 py-2    text-white/50 cursor-pointer hover:text-white  hover:bg-white/15  w-1/2 m-auto rounded-lg ">
                    <IoIosLogOut size={"24px"}/>
                    <span className=" text-lg font-medium ml-2" >
                        Logout
                    </span>
                </div>
            </div>

        </div>
    </div>
}
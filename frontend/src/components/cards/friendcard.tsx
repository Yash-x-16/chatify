import { BiChat } from "react-icons/bi"
import { HiDotsVertical } from "react-icons/hi";
export function FriendCard() {
    return (
        <div className="flex p-4 bg-white/20 w-80  rounded-xl relative flex-col">
            <div className="flex items-center">
                <div className="flex gap-6">
                    <div className="rounded-full bg-red-300 relative size-18"></div>
                    <div className="flex justify-center  flex-col ">
                        <h1 className="text-white font-semibold text-lg">Name
                            
                        </h1>
                       
                    </div>
                </div>
            </div>
            <div className="flex  text-white/40 w-full space-x-4 items-center px-3 py-2 rounded-md">
                <span className="text-base">
                    8 mutual friends
                </span>
                <div className="flex gap-2 ml-auto">
                    <div className=" bg-white/30 text-green-300 rounded-md p-1 flex items-center cursor-pointer hover:bg-white/40 transition-all duration-200  justify-center">
                        <BiChat size={"24px"} />
                    </div>
                    <div className="text-white bg-white/30 rounded-md p-1 font-light flex cursor-pointer hover:bg-white/40 transition-all duration-200 items-center justify-center">
                        <HiDotsVertical size={"24px"} />
                    </div>
                </div>
            </div>
        </div>  
        
        
    )
}
import { BiChat } from "react-icons/bi"
export function FriendCard(){
    return <div className="flex p-2 bg-white/20 w-56 gap-3 rounded-lg relative flex-col">
       <div className="flex   items-center">
        <div className="flex gap-4   ">
            <div className="rounded-full bg-red-300 relative size-12"></div> 
            <div className="flex justify-center flex-col ">
                <h1 className="text-white font-medium">Name</h1>
                <span className=" text-white/40">online</span>
            </div>
        </div>
       </div> 
       <div className="flex bg-blue-500 text-white/40 w-full space-x-3">
        <span>
            8 mutual friend
        </span>
        <div className="text-white bg-white/30 rounded-md ">
            <BiChat size={"22px"}/>
        </div>
       </div>
    </div>
}
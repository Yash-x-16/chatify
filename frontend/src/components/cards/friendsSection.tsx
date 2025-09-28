import { Button } from "../ui/Button"
import { FriendCard } from "./friendcard"
import { FriendRequest } from "./friendRequest"
export function FriendsSection(){
    return<div className=" bg-white/10 h-full rounded-2xl p-4 "> 
          <div className="flex w-full justify-between flex-1">
           <h1 className="text-lg text-white font-bold ">
            Friends
           </h1>
           <Button text="Add Friends" size="sm" onClick={()=>{}} variant="primary" classname="bg-gradient-to-br from-emerald-400 to-emerald-500 "/>
          </div>
          <FriendCard/> 
          <div className="mt-4"> 
            <h1 className="text-lg text-white font-bold mb-2">
               Friend Requests
            </h1>
            <FriendRequest/>
          </div>
        </div> 
    
}
import { Button } from "../ui/Button"
import { FriendCard } from "./friendcard"
export function FriendsSection(){
    return   <div className=" bg-white/10 h-full rounded-2xl p-4 "> 
          <div className="flex w-full justify-between ">
           <h1 className="text-lg text-white font-bold ">
            Friends
           </h1>
           <Button text="Add Friends" size="sm" onClick={()=>{}} variant="primary" />
          </div>
          <FriendCard/>
        </div>
}git 
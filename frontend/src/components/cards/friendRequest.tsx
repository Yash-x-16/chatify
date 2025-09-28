import { Button } from "../ui/Button";
export function FriendRequest() {
    return (
        <div className="flex p-4 bg-white/20 w-full  rounded-xl relative flex-col">
            <div className="flex items-center">
                <div className="flex gap-6">
                    <div className="rounded-full bg-red-300 relative size-18"></div>
                    <div className="flex justify-center  flex-col ">
                        <h1 className="text-white font-semibold text-lg">Name</h1>
                    </div>
                </div>
                <div className="flex gap-4 ml-auto ">
                 <Button variant="primary" size="sm" onClick={()=>{}} text="accept" classname="bg-gradient-to-br from-emerald-400 to-emerald-500"/>
                 <Button variant="primary" size="sm" onClick={()=>{}} text="reject" classname="bg-gradient-to-br from-red-400 to-red-500"/>
             </div>
            </div>
 
        </div>  
        
        
    )
}
interface userCard{
    username?:string , 
    profile?:string , 
    isunderlined?:boolean
}
function UserCards(prop:userCard) {
  return (
    <div className="flex gap-2 flex-col cursor-pointer">
        <div className="flex gap-3">
            <div className="flex  items-center p-4 rounded-full bg-orange-500">
                {prop.profile}
            </div>
            <div className="font-semibold font-sans">
                {prop.username}
            </div>
        </div>  
        {prop.isunderlined?<div className="w-full p-4">
            <div className="border-t border-t-gray-300">
            </div>
        </div>:null}  
        
    </div>
        
  )
}

export default UserCards
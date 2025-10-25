interface userCard{
    username?:string , 
    profile?:string
}
function UserCards(prop:userCard) {
  return (
    <div className="flex gap-2 flex-col">
        <div className="flex gap-3">
            <div className="flex  items-center p-4 rounded-full bg-orange-500">
                {prop.profile}
            </div>
            <div>
                {prop.username}
            </div>
        </div>    
        <div className="w-full p-4">
            <div className="border-t border-t-gray-300">
            </div>
        </div>
    </div>
        
  )
}

export default UserCards
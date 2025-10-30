interface userCard{
    username?:string , 
    profile?:string , 
    isunderlined?:boolean
}
function UserCards(prop:userCard) {
  return (
    <div className="flex gap-2 flex-col cursor-pointer">
        <div className="flex gap-3">
            <img className="flex size-12 items-center  rounded-full bg-orange-500" src={"https://res.cloudinary.com/ddmtv1dut/image/upload/v1761449270/5907_ng3njp.jpg"}/>
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
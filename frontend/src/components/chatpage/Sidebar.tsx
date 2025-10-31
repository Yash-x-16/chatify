import {  Sparkle,MessageCircleMore,Trash, Contact,  User, UserPlus} from "lucide-react"
import { useChatStore } from "../../store/chatStore"
function Sidebar() {
  const {currentPage,setCurrentPage}= useChatStore()
  return (
    <div className="bg-[#02011b] text-white max-h-screen min-w-20 rounded-xl shadow-md flex flex-col justify-between">
        <div>
           <div className="flex justify-center items-center mt-6"> 
            <Sparkle size={"35px"} className="text-orange-500"/>
           </div>
        </div>    
        <div>
          <div className="flex flex-col justify-center items-center gap-10">
            <MessageCircleMore 
            onClick={()=>{
              setCurrentPage("chat")
            }}
            className={`cursor-pointer hover:text-orange-400 transition-all duration-300 ${currentPage==="chat"?"text-orange-500":"text-slate-300"}`} size={"22px"}/>
            <Contact
               onClick={()=>{
              setCurrentPage("contact")
            }}
             size={"22px"} className={`cursor-pointer hover:text-orange-400 transition-all duration-300 ${currentPage==="contacts"?"text-orange-500":"text-slate-300"}`}/>
            <UserPlus 
              onClick={()=>{
              setCurrentPage("request")
            }}
            size={"22px"}    className={`cursor-pointer hover:text-orange-400 transition-all duration-300 ${currentPage==="requests"?"text-orange-500":"text-slate-300"}`}/>
            <Trash 
              onClick={()=>{
              setCurrentPage("delete")
            }}
            size={"22px"}   className={`cursor-pointer hover:text-orange-400 transition-all duration-300 ${currentPage==="delete"?"text-orange-500":"text-slate-300"}`}/>
          </div>
        </div>    
        <div className="mb-7 flex justify-center items-center">
            <div className="flex justify-center items-center bg-gray-800 rounded-full p-2">
              <User 
               onClick={()=>{
              setCurrentPage("profile")
            }}
              className={` hover:text-orange-400  ${currentPage==="profile"?"text-orange-500":"text-slate-300"} cursor-pointer`} size={"22px"}/>
            </div>
        </div>    
    </div>
  )
}

export default Sidebar
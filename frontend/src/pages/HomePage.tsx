import Sidebar from "../components/chatpage/Sidebar" 
import { useChatStore } from "../store/chatStore" 
import ContactPage from "./ContactPage" 
import RequestPage from "./RequestPage"
import ChatPage from "./ChatPage"
function HomePage() { 
    const {currentPage} = useChatStore() 
  return (
  <div className="h-screen p-4 flex overflow-hidden bg-[#efefed] min-w-full">
      <div className="flex">
        <Sidebar/>
      </div>
      {
        currentPage==="chat"?<ChatPage/>:(
            currentPage==="contact"?<ContactPage/>:(
                currentPage==="request"?<RequestPage/>:
                <div className="">
                    select something to render 
                </div>
            )
        )
      }
    </div>
  )
}

export default HomePage
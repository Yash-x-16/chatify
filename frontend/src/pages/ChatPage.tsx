import ChatProfileHeader from "../components/chatpage/ChatProfileHeader"
import UserCards from "../components/cards/UserCards"
import ChatSearch from "../components/chatpage/ChatSearch"
import Sidebar from "../components/chatpage/Sidebar"
import ChatMessageComponent from "../components/chatpage/ChatMessageComponent"
import MessageInput from "../components/chatpage/MessageInput" 
import { useChatStore } from "../store/chatStore"
import { useEffect } from "react"
function ChatPage() { 

  const {allContacts, setAllContacts} = useChatStore() 
  useEffect(()=>{
     setAllContacts() ; 
  },[allContacts])

  return (
    <div className="h-screen  flex overflow-hidden bg-[#efefed] min-w-full">
      <div className="flex flex-col h-full">
        <ChatSearch/>
        <div className="flex flex-col rounded-xl h-full overflow-y-auto no-scrollbar shadow-md p-6 ml-2 bg-[#f6f6f7]">
          
          {/* {allContacts.length === 0 ? (
            <div className="w-full py-8 text-center text-gray-500">
              add some contacts here
            </div>
          ) : (
            allContacts.map((c) => (
              <UserCards
                key={c.id}
                username={c.name}
                profile={c.profilePicture || (c.name ? c.name[0] : "U")}
                isunderlined={true}
              />
            ))
          )} */}

        </div>
      </div>
      <div className="flex flex-col h-full">
        <div>
          <ChatProfileHeader/> 
        </div>
        <div className="flex flex-col overflow-y-scroll no-scrollbar rounded-lg ">
          <ChatMessageComponent/>
        </div> 
        <div>
           <div className="flex">
            <MessageInput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
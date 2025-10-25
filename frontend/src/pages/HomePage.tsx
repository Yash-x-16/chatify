import ChatProfileHeader from "../components/chatpage/ChatProfileHeader"
import UserCards from "../components/cards/UserCards"
import ChatSearch from "../components/chatpage/ChatSearch"
import Sidebar from "../components/chatpage/Sidebar"
import ChatMessageComponent from "../components/chatpage/ChatMessageComponent"
import MessageInput from "../components/chatpage/MessageInput"
function HomePage() {
  return (
    <div className="max-h-screen p-4 flex overflow-hidden bg-[#efefed] min-w-full">
      <div className="flex">
        <Sidebar/>
      </div>
      <div className="flex flex-col">
        <ChatSearch/>
        <div className="flex flex-col rounded-xl max-h-screen overflow-y-auto no-scrollbar  shadow-md p-6 ml-2 bg-[#f6f6f7]">
          
          <UserCards username="yash" profile="y" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
          <UserCards username="yash" profile="yas" isunderlined={true}/>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <ChatProfileHeader/> 
        </div>
        <div className="flex flex-col">
          <ChatMessageComponent/>
          <div className="flex">
            <MessageInput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
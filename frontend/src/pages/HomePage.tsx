import ChatHeader from "../components/chatpage/ChatHeader"
import Sidebar from "../components/chatpage/Sidebar"
import UserCards from "../components/cards/userCards"
function HomePage() {
  return (
    <div className="min-h-screen p-4 flex bg-[#efefed] min-w-full">
      <div className="flex">
        <Sidebar/>
      </div>
      <div className="flex flex-col">
        <ChatHeader/>
        <div className="flex flex-col rounded-xl  overflow-scroll shadow-md p-3 ml-2 bg-[#f6f6f7]">
          all
          <UserCards username="yash" profile="yas"/>
          <UserCards username="yash" profile="yas"/>
          <UserCards username="yash" profile="yas"/>
          <UserCards username="yash" profile="yas"/>
          <UserCards username="yash" profile="yas"/>
          <UserCards username="yash" profile="yas"/>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
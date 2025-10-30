import MessageCards from "../cards/MessageCards"
function ChatMessageComponent() {
  return (
    <div className="ml-2 p-4  bg-[#f9f9f9] rounded-lg min-h-screen shadow-md no-scrollbar   overflow-y-auto ">
        <div className="">
          <MessageCards type="sender" text="yash is studying in the library " time="12:30"/>
          <MessageCards type="reciever" text="yash"/>
          <MessageCards type="sender" text="yash"/>
          <MessageCards type="reciever" text="yash"/>
          <MessageCards type="sender" text="yash"/>
          <MessageCards type="reciever" text="yash"/>
          <MessageCards type="sender" text="yash"/>
          <MessageCards type="reciever" text="yash"/>
          <MessageCards type="sender" text="yash"/>
          <MessageCards type="reciever" text="yash"/>
        </div>
    </div>
  )
}

export default ChatMessageComponent
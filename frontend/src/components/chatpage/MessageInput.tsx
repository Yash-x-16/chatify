import { Mic, Paperclip, Send, Smile } from "lucide-react"
import InputBox from "../ui/InputBox"

function MessageInput() {
  return (
    <div className="bg-[#f9f9f9] flex gap-3 rounded-lg p-2 ml-2 w-full mt-1">
        <InputBox type="text" variant="primary" isWidthFull={true} plcaeholder="write messages ..." 
        iconOnstart={<Paperclip className="text-black"/>} iconOnEnd={<Smile className="text-black"/>}/> 
        <div className="p-2 flex justify-center items-center gap-3">
            <Mic/>
            <div className="bg-orange-500 p-2 rounded-lg text-white cursor-pointer hover:scale-103 active:scale-100 transition-all duration-300">
                <Send size={"16px"}/>
            </div>
        </div>
    </div>
  )
}

export default MessageInput
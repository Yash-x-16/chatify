import { Plus, Search } from "lucide-react"
import InputBox from "../ui/InputBox"

function ChatSearch() {
  return (
    <div className="bg-[#f6f6f7] mb-1 shadow-md  p-3 flex rounded-xl gap-2 items-center justify-center ml-2 ">
        <div className="text-black font-semibold font-sans text-lg">
            Chat
        </div>
        <div >
            <InputBox variant="primary" type="text" plcaeholder="search" iconOnEnd={<Search/>} />
        </div>
        <div className="flex justify-center items-center">
            <div className="bg-orange-600 rounded-full p-2 cursor-pointer flex justify-center items-center">
                <Plus className="text-white"/>
            </div>
        </div>
        </div>
  )
}

export default ChatSearch
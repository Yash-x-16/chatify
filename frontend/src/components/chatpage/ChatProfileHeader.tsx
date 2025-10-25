import { LucideMenu,  Search } from "lucide-react"
import Button from "../ui/Button"

function ChatProfileHeader() {
  return (
    <div className="ml-2 p-3 mb-1 rounded-xl max-w-full shadow-md bg-[#f6f6f7]">
      <div className="flex justify-around flex-1  items-center">
        <div className="flex gap-3">
          <div className="flex items-center justify-center rounded-full bg-green-400 size-10 p-2"></div>
          <div className="flex flex-col justify-center">
            <h1 className="font-semibold text-black">
              username
            </h1>
            <span className="text-sm text-gray-500">
              online
            </span>
          </div>
        </div> 
        <div className="flex gap-3 ml-80 mr-5">
          <div className="flex gap-3">
            <Button variant="secondary" label="profile" />
            <Button variant="secondary" label="Call" /> 
            <div className="ml-3 border-l border-l-gray-300"></div> 
            <div className="flex ml-3 justify-center items-center gap-6">
              <Search size={"20px"}     className="cursor-pointer hover:text-orange-500 transition-all duration-300"/>
              <LucideMenu size={"20px"} className="cursor-pointer hover:text-orange-500 transition-all duration-300"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatProfileHeader
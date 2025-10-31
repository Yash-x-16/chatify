import { LucideMenu,  Search } from "lucide-react"
import Button from "../ui/Button"

function ChatProfileHeader() {
  return (
    // added overflow and max height so header becomes scrollable if it grows
    <div className="ml-2 p-3 mb-1 rounded-xl max-w-full shadow-md bg-[#f6f6f7] overflow-y-auto max-h-36">
      <div className="flex justify-around flex-1  items-center">
        <div className="flex gap-3">
          <img className="flex items-center justify-center rounded-full  size-12 " src={"https://res.cloudinary.com/ddmtv1dut/image/upload/v1761449270/5907_ng3njp.jpg"}/>
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
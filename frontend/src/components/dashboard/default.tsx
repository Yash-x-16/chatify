import { FaArrowLeft } from "react-icons/fa";
export function DefaultCard(){
    return <div className="w-full bg-inherit h-full rounded-2xl flex justify-center items-center gap-3">
       <FaArrowLeft size={"22px"} className="text-white/50 mt-1"/>
        <h1 className="text-white/50 text-2xl">
            Select something from the navbar to see 
        </h1>
    </div>
}
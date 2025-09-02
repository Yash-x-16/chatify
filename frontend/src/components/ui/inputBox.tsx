import type { ReactNode } from "react"

interface input {
type?:"text"|"textarea"|"button" , 
label?:string , 
iconOnStart?:boolean , 
fullWidth?:boolean ,
text?:string ,
children:ReactNode 
}



export function InputBox(prop:input){
    return <div className="flex relative w-max flex-col">
        <div className="m-2 text-white text-sm font-bold">
          {prop.label}
        </div>
        <div className="relative flex ">


        <div className="absolute top-3.5 left-3 text-emerald-400/60 focus:bg-white/15">{prop.children}</div>
        <input type={prop.type} placeholder={prop.text} className="  content1 p-3 pl-12 max-w-max  w-fullbg-white/10 border font-normal 
             border-white/20 rounded-xl text-white placeholder-white/50 
        focus:outline-none focus:border-emerald-400/60 focus:bg-white/15  shadow-md
        transition-all duration-300"/>
    </div>
            </div>
}
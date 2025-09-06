import type { ReactNode } from "react"

interface input {
type?:"text"|"textarea"|"button" |"password" , 
label?:string , 
iconOnStart?:boolean , 
iconOnEnd?:ReactNode , 
fullWidth?:boolean ,
text?:string ,
children:ReactNode 
}



export function InputBox(prop:input){
    return <div className={`flex relative flex-col ${prop.fullWidth?"w-full":"w-max"}`}>
        <div className="m-2 text-white text-sm font-bold inline-block">
          {prop.label}
        </div>
        <div className="relative flex ">


        <div className={`absolute top-3.5 left-3 text-emerald-400/60 focus:bg-white/15 `}>
        {prop.children}
        </div> 
        
        {prop.iconOnEnd?<div className=" absolute top-3.5 right-4 cursor-pointer text-emerald-400/60 hover:text-white/50 transition-all duration-400 focus:bg-white/15">
        {prop.iconOnEnd} 
</div>:null}
        <input type={prop.type} placeholder={prop.text} className={` content1 p-3 pl-12 w-full bg-white/10 border font-normal  border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/60 focus:bg-white/15  shadow-md transition-all duration-300`}/>
    </div>
            </div>
}
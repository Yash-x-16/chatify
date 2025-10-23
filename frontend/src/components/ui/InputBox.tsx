import  { type ReactNode } from 'react'

interface input {
    type:"text"|"textarea" |"password", 
    plcaeholder:string , 
    iconOnstart?:ReactNode ,
    iconOnEnd?:ReactNode , 
    label?:string  , 
    isWidthFull?:boolean
    variant?:"primary" | "secondary" 
}

function InputBox(prop:input) {
  return (
    <div className={`${prop.isWidthFull?"w-full":null} flex gap-2 text-white flex-col`}>
      {prop.label?<span className='text-sm text-black font-medium font-sans'>
        {prop.label}
      </span>:null}
      <div>
        <div className={`flex relative `}>
          {prop.iconOnstart?<div className='absolute left-3  top-1/2 -translate-y-1/2  text-gray-400 '>{prop.iconOnstart}</div>:null} 
          <input type={prop.type}
          placeholder={prop.plcaeholder}
           className={`bg-white px-6 text-slate-400
             font-medium py-3 pl-12 pr-4  focus 
             block w-full  border border-gray-300 
             rounded-xl focus:ring-2 
            focus:ring-[#FF5722] focus:border-transparent 
            transition-all outline-none`}/>
           {prop.iconOnEnd?<div className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer '>{prop.iconOnEnd}</div>:null}
        </div>
      </div> 
    </div>
  )
}

export default InputBox
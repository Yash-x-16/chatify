

type Variant = "primary"|"secondary"|"third"



interface buttonVariant{

    variant : Variant , 
    size : "sm"|"md"|"lg",
    iconOnStart ?: boolean ,
    iconOnEnd ?: boolean , 
    text:string , 
    fullwidth?: boolean  ,
    loading?:boolean , 
    onClick : ()=>void
}

const variantStyle = {
      "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-300 text-blue-600",
    "third":"bg-green-600 text-red-200"
} 
const sizeStyle = {
    "sm": " rounded-xl active:translate-y-1  shadow-neutral-600 hover:bg-shadow-neutral-600  active:bg-blue-700 flex-item-center w-auto px-6 py-2  hover:scale-110  transition delay-50 duration-250 ease-in-out hover:translate-z-1 cursor-pointer h-auto shadow-md" , 
    "md" : "py-2 px-5 rounded-md flex-item-center", 
    "lg" : "px-8 py-2 w-full cursor-pointer   bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 hover:scale-105 active:scale-95 active:shadow-inner transition-all duration-500 ease-in-out shadow-md rounded-md flex items-center justify-center", 
} 

const DefaulStyles = "rounded-lg flex font-light"

export  function Button(prop:buttonVariant){
    return <button onClick={prop.onClick} className={`${variantStyle[prop.variant]} ${sizeStyle[prop.size]} ${DefaulStyles}${prop.fullwidth?"w-max":null} `}>
        
        {prop.iconOnStart?
        <div>
            {prop.iconOnStart}
        </div>:null}
       <span className={`m-auto  transition-colors ${prop.size==="lg"?"font-bold":"font-medium "}`}>
        {prop.text}
       </span>
         

        {prop.iconOnEnd?
        <div>
            {prop.iconOnEnd}:
        </div>:null
        }
        </button>
}
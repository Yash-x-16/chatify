

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
    "lg" : "py-4 px-7 h-8 rounded-md flex-item-center", 
} 

const DefaulStyles = "rounded-lg flex font-light"

export  function Button(prop:buttonVariant){
    return <button onClick={prop.onClick} className={`${variantStyle[prop.variant]} ${sizeStyle[prop.size]} ${DefaulStyles}`}>
        
        {prop.iconOnStart?
        <div>
            {prop.iconOnStart}
        </div>:null}
       <span className="m-auto font-medium  transition-colors">
        {prop.text}
       </span>
         

        {prop.iconOnEnd?
        <div>
            {prop.iconOnEnd}:
        </div>:null
        }
        </button>
}
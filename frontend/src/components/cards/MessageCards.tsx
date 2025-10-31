interface message{
    type:"sender"| "reciever" , 
    text:string  ,
    time?:string
}

function MessageCards(prop:message) {
  return (
    <div className={` `}>
        <div  className={` flex ${prop.type==="sender"?"justify-end mt-2 text-white":"justify-start" } `}>
            {prop.type==="sender"?
                <h1 className="bg-orange-500  p-3 rounded-md">
                    {prop.text}
                
                </h1>:
                
                <h1 className="bg-gray-300 p-2 rounded-md">
                    {prop.text}
                </h1>}
        </div>
        <div className={` flex ${prop.type==="sender"?"justify-end":"justify-start" } text-xs  `}>
            {prop.time}
        </div>
    </div>
  )
}

export default MessageCards
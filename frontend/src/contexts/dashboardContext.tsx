import { createContext, useState, type ReactNode } from "react";
 

type CardContextType = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};


export const CardContext = createContext<CardContextType | undefined>(undefined);



export function DashBoardContext({children}:{children:ReactNode}){
   
   const [selected,setSelected] = useState("")
  return  <CardContext.Provider value={{selected:selected,
  setSelected:setSelected}}>
        {children}
    </CardContext.Provider>

}
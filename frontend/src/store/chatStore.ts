import {create} from "zustand"
interface contacts {
    
}

interface chatStore {
    currentPage:string | null , 
    setCurrentPage:(cp :string)=>void , 
    allContacts:
}

export const useChatStore = create<chatStore>()((set)=>({
    currentPage:null , 
    setCurrentPage:(cp)=>{
        set({currentPage:cp})
    } , 

}))
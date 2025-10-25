import {create} from "zustand"

interface chatStore {
    currentPage:string | null , 
    setCurrentPage:(cp :string)=>void
}

export const useChatStore = create<chatStore>()((set)=>({
    currentPage:null , 
    setCurrentPage:(cp)=>{
        set({currentPage:cp})
    }
}))
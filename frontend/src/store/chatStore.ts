import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

interface Contact {
  id: string;
  name: string;
  profilePicture?: string;
  lastMessage?: string;
  unread?: number;
}

interface ChatStore {
  
  currentPage: string | null;  
  allContacts: Contact[];
  
  setCurrentPage: (cp: string) => void;
  
  setAllContacts: () => Promise<void>;

}

 export const useChatStore = create<ChatStore>((set,get)=>({
    isContactsLoading:false , 
    currentPage:"contacts" , 
    allContacts:[] ,

    setCurrentPage:(cp :string)=>set({currentPage:cp})  , 
    setAllContacts : async()=>{
        const response = await axiosInstance.get('/contacts/getContacts',{
            headers:{
               token:localStorage.getItem("token") 
            }
        }) 
        console.log("response from allContacts is : ",response.data) 
    }
}))
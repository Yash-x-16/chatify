import axios from "axios"; 

export async function sendChat(url:string,receiverId:number,userId:number){

    try{
        await axios.post(url,{
            senderId:userId,
            receiverId:receiverId
        })
    }catch(e){
        console.log(e)
    }
}
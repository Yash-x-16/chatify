import mongoose from "mongoose"; 

export  const dbConnection = async(url:string)=>{
    try {
        const connection = await mongoose.connect(url) 
        return connection.connection.host

    } catch (error) {
        console.log("error occured in connecting db") ; 
    }

}
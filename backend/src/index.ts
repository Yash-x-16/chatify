import express from "express"  
import dotenv from "dotenv" 
import authRoutes from "./Routes/authRoutes.js" 

const app = express() 
dotenv.config()

app.use(express.json()) 
app.use('/api/auth',authRoutes) ; 


app.listen(process.env.PORT,()=>{
    console.log(`port is running on ${process.env.PORT}`)
})
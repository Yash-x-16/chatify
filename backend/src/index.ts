import express from "express"  
import dotenv from "dotenv" 
import authRoutes from "./Routes/authRoutes.js" 
import messageRoutes from "./Routes/messageRoute.js" 
import contactRoutes from "./Routes/contactRoutes.js"
import requestRoutes from './Routes/requestRoutes.js'
import cors from "cors"
const app = express() 
dotenv.config()

app.use(express.json()) 
app.use(cors())

app.use('/api/auth',authRoutes) ; 
app.use('/api/message',messageRoutes)
app.use('/api/request',requestRoutes) 
app.use('/api/contacts',contactRoutes) 


app.listen(process.env.PORT,()=>{
    console.log(`port is running on ${process.env.PORT}`)
})
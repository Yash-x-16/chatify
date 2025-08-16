import express from "express" 
import dotenv from "dotenv"
import authroutes from "./routes/auth.routes.js"


const app = express() 
dotenv.config({path:"C:/react/chatify/backend/src/.env"})

app.use(express.json())
app.use('api/auth',authroutes)

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})
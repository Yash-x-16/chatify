import express from "express" 

import authroutes from "./routes/auth.routes.js"
import chatroutes from "./routes/chat.routes.js"

const app = express() 


app.use(express.json())
app.use('/api/auth',authroutes)
app.use('/api/chat',chatroutes)


app.listen(3000,()=>{
   console.log('runiing!!')
})
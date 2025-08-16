import express from "express" 

import authroutes from "./routes/auth.routes.js"


const app = express() 


app.use(express.json())
app.use('/api/auth',authroutes)



app.listen(3000,()=>{
   console.log('runiing!!')
})
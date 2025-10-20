import express, { Router } from "express" 
import { Middleware } from "../Middleware/Middleware.js"

const router = express.Router() 

router.get('/getRequest',Middleware)
router.post('/sendRequest',Middleware)
router.put('/updateRequest',Middleware)

export default router 
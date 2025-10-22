import express from "express" 
import { Middleware } from "../Middleware/Middleware.js"

const router = express.Router() 

router.get('/contacts',Middleware)
router.get('/messages',Middleware)
router.post('/sendMessages',Middleware)

export default router
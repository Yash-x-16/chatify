import express from "express" 
import { Middleware } from "../Middleware/Middleware.js"
import { deleteContacts, getContacts } from "../Controller/contactController.js"

const router = express.Router() 

router.get('/getContacts',Middleware,getContacts) 
router.delete('/deleteContacts',Middleware,deleteContacts) 

export default router
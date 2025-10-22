import express, { Router } from "express" 
import { Middleware } from "../Middleware/Middleware.js"
import { deleteRequest, getAllRequest, sendRequest, updateRequest } from "../Controller/requestController.js"

const router = express.Router() 

router.get('/getRequest',Middleware,getAllRequest)
router.post('/sendRequest',Middleware,sendRequest)
router.put('/updateRequest',Middleware,updateRequest)
router.delete('/deleteRequest',Middleware,deleteRequest)

export default router 
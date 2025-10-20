import express from "express" 
import { getUser, Signin, Signup } from "../Controller/authController.js"
import { Middleware } from "../Middleware/Middleware.js"

const router  = express.Router() 

router.post('/signup',Signup)
router.post('/signin',Signin)
router.get('/getUser',Middleware,getUser) 

export default router
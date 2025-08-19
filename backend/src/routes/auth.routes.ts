import express from 'express'
import { checkAuth, signin,
        signup 
    } from '../controllers/auth.controller.js'
import { Middleware } from '../middleware/middleware.js'

const router = express.Router()


router.post("/signup",signup)
router.post("/signin",signin) 
router.get('/check',Middleware,checkAuth)


export default router
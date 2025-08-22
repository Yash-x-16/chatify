import express from "express" 
import { Middleware } from "../middleware/middleware.js";
import { getMessage, sendMessage } from "../controllers/chat.controller.js";

const router  = express.Router() ; 

router.post('/message',Middleware,sendMessage) ;

router.get('/message',Middleware,getMessage) ; 

export default router 
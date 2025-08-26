import express from "express" 
import { Middleware } from "../middleware/middleware.js";
import {  createRoom } from "../controllers/chat.controller.js";

const router  = express.Router() ; 

router.post('/room',Middleware,createRoom) ;
router.post('/chat',Middleware)

export default router 
import express from "express" 

const router = express.Router() 

router.get('/contacts')
router.get('/messages')
router.post('/sendMessages')
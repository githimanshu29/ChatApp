import express from 'express'
import { login } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/login',login)
//normally it will be written as 
// app.use('/login',(req,res,next)=>{
//   res.send("hello i am login route")
//    }

export default router;

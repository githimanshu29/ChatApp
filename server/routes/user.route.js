import express from 'express'
import { login, register } from '../controllers/user.controller.js';
import upload from '../middlewares/upload.js';
const router = express.Router();

router.post('/register',upload.single("avatar"),register);//register here is a controller 
router.get('/login',login)
//normally it will be written as 
// app.use('/login',(req,res,next)=>{
//   res.send("hello i am login route")
//    }

export default router;

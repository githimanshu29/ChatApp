import express from 'express'
import { getOtherUsers, getProfile, login, logout, register } from '../controllers/user.controller.js';
import upload from '../middlewares/upload.js';
import { isAuthenticated } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/register',upload.single("avatar"),register);//register here is a controller ,
router.post('/login',login);
//normally it will be written as 
// app.use('/login',(req,res,next)=>{
//   res.send("hello i am login route")
//    }
router.post("/logout",isAuthenticated, logout);
router.get("/get-profile",isAuthenticated, getProfile);
router.get("/get-other-users",isAuthenticated, getOtherUsers);

export default router;

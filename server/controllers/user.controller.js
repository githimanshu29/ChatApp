import { response } from "express";
import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import uploadToCloudinary from "../utilities/uploadToCloudinary.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//CONTROLLER 1
export const register=asyncHandler(async (req,res,next)=>{
  //fontend se body yaha aygi as req.body containing all the below details 
    const {fullName, userName, password, gender}=req.body;// destructured  
    if(!fullName || !userName || !password || !gender){
      return next(new errorHandler("all fields are required", 400))//different and best way to handle error
    }

    const user = await User.findOne({userName});
    if(user){
      return next(new errorHandler("user already exists", 400))
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    let avatar=`https://ui-avatars.com/api/?name=${fullName}&background=random`;

    
  // ✅ IF USER UPLOADED IMAGE, from front end this is how (req.file we take file )
  if (req.file) {
    const result = await uploadToCloudinary(req.file.buffer, "chat-app/avatars");
    avatar = result.secure_url;
  }


    const newUser=await User.create({
      fullName,
      userName,
      password:hashedPassword,
      gender,
      avatar
    })
    const tokenData = {
      _id: newUser?._id,
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})// jwt.sig() creates token 

    

    res.status(200).cookie("token", token,{
      // value:token,
      expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_IN*24*60*60*1000),
      httpOnly:true,
      secure:process.env.NODE_ENV==="production",
      sameSite:'None'
    }).json({
      responseData:{
        newUser,
        token
      }
    })
    

 
})

//CONTROLLER 2

export const login=asyncHandler(async (req,res,next)=>{
  
  const { userName, password}=req.body;
  if( !userName || !password){
    return next(new errorHandler("Please enter a valid username and password", 400))//different and best way to handle error
  }

  const user = await User.findOne({userName});
  if(!user){
    return next(new errorHandler("Please enter a valid username and password", 400))
  }

 
  const isValidPassword = await bcrypt.compare(password, user.password);

  if(!isValidPassword){
    return next(new errorHandler("Please enter a valid username and password", 400))
  }

  const tokenData = {
    _id: user?._id,
  }

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})// jwt.sig() creates token 

  res.status(200).cookie("token",token,{
    // value:token,
    // expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_IN*24*60*60*1000),
    httpOnly:true,
    secure:process.env.NODE_ENV==="production",
    sameSite:'None',
    maxAge: Number(process.env.COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
  }).json({
    success:true,
    responseData:{
      user,
      token
    }
  })
 


}) // basically it is a function/ logic to deal with databases


export const getProfile=asyncHandler(async (req,res,next)=>{
  
  const userId=req.user._id;

  const profile = await User.findById(userId)
  res.status(200).json({
    success:true,
    responseData: profile,
  })
 


})


export const logout=asyncHandler(async(req,res,next)=>{

  res.status(200).cookie("token","",{
    // value:token,
    expires:new Date(Date.now()),
    httpOnly:true,
  
  }).json({
    success:true,
    message:"Logout successfull"
  })

})

export const getOtherUsers=asyncHandler(async(req,res,next)=>{
  const otherUsers = await User.find({_id:{$ne:req.user._id}})



   res.status(200).json({
    success:true,
    responseData:otherUsers,
   })
})

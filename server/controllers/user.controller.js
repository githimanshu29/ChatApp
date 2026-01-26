import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import uploadToCloudinary from "../utilities/uploadToCloudinary.js";
import bcrypt from "bcryptjs";

//CONTROLLER 1

export const register=asyncHandler(async (req,res,next)=>{
  
    const {fullName, userName, password, gender}=req.body;
    if(!fullName || !userName || !password || !gender){
      return next(new errorHandler("all fields are required", 400))//different and best way to handle error
    }

    const user = await User.findOne({userName});
    if(user){
      return next(new errorHandler("user already exists", 400))
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let avatar=`https://ui-avatars.com/api/?name=${fullName}&background=random`;

    
  // ✅ IF USER UPLOADED IMAGE
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
    res.status(200).json({
      success:true,
      responseData:{
        newUser
      }
    })
    res.send("hello register");

 
})

//CONTROLLER 2

export const login = (req, res, next) => {
  res.send("hello i am login route");
}; // basically it is a function/ logic to deal with databases

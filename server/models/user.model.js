import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:true,
    }
}, {timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;
//🔥 result of above model


// {
//     "_id": "65fa1111aaa1111111111111",
//     "fullName": "Rahul Sharma",
//     "userName": "rahul_01",
//     "password": "$2b$10$abc123hashed",
//     "gender": "male",
//     "avatar": "https://cdn.app.com/avatars/rahul.png",
//     "createdAt": "2026-01-20T08:30:00Z",
//     "updatedAt": "2026-01-20T08:30:00Z"
//   }
  
//🔥 MongoDB creates _id automatically for EVERY document. Unique,Primary key, Automaically added, type->ObjectID

//🔥You did NOT write it, but it EXISTS.
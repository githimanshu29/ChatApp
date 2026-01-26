import mongoose from "mongoose";


export const connectDB=async()=>{
    try{
        const MONGO_DB_URL=process.env.MONGO_DB_URL;
    const instance=mongoose.connect(MONGO_DB_URL);
    console.log(`MongoDB Connected: ${(await instance).Connection.host}`);

    } catch(error){
        console.log("not connected to mongodb",error)
    }
    
}
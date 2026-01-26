import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (buffer, folder = "chat-app/server/avatars") => {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
  };
  
  export default uploadToCloudinary;
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import { response } from "express";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const senderId = req.user._id;
  const receiverId = req.params.receiverId;
  const message = req.body.message;

  if (!senderId || receiverId || !message) {
    return next(new errorHandler("All fields are required", 400));
  }
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if(!conversation){
    conversation=await Conversation.create({
        participants:[senderId.receiverId],
    })
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,

  })
if(newMessage){
    conversation.messages.push(newMessage._id);
    await conversation.save();
}
res.status(200).json({
    success:true,
    responseData:{
        newUser// is this correct
    }
})


});

export const getMessages = asyncHandler(async(req, res, next)=>{
    const myId = req.user._id;
    const otherParticipantId=req.otherParticipantId;
    console.log("himanshu")
    console.log(myId,otherParticipantId)

    if(!myId || !otherParticipantId ){
        return next(new errorHandler("All fields are required", 400));
    }

    let conversation = await Conversation.findOne({
        participants:{$all:[myId, otherParticipantId]},
    }).populate("messages")

    res.status(200).json({
        success:true,
        responseData:conversation,
    })
})
import mongoose from 'mongoose'

const conversationSchema=new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',//ref: 'User' tells Mongoose which model this ObjectId belongs to, so Mongoose can fetch related data automatically using populate().
        required:true,
    }],//array contains each item as  an object id 
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
        required:true,
    }],
}, {timestamps:true});

const Conversation=mongoose.model('Conversation',conversationSchema);

export default Conversation;

// participants array contains object of ids of users who are part of the conversation, Each user is stored as an ObjectId and thses ObjectId belongs directly to each user model document in short for every user....

//ref -> tells mongoose that this objevt belongs to User model collection's object documents corrosponding to each user 

//ref-> enables mongoose to fetch related data automatically using populate() method

// 🚀 without populate
//const conversation = await Conversation.findById(id);
// 👉 result:
// {
//     participants: ["65a1...", "65b2..."],
//     messages: ["70a1...", "70a2..."]
//   }
  


// 🚀 with populate
//const conversation = await Conversation.findById(id).populate('participants').populate('messages');

// 👉result:
// {
//     participants: [
//       { _id: "65a1...", username: "Rahul", email: "r@x.com" },
//       { _id: "65b2...", username: "Aman", email: "a@x.com" }
//     ],
//     messages: [
//       { _id: "70a1...", text: "Hi", sender: "65a1..." },
//       { _id: "70a2...", text: "Hello", sender: "65b2..." }
//     ]
//   }
  


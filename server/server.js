//const express = require('express'); -> common js syntax
//front end requests and backend responds \
import dotenv from 'dotenv';
import express from 'express';// module syntax
import { connectDB } from './db/connection1.db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT=process.env.PORT;
app.use(cookieParser());


import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'
app.use('/api/v1/user',userRoute);
app.use('/api/v1/message',messageRoute);


//🧠 app.get('/', (req, res,next) => {
//     res.send('Hello World!');
// }) --> Complete route handler 

//🧠 app.get('/') --> only the route

//🧠 (req, res,next) => {
//     res.send('Hello World!');
// }  --> controller or handler --> function that handles the request and response

import { errorMiddleware } from './middlewares/error.middleware.js';
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

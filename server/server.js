//const express = require('express'); -> common js syntax
//front end requests and backend responds 
import express from 'express';// module syntax


const app = express();
const PORT=5000;

import userRoute from './routes/user.route.js'
app.use('/api/v1/user',userRoute);

//🧠 app.get('/', (req, res,next) => {
//     res.send('Hello World!');
// }) --> Complete route handler 

//🧠 app.get('/') --> only the route

//🧠 (req, res,next) => {
//     res.send('Hello World!');
// }  --> controller or handler --> function that handles the request and response


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

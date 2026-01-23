//work relatd to API

import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUserThunk= createAsyncThunk("users/fetchById",async()=>{
    console.log("hello thunk")
});
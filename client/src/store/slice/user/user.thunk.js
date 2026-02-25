//work relatd to API

import { createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import { axiosInstance } from "../../../components/utilities/axiosInstance";


export const loginUserThunk= createAsyncThunk("users/fetchById",async({username, password}, rejectWithValue)=>{
    try {
            const response = await axiosInstance.post('/user/login',{
                username,
                password,
            })
            console.log(response);
            return response.data;
    } catch (error) {
        const errorOutput=error.message;
        toast.error(errorOutput);
        return rejectWithValue("login failed",errorOutput)
    }
});


export const registerUserThunk = createAsyncThunk(
    "user/register",
    async (formdata, {rejectWithValue})=>{
        try {
            const response = await axiosInstance.post("/user/register", formdata,
                {
                    headers:{
                        "Content-Type":"multipart/form-data",
                    },
                }
            );
            toast.success("Account created successfully");
            return response.data;
        } catch (error) {
            const message = error?.response?.data.message || "Registration Failed";
            toast.error(message);
            return rejectWithValue(message);
        }
    }
)
// import { createSlice } from '@reduxjs/toolkit'
// import { loginUserThunk } from './user.thunk';

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     isAuthenticated: false,
//     user:null,
//     laoding:false,
//   },
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true
//       console.log("hello login redux")
//     },
//   }, extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(loginUserThunk.pending, (state, action) => {
//       console.log("pending");
//     });
//     builder.addCase(loginUserThunk.fulfilled, (state, action) => {
//       console.log("fulfilled");
//     });
//     builder.addCase(loginUserThunk.rejected, (state, action) => {
//       console.log("rejected");
//     });
//   },
// })

// export const { login } = userSlice.actions
// export default userSlice.reducer



import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./user.thunk";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {

    // ===== REGISTER =====
    builder.addCase(registerUserThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.responseData.newUser;
    });

    builder.addCase(registerUserThunk.rejected, (state) => {
      state.loading = false;
    });

    // ===== LOGIN =====
    builder.addCase(loginUserThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.responseData.user;
    });

    builder.addCase(loginUserThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;


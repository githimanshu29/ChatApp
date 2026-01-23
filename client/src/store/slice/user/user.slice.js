import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true
      console.log("hello login redux")
    },
  }, extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginUserThunk.pending, (state, action) => {
      console.log("pending");
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      console.log("fulfilled");
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      console.log("rejected");
    });
  },
})

export const { login } = userSlice.actions
export default userSlice.reducer


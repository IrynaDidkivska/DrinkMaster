import { createSlice } from "@reduxjs/toolkit";
import { signupThunk, signinThunk, logoutThunk } from "./operations";

const initialState = {
  user: {
    email: "",
    password: "",
    username: "",
  },
  isAuth: false,
  isLoading: false,
  isRefresh: false,
  isAdult: false,
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.isAuth = true;
        console.log(signinThunk);
      })
      .addCase(signinThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signinThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = {
          name: "",
          email: "",
        };
        state.token = "";
        state.isLoading = false;
        state.isAuth = false;
      })
      .addCase(logoutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isLoading = false;
      });
    //   .addCase(currentUser.fulfilled, (state, { payload }) => {
    //     state.user.email = payload.email;
    //     state.user.username = payload.username;
    //     state.isAuth = true;
    //     state.isRefresh = false;
    //   })
    //   .addCase(currentUser.pending, (state, { payload }) => {
    //     state.isRefresh = true;
    //   })
    //   .addCase(currentUser.rejected, (state, { payload }) => {
    //     state.error = payload;
    //     state.isRefresh = false;
    //   });
  },
});

export const userReducer = authSlice.reducer;

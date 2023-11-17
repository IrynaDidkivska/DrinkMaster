import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  signupThunk,
  signinThunk,
  logoutThunk,
  currentUserThunk,
  updateUser,
  updateUserThunk,
} from "./operations";

const initialState = {
  user: {
    email: "",
    username: "",
    birthdate: "",
    isAdult: false,
    avatar: "",
  },
  isAuth: false,
  isLoading: false,
  isRefresh: false,
  error: "",
  token: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.email = payload.email;
        // isAduld
        // state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })

      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.username = payload.username;
        // isAduld, username, avatar
        state.token = payload.token;
        state.isLoading = false;
        state.isAuth = true;
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

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        // isAduld, username
        state.isAuth = true;
        state.isRefresh = false;
      })
      .addCase(currentUserThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(currentUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefresh = false;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.user.avatar = payload.avatar;
      })

      .addMatcher(
        isAnyOf(
          signinThunk.pending,
          signupThunk.pending,
          logoutThunk.pending,
          updateUserThunk.pending,
          currentUserThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      )
      .addMatcher(
        isAnyOf(
          signinThunk.rejected,
          signupThunk.rejected,
          logoutThunk.rejected,
          updateUserThunk.rejected,
          currentUserThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const userReducer = authSlice.reducer;

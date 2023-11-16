import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { toast } from "re act-toastify";

export const API = axios.create({
  baseURL: "https://drink-master-project.onrender.com/",
});

const setToken = (token) => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  API.defaults.headers.common.Authorization = ``;
};

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post("api/auth/users/signup", credentials);
      // setToken(res.data.token);
      console.log(res);
      // toast.success(`Hello ${editString(res.data.user.username) || ""} !`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const res = await API.post("/api/auth/users/login", credentials);
      setToken(res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.delete("/api/auth/users/logout");
      clearToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const currentUser = createAsyncThunk(
//   "auth/currentUser",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const newToken = state.user.token;
//     if (!newToken) {
//       return thunkAPI.rejectWithValue("NO autorization!!!");
//     }
//     setToken(newToken);
//     try {
//       const { data } = await API.get("/api/users/current");

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

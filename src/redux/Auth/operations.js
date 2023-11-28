import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { loginRequest } from '@/shared/helpers/login';
import { API, clearToken, setToken } from '../../config/drinkConfig';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('api/auth/users/signup', credentials);
      const reg = { email: data.email, password: credentials.password };
      const loginResponse = await loginRequest(reg);
      return loginResponse;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.post('api/auth/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.post('api/auth/users/logout');
      clearToken();
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const currentUserThunk = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/auth/users/current');

      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const state = getState();
      const savedToken = state.auth.token;
      if (!savedToken) {
        return false;
      }
      setToken(savedToken);
    },
  }
);

// Update
export const updateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async (data, thunkAPI) => {
    try {
      const res = await API.patch('api/auth/users/update', data);

      return res.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// subscribeEmail
export const subscribeEmail = createAsyncThunk(
  'auth/subscribe',
  async ({ email }, thunkAPI) => {
    try {
      await API.get('api/auth/users/subscribe', {
        params: {
          email,
        },
      });
      toast.success('Thank you for subscribing to our newsletter.');
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

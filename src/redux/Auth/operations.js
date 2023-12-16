import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API, clearToken, setToken } from '@/config/drinkConfig';
import { loginRequest } from '@/shared/helpers/login';
import authThunkWrapper from '../helpers/authThunkWrapper';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  authThunkWrapper(async credentials => {
    const { data } = await API.post('api/auth/users/signup', credentials);
    const reg = { email: data.email, password: credentials.password };
    const loginResponse = await loginRequest(reg);
    return loginResponse;
  })
);

export const signinThunk = createAsyncThunk(
  'auth/signin',
  authThunkWrapper(async credentials => {
    const { data } = await API.post('api/auth/users/login', credentials);
    setToken(data.token);
    return data;
  })
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  authThunkWrapper(async () => {
    const { data } = await API.post('api/auth/users/logout');
    clearToken();
    return data;
  })
);
export const currentUserThunk = createAsyncThunk(
  'auth/currentUser',
  authThunkWrapper(async () => {
    const { data } = await API.get('api/auth/users/current');
    return data;
  }),
  {
    condition: (_, { getState }) => {
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
  authThunkWrapper(async data => {
    const res = await API.patch('api/auth/users/update', data);
    return res.data;
  })
);

// subscribeEmail
export const subscribeEmail = createAsyncThunk(
  'auth/subscribe',
  authThunkWrapper(async ({ email }) => {
    await API.get('api/auth/users/subscribe', {
      params: {
        email,
      },
    });
    toast.success('Thank you for subscribing to our newsletter.');
  })
);

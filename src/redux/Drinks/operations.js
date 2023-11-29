import { createAsyncThunk } from '@reduxjs/toolkit';

import { API } from '@/config/drinkConfig';
import { redirect } from 'react-router-dom';

export const getAllDrinksThunk = createAsyncThunk(
  'drinks/getAll',
  async ({ page }, thunkAPI) => {
    try {
      const { data } = await API.get('api/drinks/cocktails/main', {
        params: {
          category: 'Ordinary Drink,Shake,Cocktail,Other/Unknown',
          // limit: 100,
          page,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання для page Drinks
export const getAllSearchThunk = createAsyncThunk(
  'drinks/getAllSearch',
  async (
    { ingredient = '', category = '', query = '', page = 1, limit = 10 },
    thunkAPI
  ) => {
    try {
      const { data } = await API.get('api/drinks/search', {
        params: {
          page,
          limit,
          keyword: query,
          category,
          ingredientId: ingredient,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const paginationThunk = createAsyncThunk(
  'drinks/getPagination',
  async (
    { ingredient = '', category = '', query = '', page = 1, limit = 10 },
    thunkAPI
  ) => {
    try {
      const { data } = await API.get('api/drinks/search', {
        params: {
          page,
          limit,
          keyword: query,
          category,
          ingredientId: ingredient,
        },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання популярних  коктейлів
export const getPopularThunk = createAsyncThunk(
  'drinks/getPopular',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/drinks/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Отримання одного коктейлю за ID
export const getByIDThunk = createAsyncThunk(
  'drinks/getByID',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`api/drinks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання власних коктейлів
export const getOwnThunk = createAsyncThunk(
  'drinks/getOwn',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/drinks/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення власних коктейлів
export const deleteFromOwnThunk = createAsyncThunk(
  'drinks/deleteFromOwn',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await API.delete(`api/drinks/own/remove/${id}`);
      dispatch(getOwnThunk());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Favorites
export const getFavoriteThunk = createAsyncThunk(
  'drinks/getFav',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/drinks/favorite');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteThunk = createAsyncThunk(
  'drinks/addFav',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.post('api/drinks/favorite/add', {
        drinkId: id,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavoriteThunk = createAsyncThunk(
  'drinks/deleteFromFav',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.delete(`api/drinks/favorite/remove/${id}`);
      dispatch(getFavoriteThunk());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewDrinkThunk = createAsyncThunk(
  'drinks/addNewDrink',
  async (body, thunkAPI) => {
    try {
      const { data } = await API.post(`api/drinks/own/add`, body);
      return data;
    } catch (error) {
      if (error.response.data.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Отримання Privacy Policy та Public offering agreement
export const getPolicyThunk = createAsyncThunk(
  'drinks/getPolicy',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get(`api/privacy/policy`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getPublicThunk = createAsyncThunk(
  'drinks/getPublic',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get(`api/privacy/public`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

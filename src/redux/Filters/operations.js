import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../config/drinkConfig';

export const getCategoriesThunk = createAsyncThunk(
  'filter/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/filters/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getIngredientsThunk = createAsyncThunk(
  'filter/getIngredients',
  async (query, thunkAPI) => {
    try {
      const { page = 0, limit = 0 } = query;
      const { data } = await API.get('api/filters/ingredients', {
        params: {
          page,
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getGlassesThunk = createAsyncThunk(
  'filter/getGlasses',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('api/filters/glasses');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

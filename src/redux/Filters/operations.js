import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '@/config/drinkConfig';
import thunkWrapper from '../helpers/thunkWrapper';

export const getCategoriesThunk = createAsyncThunk(
  'filter/getCategories',
  thunkWrapper(async () => {
    const { data } = await API.get('api/filters/categories');
    return data;
  })
);

export const getIngredientsThunk = createAsyncThunk(
  'filter/getIngredients',
  thunkWrapper(async () => {
    const { data } = await API.get('api/filters/ingredients');
    return data;
  })
);

export const getGlassesThunk = createAsyncThunk(
  'filter/getGlasses',
  thunkWrapper(async () => {
    const { data } = await API.get('api/filters/glasses');
    return data;
  })
);

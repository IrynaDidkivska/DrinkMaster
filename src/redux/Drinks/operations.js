
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/drinkConfig";


export const getAllDrinksThunk = createAsyncThunk(
  'drinks/getAll',
  async ({ page }, thunkAPI) => {
    try {
      const { data } = await API.get('api/drinks/cocktails/main', {
        params: {
          category: "Ordinary Drink,Shake,Cocktail,Other/Unknown",
          // limit: 100,
          page,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Отримання для page Drinks
export const getAllSearchThunk = createAsyncThunk(
  'drinks/getAllSearch',
  async (
    { ingredient = '', category = '', query = '', page = 1, limit = 0 },
    thunkAPI,
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

      console.log(data);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
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
  },
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
  },
);

// OWN

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
  },
);
//TODO: зробити
export const addOwnDrinkThunk = createAsyncThunk(
  'drinks/addOwnDrink',
  async (formdata, thunkAPI) => {
    try {
      const { data } = await API.post('api/drinks/own/add', formdata);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteFromOwnThunk = createAsyncThunk(
  'drinks/deleteFromOwn',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.delete(`api/drinks/own/remove/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
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
  },
);

export const addFavoriteThunk = createAsyncThunk(
  'drinks/getFav',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.post('api/drinks/favorite/add', {
        drinkId: id,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
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
  },
);
export const addNewDrinkThunk = createAsyncThunk(
  'drinks/addNewDrink',
  async (body, thunkAPI) => {
    try {
      const { data } = await API.post(`api/drinks/own/add`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/drinkConfig";
// TODO: Update thunk

export const getAllDrinksThunk = createAsyncThunk(
  "drinks/getAll",
  async ({ page }, thunkAPI) => {
    try {
      const { data } = await API.get("api/drinks/mainpage", {
        params: {
          limit: 5,
          page,
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
  "drinks/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get("api/drinks/popular");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Отримання одного коктейлю за ID
export const getByIDThunk = createAsyncThunk(
  "drinks/getByID",
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`api/drinks/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// OWN

// Отримання власних коктейлів
export const getOwnThunk = createAsyncThunk(
  "drinks/getOwn",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get("api/drinks/own");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//TODO: зробити
export const addOwnDrinkThunk = createAsyncThunk(
  "drinks/addOwnDrink",
  async (data, thunkAPI) => {
    try {
      const { data } = await API.post("api/drinks/own/add", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromOwnThunk = createAsyncThunk(
  "drinks/deleteFromOwn",
  async (id, thunkAPI) => {
    try {
      const { data } = await API.delete(`api/drinks/own/remove/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Favorites

export const getFavoriteThunk = createAsyncThunk(
  "drinks/getFav",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get("api/drinks/favorite");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//TODO: змінити шлях і правильно передати дату
export const addFavoriteThunk = createAsyncThunk(
  "drinks/getFav",
  async (data, thunkAPI) => {
    try {
      const { data } = await API.post("api/drinks/favorite/add", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//TODO: узнать у ментора как правильно делать запрос
export const deleteFromFavoriteThunk = createAsyncThunk(
  "drinks/deleteFromFav",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await API.delete(`api/drinks/favorite/remove`, {
        data: { drinkId: id },
      });
      dispatch(getFavoriteThunk());
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

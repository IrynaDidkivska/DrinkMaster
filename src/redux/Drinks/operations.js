import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/drinkConfig";

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
// Done
export const getPopularThunk = createAsyncThunk(
  "drinks/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get("api/drinks/popular");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//TODO: зробити шлях правильний
export const getByIDThunk = createAsyncThunk(
  "drinks/getByID",
  async (id, thunkAPI) => {
    try {
      const { data } = await API.get(`api/drinks/popular${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// OWN
//TODO: create Thunk Get By ID drink

export const getOwnThunk = createAsyncThunk(
  "drinks/getOwn",
  async (_, thunkAPI) => {
    try {
      //TODO: змінити шлях
      const { data } = await API.get("api/drinks/own");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnDrinkThunk = createAsyncThunk(
  "drinks/addOwnDrink",
  async (data, thunkAPI) => {
    try {
      //TODO: змінити шлях і правильно передати дату
      const { data } = await API.зщие("api/drinks/popular/own/add", data);
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
      const { data } = await API.delete(`api/drinks/popular/own/remove${id}`);
      return data;
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
      //TODO: змінити шлях
      const { data } = await API.get("api/favorite");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteThunk = createAsyncThunk(
  "drinks/getFav",
  async (data, thunkAPI) => {
    try {
      //TODO: змінити шлях і правильно передати дату
      const { data } = await API.get("api/favorite/add", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavoriteThunk = createAsyncThunk(
  "drinks/deleteFromFav",
  async (id, thunkAPI) => {
    try {
      //TODO: змінити шлях
      const { data } = await API.delete(`api/favorite/remove/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

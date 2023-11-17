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
      //TODO: що повертає бек, чи точно message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularThunk = createAsyncThunk(
  "drinks/getPopular",
  async (_, thunkAPI) => {
    try {
      //TODO: змінити шлях
      const { data } = await API.get("api/drinks/mainpage");
      return data;
    } catch (error) {
      //TODO: що повертає бек, чи точно message
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
      //TODO: що повертає бек, чи точно message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnDrinkThunk = createAsyncThunk(
  "drinks/addOwnDrink",
  async (data, thunkAPI) => {
    try {
      //TODO: змінити шлях і правильно передати дату
      const { data } = await API.delete("api/drinks/own/add", data);
      return data;
    } catch (error) {
      //TODO: що повертає бек, чи точно message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromOwnThunk = createAsyncThunk(
  "drinks/deleteFromOwn",
  async (id, thunkAPI) => {
    try {
      //TODO: змінити шлях
      const { data } = await API.delete(`api/drinks/own/${id}`);
      return data;
    } catch (error) {
      //TODO: що повертає бек, чи точно message
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
      //TODO: що повертає бек, чи точно message
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
      //TODO: що повертає бек, чи точно message
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
      //TODO: що повертає бек, чи точно message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

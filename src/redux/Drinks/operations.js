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

export const deleteFromFavoriteThunk = createAsyncThunk(
  "drinks/deleteFromFav",
  async (id, thunkAPI) => {
    try {
      //TODO: змінити шлях
      const { data } = await API.delete(`api/drinks/mainpage/${id}`);
      return data;
    } catch (error) {
      //TODO: що повертає бек, чи точно message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

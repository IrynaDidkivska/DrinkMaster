import { createSlice } from "@reduxjs/toolkit";
import { deleteFromFavoriteThunk } from "./operations";

const initialState = {
  drinks: [],
  popular: [],
  drinkDetails: {},
  own: [],
  favorite: [],
  page: 1,
  error: "",
  isLoading: false,
};

const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteFromFavoriteThunk.fulfilled, (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item.id !== payload);
    });
  },
});

export const drinkReducer = drinksSlice.reducer;

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
    builder
      .addCase(deleteFromFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter((item) => item.id !== payload);
      })
      // TODO: дописати інші Thunk
      .addMatcher(isAnyOf(deleteFromFavoriteThunk.pending), (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addMatcher(isAnyOf(deleteFromFavoriteThunk.fulfilled), (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(deleteFromFavoriteThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const drinkReducer = drinksSlice.reducer;

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  // addFavoriteThunk,
  addOwnDrinkThunk,
  deleteFromFavoriteThunk,
  deleteFromOwnThunk,
  getAllDrinksThunk,
  getByIDThunk,
  getFavoriteThunk,
  getOwnThunk,
  getPopularThunk,
} from "./operations";

const initialState = {
  drinks: [],
  popular: [],
  drinkDetails: {},
  own: [],
  drinkId: "",
  favorite: [],
  page: 1,
  error: "",
  isLoading: false,
};
// TODO: дописати інші Thunk
const drinksSlice = createSlice({
  name: "drinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllDrinksThunk.fulfilled, (state, { payload }) => {
        // state.drinks = [...state.drinks, ...payload];
        state.drinks.push(...payload);
        state.page = 1;
      })
      .addCase(getPopularThunk.fulfilled, (state, { payload }) => {
        state.popular = payload;
      })
      .addCase(getFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite = payload;
      })
      // .addCase(addFavoriteThunk.fulfilled, (state, { payload }) => {
      //   state.favorite = [...state.favorite, ...payload];
      // })
      .addCase(getByIDThunk.fulfilled, (state, { payload }) => {
        state.drinkDetails = payload;
      })
      .addCase(getOwnThunk.fulfilled, (state, { payload }) => {
        state.own = payload;
      })
      .addCase(addOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own = [...state.own, ...payload];
      })

      .addCase(deleteFromOwnThunk.fulfilled, (state, { payload }) => {
        state.own = state.favorite.filter((item) => item.drinkId !== payload);
      })
      .addCase(deleteFromFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter(
          (item) => item.drinkId !== payload
        );
      })

      .addMatcher(
        isAnyOf(
          deleteFromFavoriteThunk.pending,
          deleteFromOwnThunk.pending,
          getPopularThunk.pending,
          getAllDrinksThunk.pending,
          getByIDThunk.pending,
          getOwnThunk.pending,
          getFavoriteThunk.pending
          // addFavoriteThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      )
      .addMatcher(
        isAnyOf(
          deleteFromFavoriteThunk.fulfilled,
          deleteFromOwnThunk.fulfilled,
          getPopularThunk.fulfilled,
          getAllDrinksThunk.fulfilled,
          getByIDThunk.fulfilled,
          getOwnThunk.fulfilled,
          getFavoriteThunk.fulfilled
          // addFavoriteThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteFromFavoriteThunk.rejected,
          deleteFromOwnThunk.rejected,
          getPopularThunk.rejected,
          getAllDrinksThunk.rejected,
          getByIDThunk.rejected,
          getOwnThunk.rejected,
          getFavoriteThunk.rejected
          // addFavoriteThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const drinkReducer = drinksSlice.reducer;

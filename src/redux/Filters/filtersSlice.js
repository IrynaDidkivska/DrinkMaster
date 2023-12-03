import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getCategoriesThunk,
  getGlassesThunk,
  getIngredientsThunk,
} from './operations';

const initialState = {
  categories: [],
  glasses: [],
  ingredients: [],
  searchResult: [],
  error: '',
  isLoading: false,
};

const fitlerSlice = createSlice({
  name: 'filter',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
      })
      .addCase(getGlassesThunk.fulfilled, (state, { payload }) => {
        state.glasses = payload;
      })
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.pending,
          getIngredientsThunk.pending,
          getGlassesThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = '';
        }
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.fulfilled,
          getIngredientsThunk.fulfilled,
          getGlassesThunk.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.rejected,
          getIngredientsThunk.rejected,
          getGlassesThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const filterReducer = fitlerSlice.reducer;

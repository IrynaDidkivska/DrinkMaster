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
  page: 1,
  //TODO винести в компонент
  searchQuery: {
    query: '',
    category: '',
    ingredient: '',
  },
  error: '',
  isLoading: false,
};

const fitlerSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.searchQuery.query = payload;
      state.page = 1;
    },
    setIngridient: (state, { payload }) => {
      state.searchQuery.ingredient = payload;
    },
    setCategory: (state, { payload }) => {
      state.searchQuery.category = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    clearFilter: state => {
      state.searchQuery.query = '';
      state.searchQuery.category = '';
      state.searchQuery.ingredient = '';
    },
  },
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

export const { setQuery, setIngridient, setCategory, setPage, clearFilter } =
  fitlerSlice.actions;

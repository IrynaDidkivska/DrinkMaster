import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCategoriesThunk,
  // getDrinksByQueryThunk,
  getGlassesThunk,
  getIngredientsThunk,
} from './operations';

const initialState = {
  categories: [],
  glasses: [],
  ingredients: [],
  searchResult: [], // вся інфа шо прийде
  page: 1,
  searchQuery: {
    query: '',
    category: '', // слово пошуку
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
      // .addCase(getDrinksByQueryThunk.fulfilled, (state, { payload }) => {
      //   state.searchQuery = payload;
      // })
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.pending,
          getIngredientsThunk.pending,
          getGlassesThunk.pending
          // getDrinksByQueryThunk.pending

        ),
        state => {
          state.isLoading = true;
          state.error = '';
        },
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.fulfilled,
          getIngredientsThunk.fulfilled,
          getGlassesThunk.fulfilled
          // getDrinksByQueryThunk.fulfilled

        ),
        state => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.rejected,
          getIngredientsThunk.rejected,
          getGlassesThunk.rejected
          // getDrinksByQueryThunk.rejected

        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export const filterReducer = fitlerSlice.reducer;

export const { setQuery, setIngridient, setCategory, setPage } =
  fitlerSlice.actions;

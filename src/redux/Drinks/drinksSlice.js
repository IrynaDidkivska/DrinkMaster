import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  addNewDrinkThunk,
  deleteFromFavoriteThunk,
  deleteFromOwnThunk,
  getAllDrinksThunk,
  getAllSearchThunk,
  getByIDThunk,
  getFavoriteThunk,
  getOwnThunk,
  getPopularThunk,
  addFavoriteThunk,
  paginationThunk,
} from './operations';

const initialState = {
  drinks: {},
  popular: [],
  search: [],
  filteredDrinks: [],
  drinkDetails: [],
  own: [],
  drinkId: '',
  favorite: [],
  page: 1,
  totalPages: null,
  error: '',
  isLoading: false,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllDrinksThunk.fulfilled, (state, { payload }) => {
        state.drinks = payload[0];
        state.page = 1;
      })
      .addCase(getPopularThunk.fulfilled, (state, { payload }) => {
        state.popular = payload;
      })
      .addCase(getAllSearchThunk.fulfilled, (state, { payload }) => {
        state.filteredDrinks = payload.data;
      })
      .addCase(paginationThunk.fulfilled, (state, { payload }) => {
        state.search = payload.data;
        state.totalPages = payload.totalPages;
        state.page = 1;
      })
      .addCase(getFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite = payload.data;
        state.totalPages = payload.totalPages;
      })
      .addCase(addFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
      })
      .addCase(getByIDThunk.fulfilled, (state, { payload }) => {
        state.drinkDetails = payload;
      })
      .addCase(getOwnThunk.fulfilled, (state, { payload }) => {
        state.own = payload;
      })
      .addCase(deleteFromOwnThunk.fulfilled, (state, { payload }) => {
        state.own = state.own.filter(item => item.drinkId !== payload);
      })
      .addCase(deleteFromFavoriteThunk.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter(
          item => item.drinkId !== payload
        );
      })
      .addCase(addNewDrinkThunk.fulfilled, () => {
        toast.success('Super! You have successfully created a new drink.');
      })
      .addCase(addNewDrinkThunk.rejected, (state, { payload }) => {
        toast.error(payload);
      })

      .addMatcher(
        isAnyOf(
          deleteFromFavoriteThunk.pending,
          deleteFromOwnThunk.pending,
          getPopularThunk.pending,
          getAllDrinksThunk.pending,
          getByIDThunk.pending,
          getOwnThunk.pending,
          getFavoriteThunk.pending,
          getAllSearchThunk.pending,
          addNewDrinkThunk.pending,
          addFavoriteThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = '';
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
          getFavoriteThunk.fulfilled,
          getAllSearchThunk.fulfilled,
          addFavoriteThunk.fulfilled
        ),
        state => {
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
          getFavoriteThunk.rejected,
          getAllSearchThunk.rejected,
          addNewDrinkThunk.rejected,
          addFavoriteThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const drinkReducer = drinksSlice.reducer;
export const { setSearch } = drinksSlice.actions;

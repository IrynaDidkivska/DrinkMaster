import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  glasses: [],
  ingredients: [],
  searchResult: [], // вся інфа шо прийде
  page: 1,
  searchQuery: {
    query: "",
    category: "", // слово пошуку
    ingredient: "",
  },
  error: "",
  isLoading: false,
};

const fitlerSlice = createSlice({
  name: "filter",
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
  extraReducers: {}, // буде білдер
});

export const filterReducer = fitlerSlice.reducer;

export const { setQuery, setIngridient, setCategory, setPage } =
  fitlerSlice.actions;

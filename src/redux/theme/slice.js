import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    toggleThemeDark: state => {
      state.theme = 'dark';
    },
  },
});

export const themeReducer = slice.reducer;
export const { toggleTheme, toggleThemeDark } = slice.actions;

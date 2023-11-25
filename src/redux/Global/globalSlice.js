import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalEditOpen: false,
  isModalUserOpen: false,
  isModalMobileMenuOpen: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setModalEditOpen: (state, { payload }) => {
      state.isModalEditOpen = payload;
    },
    setModalUserOpen: (state, { payload }) => {
      state.isModalUserOpen = payload;
    },
    setModalMobileMenuOpen: (state, { payload }) => {
      state.isModalMobileMenuOpen = payload;
    },
    closeModal: (state) => {
      state.isModalEditOpen = false;
      state.isModalUserOpen = false;
      state.isModalMobileMenuOpen = false;
    },
  },
});

export const {
  closeModal,
  setModalEdit,
  setModalUserOpen,
  setModalMobileMenuOpen,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

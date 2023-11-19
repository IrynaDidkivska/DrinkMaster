import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalEditOpen: false,
  isModalUserOpen: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setModalEditOpen: (state, { payload }) => {
      state.isModalEditOpen = payload;
    },
    setModalUserOpen: (state, { payload }) => {
      state.isModalEditOpen = payload;
    },
    closeModal: (state) => {
      state.isModalEditOpen = false;
      state.setModalUserOpen = false;
    },
  },
});

export const { closeModal, setModalEdit } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

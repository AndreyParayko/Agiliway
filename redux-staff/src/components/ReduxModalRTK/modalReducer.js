import { createSlice } from "@reduxjs/toolkit";

export const modalReducer = createSlice({
  name: "modal_status",
  initialState: {
    value: false,
  },
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});

export const { showModal, hideModal } = modalReducer.actions;

export default modalReducer.reducer;

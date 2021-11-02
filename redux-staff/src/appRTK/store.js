import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../components/ReduxModalRTK/modalReducer";

export default configureStore({
  reducer: {
    modal_status: modalReducer,
  },
});

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const showModalAction = (isOpen) => ({
  type: SHOW_MODAL,
  payload: isOpen,
});
export const hideModalAction = (isOpen) => ({
  type: HIDE_MODAL,
  payload: isOpen,
});

const initialState = {
  isModalOpen: false,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL: {
      return { ...state, isModalOpen: action.payload };
    }
    case HIDE_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
}
const store = createStore(modalReducer, composeWithDevTools());
export default store;

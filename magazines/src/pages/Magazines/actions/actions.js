import {
  GET_MAGAZINES_SUCCESS,
  GET_MAGAZINES_START,
  GET_MAGAZINES_ERROR,
  GET_MAGAZINE_START,
  GET_MAGAZINE_ERROR,
  GET_MAGAZINE_SUCCESS,
  ADD_MODAL_OPEN,
  EDIT_MODAL_OPEN,
  DELETE_MODAL_OPEN,
  MODAL_CLOSE,
  MODAL_FUNCTION_START,
  MODAL_FUNCTION_SUCCESS,
  EDIT_MODAL_GET_DATA_START,
  EDIT_MODAL_GET_DATA_SUCCESS,
  EDIT_MODAL_GET_DATA_ERROR,
  MODAL_FUNCTION_ERROR,
} from "../action-types/magazines.action-types";

export const getMagazinesSuccessAction = (payload) => ({
  type: GET_MAGAZINES_SUCCESS,
  payload,
});

export const getMagazinesStartAction = () => ({
  type: GET_MAGAZINES_START,
});

export const getMagazinesErrorAction = () => ({
  type: GET_MAGAZINES_ERROR,
});

export const getMagazineSuccessAction = (payload) => ({
  type: GET_MAGAZINE_SUCCESS,
  payload,
});

export const getMagazineStartAction = () => ({
  type: GET_MAGAZINE_START,
});

export const getMagazineErrorAction = () => ({
  type: GET_MAGAZINE_ERROR,
});

export const addModalOpenAction = () => ({
  type: ADD_MODAL_OPEN,
});

export const editModalOpenAction = () => ({
  type: EDIT_MODAL_OPEN,
});

export const deleteModalOpenAction = (id, name) => ({
  type: DELETE_MODAL_OPEN,
  payload: { id, name },
});

export const modalCloseAction = () => ({
  type: MODAL_CLOSE,
});

export const modalFunctionStartAction = () => ({
  type: MODAL_FUNCTION_START,
});

export const modalFunctionSuccessAction = () => ({
  type: MODAL_FUNCTION_SUCCESS,
});

export const modalFunctionErrorAction = () => ({
  type: MODAL_FUNCTION_ERROR,
});

export const editModalGetDataStartAction = (data) => ({
  type: EDIT_MODAL_GET_DATA_START,
  payload: data,
});

export const editModalGetDataSuccessAction = (data) => ({
  type: EDIT_MODAL_GET_DATA_SUCCESS,
  payload: data,
});

export const editModalGetDataErrorAction = (data) => ({
  type: EDIT_MODAL_GET_DATA_ERROR,
  payload: data,
});

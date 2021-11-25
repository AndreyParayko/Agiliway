import {
  GET_MAGAZINES_SUCCESS,
  GET_MAGAZINES_IN_PROGRESS,
  GET_MAGAZINES_START,
  GET_MAGAZINES_ERROR,
  GET_MAGAZINE_START,
  GET_MAGAZINE_ERROR,
  GET_MAGAZINE_SUCCESS,
  GET_MAGAZINE_IN_PROGRESS,
  ADD_MODAL_OPEN,
  EDIT_MODAL_OPEN,
  DELETE_MODAL_OPEN,
  MODAL_CLOSE,
  FUNCTION_START,
  FUNCTION_SUCCESS,
  FUNCTION_IN_PROGRESS,
  EDIT_MODAL_GET_DATA_START,
  EDIT_MODAL_GET_DATA_SUCCESS,
  EDIT_MODAL_GET_DATA_ERROR,
  EDIT_MODAL_GET_DATA_IN_PROGRESS,
  FUNCTION_ERROR,
  ADD_FUNCTION_START,
  EDIT_FUNCTION_START,
  DELETE_FUNCTION_START,
} from '../action-types/magazines.action-types';

export const getMagazinesSuccessAction = (payload) => ({
  type: GET_MAGAZINES_SUCCESS,
  payload,
});
export const getMagazinesInProgressAction = () => ({
  type: GET_MAGAZINES_IN_PROGRESS,
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
export const getMagazineInProgressAction = () => ({
  type: GET_MAGAZINE_IN_PROGRESS,
});
export const getMagazineStartAction = (id) => ({
  type: GET_MAGAZINE_START,
  payload: id,
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

export const functionStartAction = (id, data) => ({
  type: FUNCTION_START,
  payload: { id, data },
});
export const editFunctionStartAction = (id, data) => ({
  type: EDIT_FUNCTION_START,
  payload: { id, data },
});
export const addFunctionStartAction = (data) => ({
  type: ADD_FUNCTION_START,
  payload: data,
});
export const deleteFunctionStartAction = (id) => ({
  type: DELETE_FUNCTION_START,
  payload: id,
});

export const functionSuccessAction = () => ({
  type: FUNCTION_SUCCESS,
});

export const functionErrorAction = () => ({
  type: FUNCTION_ERROR,
});
export const functionInProgressAction = () => ({
  type: FUNCTION_IN_PROGRESS,
});
export const editModalGetDataStartAction = (data) => ({
  type: EDIT_MODAL_GET_DATA_START,
  payload: data,
});

export const editModalGetDataSuccessAction = (data) => ({
  type: EDIT_MODAL_GET_DATA_SUCCESS,
  payload: data,
});

export const editModalGetDataErrorAction = (id) => ({
  type: EDIT_MODAL_GET_DATA_ERROR,
  payload: id,
});

export const editModalGetDataInProgressAction = () => ({
  type: EDIT_MODAL_GET_DATA_IN_PROGRESS,
});

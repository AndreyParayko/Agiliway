import {
  ADD_MODAL_OPEN,
  EDIT_MODAL_OPEN,
  DELETE_MODAL_OPEN,
  FUNCTION_START,
  FUNCTION_SUCCESS,
  FUNCTION_IN_PROGRESS,
  FUNCTION_ERROR,
  MODAL_CLOSE,
  EDIT_MODAL_GET_DATA_START,
  EDIT_MODAL_GET_DATA_ERROR,
  EDIT_MODAL_GET_DATA_SUCCESS,
  EDIT_MODAL_GET_DATA_IN_PROGRESS,
} from '../action-types/magazines.action-types';

const initialState = {
  isLoading: true,
  data: {},
  type: '',
  id: undefined,
  name: undefined,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MODAL_OPEN:
      return {
        ...state,
        isLoading: false,
        type: 'ADD_MODAL_TYPE',
      };
    case EDIT_MODAL_OPEN:
      return {
        ...state,
        isLoading: false,
        type: 'EDIT_MODAL_TYPE',
      };
    case DELETE_MODAL_OPEN:
      return {
        ...state,
        isLoading: false,
        type: 'DELETE_MODAL_TYPE',
        id: action.payload.id,
        name: action.payload.name,
      };
    case FUNCTION_START:
      return { ...state, isLoading: true };
    case FUNCTION_IN_PROGRESS:
      return { ...state, isLoading: true };
    case FUNCTION_SUCCESS:
      return {
        ...initialState,
      };
    case FUNCTION_ERROR:
      return { ...state, isLoading: false };
    case MODAL_CLOSE:
      return {
        ...initialState,
      };
    case EDIT_MODAL_GET_DATA_START:
      return { ...state, isLoading: true };
    case EDIT_MODAL_GET_DATA_IN_PROGRESS:
      return { ...state, isLoading: true };
    case EDIT_MODAL_GET_DATA_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case EDIT_MODAL_GET_DATA_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default modalReducer;

import {
  GET_MAGAZINES_SUCCESS,
  GET_MAGAZINES_START,
  GET_MAGAZINES_ERROR,
  GET_MAGAZINES_IN_PROGRESS,
} from '../action-types/magazines.action-types';

const initialState = {
  data: [],
  isLoading: true,
};

const magazinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAGAZINES_START:
      return { ...initialState, isLoading: true };
    case GET_MAGAZINES_IN_PROGRESS:
      return { ...initialState, isLoading: true };
    case GET_MAGAZINES_ERROR:
      return { ...state, isLoading: false };
    case GET_MAGAZINES_SUCCESS:
      return { isLoading: false, data: [...action.payload.data] };
    default:
      return state;
  }
};

export default magazinesReducer;

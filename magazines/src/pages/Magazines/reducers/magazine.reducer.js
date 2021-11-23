import {
  GET_MAGAZINE_START,
  GET_MAGAZINE_ERROR,
  GET_MAGAZINE_SUCCESS,
} from '../action-types/magazines.action-types';

const initialState = {
  data: {},
  isLoading: true,
};

const magazineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAGAZINE_START:
      return { ...initialState, isLoading: true, data: {} };
    case GET_MAGAZINE_ERROR:
      return { ...state, isLoading: false };
    case GET_MAGAZINE_SUCCESS:
      return { isLoading: false, data: action.payload };
    default:
      return state;
  }
};

export default magazineReducer;

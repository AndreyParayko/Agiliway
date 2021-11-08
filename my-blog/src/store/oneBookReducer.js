const initialState = {
  data: {},
  isLoading: true,
};

export const getBookAction = (payload) => ({ type: GET_ONE_BOOK, payload });
export const resetBookAction = () => ({ type: RESET_BOOK });

const GET_ONE_BOOK = "GET_ONE_BOOK";
const RESET_BOOK = "RESET_BOOK";

const oneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_BOOK:
      return { isLoading: false, data: action.payload };
    case RESET_BOOK:
      return { ...initialState };
    default:
      return state;
  }
};

export default oneBookReducer;

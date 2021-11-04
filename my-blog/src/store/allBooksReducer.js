const initialState = {
  data: [],
  isLoading: true,
};

export const getBooksAction = (payload) => ({ type: GET_ALL_BOOKS, payload });

const GET_ALL_BOOKS = "GET_ALL_BOOKS";

const allBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { isLoading : false, data: [...action.payload] };
    default:
      return state;
  }
};



export default allBooksReducer

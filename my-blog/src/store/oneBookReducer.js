const initialState = {
    data: {},
    isLoading: true,
  };
  
  export const getBookAction = (payload) => ({ type: GET_ONE_BOOK, payload });
  
  const GET_ONE_BOOK = "GET_ONE_BOOK";
  
  const oneBookReducer = (state = initialState, action) => {
    console.log('csaca',action.payload)
    switch (action.type) {
      case GET_ONE_BOOK:
        return {isLoading : false, data: action.payload };
      default:
        return state;
    }
  };
  
  
  
  export default oneBookReducer
  
import client from "./client";
import { getBooksAction } from "../store/allBooksReducer";
import { getBookAction } from "../store/oneBookReducer";
import { resetBookAction } from "../store/oneBookReducer";

export const getBooks = () => {
  return (dispatch) => {
    client.get("/books").then((response) => {
      dispatch(getBooksAction(response.data));
    });
  };
};

export const getBookById = (id) => {
  return (dispatch) => {
    dispatch(resetBookAction());
    client.get(`/books/${id}`).then((response) => {
      dispatch(getBookAction(response.data));
    });
  };
};

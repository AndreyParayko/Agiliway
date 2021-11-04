import { createStore, combineReducers ,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import oneBookReducer from "./oneBookReducer"
import allBooksReducer from "./allBooksReducer"

const rootReducer = combineReducers({
    books: allBooksReducer,
    book: oneBookReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
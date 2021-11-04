import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";


const initialState = {
  todos: ["Learn JS"],
  fields: {
    todoText: {
      name: "todoText",
      value: "",
      placeholder: "Type here",
      err: true, 
    },
  },
};

export const CHANGE_INPUT = "CHANGE_INPUT";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const handleInput = (changeObj) => ({
  type: CHANGE_INPUT,
  payload: changeObj,
});
export const addTodo = (increaseObj) => ({
  type: ADD_TODO,
  payload: increaseObj,
});
export const removeTodo = () => ({
  type: REMOVE_TODO,
});


function modalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT: {
      const { value, name, currentField, err } = action.payload;
      return {
        ...state,
        fields: { ...state.fields, [name]: { ...currentField, value, err } },
      };
    }
    case ADD_TODO:
      const { todoValue, isError } = action.payload;
      if (!isError) {
        return {
          todos: [...state.todos, todoValue],
          fields: {
            todoText: {
              name: "todoText",
              value: "",
              placeholder: "Type here",
              err: true,
            },
          },
        };
      } else return state;
    case REMOVE_TODO:
      const todosCopy = state.todos;
      todosCopy.pop()
      return { fields: { ...state.fields}, todos: todosCopy };
    default:
      return state;
  }
}
const store = createStore(modalReducer, composeWithDevTools());
export default store;

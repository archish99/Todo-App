import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./slices/category-slice";
import todoReducer from "./slices/todo-slice";

const rootReducer = combineReducers({
  categories: categoryReducer,
  todoList: todoReducer,
});

export default rootReducer;

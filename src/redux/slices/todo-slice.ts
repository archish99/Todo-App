import { createSelector, createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
import { RootState } from "../store";
import { CategoryState } from "./category-slice";

export interface todoState {
  id: string;
  title: string;
  date: Date;
  categories: CategoryState[];
  isCompleted: boolean;
}

const initialState: todoState[] = [];

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    updateTodoStatus: (state, action) => {
      const idx = state.findIndex((item) => item.id === action.payload.id);

      state[idx].isCompleted = !state[idx].isCompleted;
    },
    createTodo: (state, action) => {
      state.unshift({ id: shortid.generate(), ...action.payload });
    },
    editTodo: (state, action) => {
      const idx = state.findIndex((item) => item.id === action.payload.id);

      state[idx] = { ...action.payload };
    },
  },
});

export const { updateTodoStatus, createTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;

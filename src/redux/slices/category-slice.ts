import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

export interface CategoryState {
  title: string;
  count: number;
  bgColor: string;
  id: string;
}

const initialState: CategoryState[] = [
  {
    title: "Studying",
    count: 0,
    bgColor: "yellow.400",
    id: shortid.generate(),
  },
  {
    title: "Personal",
    count: 0,
    bgColor: "purple.400",
    id: shortid.generate(),
  },
  {
    title: "Work",
    count: 0,
    bgColor: "red.400",
    id: shortid.generate(),
  },
  {
    title: "Habit",
    count: 0,
    bgColor: "green.400",
    id: shortid.generate(),
  },
];

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateCategoriesCount: (state, action) => {
      action.payload.items.forEach((el: CategoryState) => {
        const idx = state.findIndex((item) => item.id === el.id);

        state[idx].count++;
      });
    },
    updateCategory: (state, action) => {
      const idx = state.findIndex((item) => item.id === action.payload.id);

      state[idx] = { ...action.payload };
    },
  },
});

export const { updateCategory, updateCategoriesCount } = categorySlice.actions;

export default categorySlice.reducer;

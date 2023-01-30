import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    subCategories: [],
  },
  reducers: {
    getCategory: (state, { payload }) => {
      state.categories = payload;
    },
    getSubCategory: (state, { payload }) => {
      state.subCategories = payload;
    },
  },
});

export const { getCategory, getSubCategory } = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export default categoryReducer;

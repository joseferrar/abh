import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    getCategory: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const { getCategory } = categorySlice.actions;
const categoryReducer = categorySlice.reducer;
export default categoryReducer;

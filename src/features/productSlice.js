import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productDetails: [],
  },
  reducers: {
    getProductDetails: (state, { payload }) => {
      state.productDetails = payload;
    },
  },
});

export const { getProductDetails } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

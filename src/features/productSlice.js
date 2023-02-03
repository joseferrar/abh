import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    productDetails: [],
  },
  reducers: {
    getProductList: (state, { payload }) => {
      state.productList = payload;
    },
    getProductDetails: (state, { payload }) => {
      state.productDetails = payload;
    },
  },
});

export const { getProductDetails, getProductList } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;

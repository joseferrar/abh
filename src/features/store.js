import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    category: categoryReducer,
    product: productReducer,
  },
});

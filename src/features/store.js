import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    category: categoryReducer,
  },
});

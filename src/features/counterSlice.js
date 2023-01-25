import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
    isLogin: false,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    login: (state) => {
      state.isLogin = true;
    },
  },
});

export const { increment, login } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
};

export const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    cartData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartData } = cartSlice.actions;

export default cartSlice.reducer;

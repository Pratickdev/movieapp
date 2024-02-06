import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = action.payload;
    },
    logout: (state) => {
      state.status = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

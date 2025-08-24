import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  loggedInUserEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoggedInUserDetails(state, action) {
      const { isLoggedIn, loggedInUserEmail } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.loggedInUserEmail = loggedInUserEmail;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;

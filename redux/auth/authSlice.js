import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    logIn: (state, action) => {
      return { isLoggedIn: true };
    },
    logOut: (state, action) => {
      return { isLoggedIn: false };
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

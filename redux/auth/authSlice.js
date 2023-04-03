import { createSlice } from '@reduxjs/toolkit';
import { authSignIn, authSignOut, authSignUp } from './authOperations';

const initialState = {
  userName: '',
  email: '',
  uid: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return {
        userName: action.payload.userName,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    setUid: (state, action) => {
      return { ...state, uid: action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authSignUp.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(authSignOut.fulfilled, () => {
        return initialState;
      });
  },
});

export const { setUserData, setUid } = authSlice.actions;

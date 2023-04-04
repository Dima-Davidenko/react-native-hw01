import { createAsyncThunk } from '@reduxjs/toolkit';
import { app } from '../../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';

const auth = getAuth(app);

export const authSignUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, password, userName }, thunkAPI) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: userName });
      return { userName, email, uid: user.uid };
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const authSignIn = createAsyncThunk('auth/signIn', async ({ email, password }, thunkAPI) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { userName: user.displayName, email: user.email, uid: user.uid };
  } catch (error) {
    console.log(error.message);
  }
});

export const authSignOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return;
  } catch (error) {
    console.log(error.message);
  }
});

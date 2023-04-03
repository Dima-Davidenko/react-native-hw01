import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { permissionsSlice } from './permissions/permissionsSlice';
import { postsSlice } from './posts/postsSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  permissions: permissionsSlice.reducer,
  posts: postsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

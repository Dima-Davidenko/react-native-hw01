import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  camera: null,
  location: null,
};

export const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    setCameraPermission: (state, action) => {
      return {
        ...state,
        camera: action.payload,
      };
    },
    setLocationPermission: (state, action) => {
      return {
        ...state,
        location: action.payload,
      };
    },
  },
});

export const { setCameraPermission, setLocationPermission } = permissionsSlice.actions;

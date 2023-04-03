import React from 'react';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCameraPermission,
  selectLocationPermission,
} from '../redux/permissions/permissionsSelectors';
import { setCameraPermission, setLocationPermission } from '../redux/permissions/permissionsSlice';

async function getCameraPermission(dispatch) {
  const { status } = await Camera.requestCameraPermissionsAsync();
  dispatch(setCameraPermission(status));
  return status;
}

async function hasCameraPermission() {
  const { status } = await Camera.getCameraPermissionsAsync();
  return status === 'granted';
}

async function getLocationPermission(dispatch) {
  const { status } = await Location.requestForegroundPermissionsAsync();
  dispatch(setLocationPermission(status));
  return status;
}

async function hasLocationaPermission() {
  const { status } = await Location.getBackgroundPermissionsAsync();
  return status === 'granted';
}

const Main = ({ children }) => {
  const cameraPermission = useSelector(selectCameraPermission);
  const locationPermission = useSelector(selectLocationPermission);
  const dispatch = useDispatch();
  if (!cameraPermission) {
    hasCameraPermission().then(res => {
      if (!res) {
        getCameraPermission(dispatch);
      } else {
        dispatch(setCameraPermission('granted'));
      }
    });
  }
  if (!locationPermission) {
    hasLocationaPermission().then(res => {
      if (!res) {
        getLocationPermission(dispatch);
      } else {
        dispatch(setLocationPermission('granted'));
      }
    });
  }
  return <>{children}</>;
};

export default Main;

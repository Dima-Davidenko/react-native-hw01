import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import LogOutSvg from './LogOutSvg';
import { authSignOut } from '../../redux/auth/authOperations';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(authSignOut());
  };
  return (
    <TouchableOpacity onPress={userLogOut} style={styles.container}>
      <LogOutSvg />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
  },
});

export default LogOutBtn;

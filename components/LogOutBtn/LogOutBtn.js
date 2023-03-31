import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authSlice";
import LogOutSvg from "./LogOutSvg";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const userLogOut = () => {
    dispatch(logOut());
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

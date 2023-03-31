import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title, contWrp }) => {
  return (
    <View style={{ ...styles.container, ...contWrp }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
});

export default Header;

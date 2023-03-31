import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: '#FF6C00' }}>Comments Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 22,
    marginBottom: 20,
  },
});

export default CommentsScreen;

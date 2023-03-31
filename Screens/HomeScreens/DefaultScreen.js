import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DefaultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: '#FF6C00' }}>Default Screen (Home)</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
        <Text style={styles.text}>Go to Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
        <Text style={styles.text}>Go to Maps</Text>
      </TouchableOpacity>
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

export default DefaultScreen;

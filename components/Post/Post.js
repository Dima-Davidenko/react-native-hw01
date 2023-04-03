import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CloudBtn from '../Buttons/CloudBtn/CloudBtn';
import MapBtn from '../Buttons/MapBtn/MapBtn';

const Post = ({ title, coords, location, photo, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.image}></Image>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.wrappContainer}>
        <TouchableOpacity
          style={styles.wrappComment}
          onPress={() => navigation.navigate('Comments')}
        >
          <CloudBtn />
          <Text style={styles.textComment}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.wrappMap}
          onPress={() => navigation.navigate('Maps', { coords })}
        >
          <MapBtn />
          <Text style={styles.textMap}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    height: 240,
  },
  textTitle: {
    marginTop: 8,
    marginBottom: 8,

    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  wrappContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrappComment: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textComment: {
    marginLeft: 6,
    color: '#BDBDBD',
  },

  wrappMap: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  textMap: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
});

export default Post;

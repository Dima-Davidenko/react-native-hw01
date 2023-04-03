import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { selectPosts } from '../../redux/posts/postsSelectors';
import Post from '../../components/Post/Post';
import { useSelector } from 'react-redux';

const DefaultScreen = ({ navigation }) => {
  const posts = useSelector(selectPosts);
  return (
    <ScrollView style={{ marginHorizontal: 10 }}>
      {posts?.length > 0 &&
        posts.map(({ title, coords, location, photo }) => {
          return (
            <Post
              key={coords.timestamp}
              title={title}
              coords={coords}
              location={location}
              photo={photo}
              navigation={navigation}
            />
          );
        })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DefaultScreen;

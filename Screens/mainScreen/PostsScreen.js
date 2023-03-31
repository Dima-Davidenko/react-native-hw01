import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
import CommentsScreen from '../HomeScreens/CommentsScreen';
import DefaultScreen from '../HomeScreens/DefaultScreen';
import MapScreen from '../HomeScreens/MapScreen';

const PostsScreen = () => {
  const PostScreenStack = createNativeStackNavigator();
  return (
    <PostScreenStack.Navigator>
      <PostScreenStack.Screen
        options={{
          headerTitle: () => {
            return (
              <Header title="Posts" contWrp={{ paddingRight: Platform.OS == 'ios' ? 10 : 30 }} />
            );
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return <LogOutBtn />;
          },
        }}
        name="Home"
        component={DefaultScreen}
      />
      <PostScreenStack.Screen
        options={{
          headerTitle: () => {
            return (
              <Header title="Coments" contWrp={{ paddingRight: Platform.OS == 'ios' ? 90 : 140 }} />
            );
          },
          headerTitleAlign: 'center',
        }}
        name="Comments"
        component={CommentsScreen}
      />
      <PostScreenStack.Screen
        options={{
          headerTitle: () => {
            return (
              <Header title="Maps" contWrp={{ paddingRight: Platform.OS == 'ios' ? 100 : 140 }} />
            );
          },
          headerTitleAlign: 'center',
        }}
        name="Maps"
        component={MapScreen}
      />
    </PostScreenStack.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostsScreen;

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../Screens/auth/LoginScreen';
import RegistrationScreen from '../../Screens/auth/RegistrationScreen';
import PostsScreen from '../../Screens/mainScreen/PostsScreen';
import CreateScreen from '../../Screens/mainScreen/CreateScreen';
import ProfileScreen from '../../Screens/mainScreen/ProfileScreen';
import HomeBtn from '../MainNavButtons/HomeBtn';
import CreatePostBtn from '../MainNavButtons/CreatePostBtn';
import ProfileBtn from '../MainNavButtons/ProfileBtn';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import Header from '../Header/Header';

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const Navigation = () => {
  const isAuth = useSelector(selectIsLoggedIn);
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => {
            return <HomeBtn />;
          },
          headerShown: false,
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerTitle: () => {
            return (
              <Header
                title="Create a post"
                contWrp={{ paddingRight: Platform.OS == 'ios' ? 10 : 30 }}
              />
            );
          },
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return <CreatePostBtn />;
          },
          tabBarShowLabel: false,
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          headerTitle: () => {
            return (
              <Header
                title="User profile"
                contWrp={{ paddingRight: Platform.OS == 'ios' ? 10 : 30 }}
              />
            );
          },
          headerTitleAlign: 'center',
          tabBarIcon: () => {
            return <ProfileBtn />;
          },
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default Navigation;

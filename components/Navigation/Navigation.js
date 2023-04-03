import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from '../../Screens/auth/LoginScreen';
import RegistrationScreen from '../../Screens/auth/RegistrationScreen';
import CreateScreen from '../../Screens/mainScreen/CreateScreen';
import PostsScreen from '../../Screens/mainScreen/PostsScreen';
import ProfileScreen from '../../Screens/mainScreen/ProfileScreen';
import { selectAuthUid } from '../../redux/auth/authSelectors';
import { setUid, setUserData } from '../../redux/auth/authSlice';
import Header from '../Header/Header';
import CreatePostBtn from '../MainNavButtons/CreatePostBtn';
import HomeBtn from '../MainNavButtons/HomeBtn';
import ProfileBtn from '../MainNavButtons/ProfileBtn';

const auth = getAuth();

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const Navigation = () => {
  const isAuth = useSelector(selectAuthUid);
  if (isAuth === '') {
    const dispatch = useDispatch();
    onAuthStateChanged(auth, user => {
      if (user) {
        const { email, displayName, uid } = user;
        dispatch(setUserData({ email, uid, userName: displayName }));
      } else {
        dispatch(setUid(null));
      }
    });
    return null;
  }

  if (isAuth === null) {
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
          unmountOnBlur: true,
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

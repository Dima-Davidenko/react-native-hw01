import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './components/Navigation/Navigation';
import { store } from './redux/store';
import Main from './components/Main';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Main>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </Main>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });

export default App;

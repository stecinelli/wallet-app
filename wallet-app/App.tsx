import React, { useCallback, useEffect } from 'react';
//custom fonts
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import RootStack from './navigators/RootStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView()
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return (
    <RootStack />
  );
}



import React from 'react';
//custom fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootStack from './navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if(!fontsLoaded) return (<AppLoading />);

  return (
    <RootStack />
  );
}



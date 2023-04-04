import React from 'react';
import Welcome from './screens/Welcome';
//custom fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if(!fontsLoaded) return (<AppLoading />);

  return (
    <Welcome />
  );
}



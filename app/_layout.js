import {Stack} from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"; 

SplashScreen.preventAutoHideAsync(); // to prevent the splash screen from automatically hiding

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  })

  //use callback to prevent the splash screen from automatically hiding
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync(); // to hide the splash screen
    }
  } , [fontsLoaded])

  if(!fontsLoaded) {
    return null;
  }
  
  return <Stack onLayout={onLayoutRootView} />
}

export default Layout;

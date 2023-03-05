import React from "react";
import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const fontBasePath = "../../assets/fonts/";

const fonts = {
  "Tiro-Bangla": require(`${fontBasePath}TiroBangla-Regular.ttf`),
  "Gantari-Bold": require(`${fontBasePath}Gantari-Bold.ttf`),
  "Gantari-Regular": require(`${fontBasePath}Gantari-Regular.ttf`),
};

function WithFonts(Component) {
  return function FontRenderer(props) {
    const [fontsLoaded] = useFonts(fonts);

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

    return (
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Component />
      </View>
    );
  };
}

export default WithFonts;

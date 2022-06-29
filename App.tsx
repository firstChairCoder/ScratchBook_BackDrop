/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, StatusBar, useColorScheme } from "react-native";
import { UtilityThemeProvider } from "react-native-design-utility";
import { NavigationContainer } from "@react-navigation/native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { darkTheme, lightTheme } from "@constants/extraTheme";
import RootNavigator from "@navigation/Root";

import { theme } from "./src/theme";

export default function App() {
  const scheme = useColorScheme();
  // console.log(scheme);
  const isDarkMode = scheme === "dark";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(isDarkMode ? "#000" : "#FFF");
      StatusBar.setTranslucent(true);
    }
  }, [scheme, isDarkMode]);

  useEffect(() => {
    async function prepare() {
      try {
        // keeps the splash screen visible while assets are cached
        await SplashScreen.preventAutoHideAsync();

        // pre-load/cache assets: images, fonts, and videos
        await Font.loadAsync({
          Regular: Poppins_400Regular,
          Medium: Poppins_500Medium,
          SemiBold: Poppins_600SemiBold,
          Bold: Poppins_700Bold
        });
      } catch (e) {
        // console.warn(e);
        throw e;
      } finally {
        // loading is complete
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    // when loading is complete
    if (isLoading === false) {
      // hide splash function
      const hideSplash = async () => SplashScreen.hideAsync();

      // hide splash screen to show app
      hideSplash();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UtilityThemeProvider theme={theme}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <RootNavigator />
        </NavigationContainer>
      </UtilityThemeProvider>
    </GestureHandlerRootView>
  );
}

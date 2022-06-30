/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";
import { UtilityThemeProvider } from "react-native-design-utility";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { darkTheme, lightTheme } from "@constants/extraTheme";
import { HomeScreen } from "@screens/HomeScreen";

import { theme } from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  // console.log(scheme);
  const isDarkMode = scheme === "dark";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
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
          Light: Poppins_300Light,
          Regular: Poppins_400Regular,
          Italic: Poppins_400Regular_Italic,
          Medium: Poppins_500Medium,
          SemiBold: Poppins_600SemiBold
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
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UtilityThemeProvider>
  );
}

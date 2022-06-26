import React, { useEffect } from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";
import { UtilityThemeProvider } from "react-native-design-utility";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { darkTheme, lightTheme } from "@constants/extraTheme";
import { HomeScreen } from "@screens/HomeScreen";

import { theme } from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  // console.log(scheme);
  const isDarkMode = scheme === "dark";

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, [scheme, isDarkMode]);

  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UtilityThemeProvider>
  );
}

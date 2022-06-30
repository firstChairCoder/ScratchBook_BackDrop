import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";

import { RootNavigator } from "./src/navigation";
import { persistor, store } from "./src/redux/store";
import Loading from "./src/components/Loading";
import OfflineNotice from "./src/components/OfflineNotice";

const fonts = {
  "SFProDisplay-Light": require("./assets/fonts/SFProDisplay-Light.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf")
};

export default function App() {
  const [isLoaded] = useFonts(fonts);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigator />
            <OfflineNotice />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";

import { store, persistor } from "./src/redux/store";
// import AppLoading from 'expo-app-loading';

// export default props => {
//   let [fontsLoaded] = useFonts({
//     'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
//     'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
//     'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
//   });

//   if (!fontsLoaded) {
//     return <ActivityIndicator size={"large"} color={"#000"}/>;
//   } else {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontFamily: 'SFProDisplay-Semibold', fontSize: 40 }}>Platform Default</Text>
//         <Text style={{ fontSize: 40 }}>Platform Default</Text>
//       </View>
//     );
//   }
// };

const fonts = {
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
};

// const RootApp = createAppContainer(RootNavigator)

export default function App() {
  const [isLoaded] = useFonts(fonts);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"#000"} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>

    // <View>
    //   <Text>Carpe Diem</Text>
    // </View>
  );
}

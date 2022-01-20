import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
      </PersistGate>
      
    </Provider>
  );
}

// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { LoadAssets } from "./src/components";

// import {
//   RootNavigator
// } from "./src/navigation";

// // const assets = [...mainAssets];

// const fonts = {
//   "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//   "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//   "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
// };

// export default function App() {
//   return (
//       <LoadAssets {...{ fonts }}>
//         <SafeAreaProvider>
//           <RootNavigator />
//         </SafeAreaProvider>
//       </LoadAssets>
//   );
// }

// // import { StatusBar } from 'expo-status-bar';
// // import { SafeAreaProvider } from 'react-native-safe-area-context';

// // import useCachedResources from './hooks/useCachedResources';
// // import useColorScheme from './hooks/useColorScheme';
// // import Navigation from './navigation';

// // export default function App() {
// //   const isLoadingComplete = useCachedResources();
// //   const colorScheme = useColorScheme();

// //   if (!isLoadingComplete) {
// //     return null;
// //   } else {
// //     return (
// //       <SafeAreaProvider>
// //         <Navigation colorScheme={colorScheme} />
// //         <StatusBar />
// //       </SafeAreaProvider>
// //     );
// //   }
// // }

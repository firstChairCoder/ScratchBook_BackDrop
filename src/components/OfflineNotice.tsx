import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#DE0202",
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1
  },
  text: {
    color: "#FFF",
    fontFamily: "SFProDisplay-Regular",
    fontSize: 16
  }
});

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );
  }

  return null;
}

export default OfflineNotice;

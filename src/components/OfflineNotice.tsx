import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    bottom: Constants.statusBarHeight,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1
  }
});

function OfflineNotice() {
  const netInfo = useNetInfo();
  const { colors } = useTheme();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <Box style={[styles.container, { backgroundColor: colors.redLight }]}>
        <Text>No internet connection</Text>
      </Box>
    );
  }

  return null;
}

export default OfflineNotice;

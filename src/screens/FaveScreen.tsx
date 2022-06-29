import React from "react";
import { Box, Text } from "react-native-design-utility";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

export const FaveScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box f={1} px="sm" pt={Constants.statusBarHeight} bg="blueLightest">
        <Box f={1} bg="purpleLighter" center>
          <Text size={24} font="regular" center>
            Your favorites will be displayed here
          </Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

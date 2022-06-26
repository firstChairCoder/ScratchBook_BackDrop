import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-design-utility";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  }
});

export const HomeScreen = () => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text size={32} color={"greyLight"}>
        A second chance at a first impression!
      </Text>
    </View>
  );
};

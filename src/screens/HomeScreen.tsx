import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { FaveCard } from "@components";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16
  }
});

export const HomeScreen = () => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text size={32} color={"greyLight"} font="italic">
        A second chance at a first impression!
      </Text>
    </View>
  );
};

import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerWrapper: {
    height: height * 0.1,
    justifyContent: "center",
  },
  header: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 16,
  },
});

const Header = ({ label }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>{label}</Text>
    </View>
  );
};

export default Header;

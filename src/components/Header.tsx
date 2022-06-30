import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerWrapper: {
    height: height * 0.1,
    justifyContent: "center"
  },
  header: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 16
  }
});

interface HeaderProps {
  label: string;
}

const Header: FC<HeaderProps> = ({ label }) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>{label}</Text>
    </View>
  );
};

export default Header;

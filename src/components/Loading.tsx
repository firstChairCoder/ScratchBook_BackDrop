import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center"
  },
  loading: {
    fontSize: 14
  }
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={"large"} color={"#000"} />
    <Text style={styles.loading}>Loading...</Text>
  </View>
);

export default Loading;

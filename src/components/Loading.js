import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  loading: {
    fontSize: 14,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size={"large"} color={"#000"} />
    <Text style={styles.loading}>Loading...</Text>
  </View>
);

export default Loading;

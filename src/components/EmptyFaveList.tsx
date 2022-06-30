import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  fillerWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  fillerText: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 16,
    textAlign: "center"
  }
});

const EmptyFaveList = () => {
  return (
    <View style={styles.fillerWrapper}>
      <Text style={styles.fillerText}>There are no favorites yet.</Text>
      <Text style={styles.fillerText}>
        Tap the heart button next to a cat and your favorites will be displayed
        here
      </Text>
    </View>
  );
};

export default EmptyFaveList;
